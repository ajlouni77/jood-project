import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const cardTypes = [
  { name: "MasterCard", color: "bg-[#2D336B]", prefix: /^5[1-5]/, logo: "/api/placeholder/60/40" },
  { name: "Visa", color: "bg-[#2D336B]", prefix: /^4/, logo: "/api/placeholder/60/40" },
  { name: "Diners Club", color: "bg-[#2D336B]", prefix: /^3[689]/, logo: "/api/placeholder/60/40" },
  { name: "American Express", color: "bg-[#2D336B]", prefix: /^3[47]/, logo: "/api/placeholder/60/40" },
  { name: "Discover", color: "bg-[#2D336B]", prefix: /^65/, logo: "/api/placeholder/60/40" },
  { name: "Dankort", color: "bg-[#2D336B]", prefix: /^5019/, logo: "/api/placeholder/60/40" },
];

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cashAmount, setCashAmount] = useState("");

  // Retrieve the amount from local storage when the component mounts
  useEffect(() => {
    const storedAmount = localStorage.getItem("donationAmount");
    if (storedAmount) {
      setCashAmount(storedAmount);
    }
  }, []);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const value = formatCardNumber(e.target.value);
    setCardNumber(value);
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2)}`;
    }
    
    return v;
  };

  const handleExpiryChange = (e) => {
    const value = formatExpiry(e.target.value.replace(/[^0-9]/g, "").slice(0, 4));
    setExpiry(value);
  };

  const validateCreditCard = () => {
    // Validate card number (must be 16 digits)
    if (!cardNumber || cardNumber.replace(/\s/g, "").length !== 16) {
      Swal.fire("خطأ", "يرجى إدخال رقم بطاقة صالح مكون من 16 رقم", "error");
      return false;
    }

    // Validate card holder name (must not be empty)
    if (!cardHolder || cardHolder.trim() === "") {
      Swal.fire("خطأ", "يرجى إدخال اسم حامل البطاقة", "error");
      return false;
    }

    // Validate expiry date (must be in MM/YY format and not expired)
    const [month, year] = expiry.split("/");
    if (!month || !year || month.length !== 2 || year.length !== 2) {
      Swal.fire("خطأ", "يرجى إدخال تاريخ انتهاء صالح (MM/YY)", "error");
      return false;
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    if (
      +year < currentYear ||
      (+year === currentYear && +month < currentMonth)
    ) {
      Swal.fire("خطأ", "تاريخ انتهاء البطاقة غير صالح", "error");
      return false;
    }

    // Validate CVC (must be 3 digits)
    if (!cvc || cvc.length !== 3) {
      Swal.fire("خطأ", "يرجى إدخال رمز CVC صالح مكون من 3 أرقام", "error");
      return false;
    }

    return true;
  };
  const handlePayment = async () => {
    if (paymentMethod === "cash") {
      const numericCashAmount = parseInt(cashAmount); // تحويل cashAmount إلى رقم
  
      if (isNaN(numericCashAmount) || numericCashAmount <= 0) {
        Swal.fire("خطأ", "يرجى إدخال مبلغ صالح", "error");
        return;
      }
  
      Swal.fire("تم الدفع بنجاح!", `المبلغ المدفوع: ${numericCashAmount} دينار`, "success");
    } else {
      if (!validateCreditCard()) {
        return;
      }
  
      const numericCashAmount = parseInt(cashAmount);
  
      if (isNaN(numericCashAmount) || numericCashAmount <= 0) {
        Swal.fire("خطأ", "يرجى إدخال مبلغ صالح", "error");
        return;
      }
  
      const paymentData = {
        paymentMethod,
        cardNumber,
        cardHolder,
        expiry,
        cvc,
        cashAmount: numericCashAmount, // إرسال المبلغ كرقم
      };
  
      console.log("Payment Data: ", paymentData); // تسجيل البيانات للتأكد
  
      try {
        const response = await axios.post("http://localhost:4000/api/payment", paymentData, {
          headers: { "Content-Type": "application/json" },
        });
  
        console.log("Response: ", response); // تسجيل استجابة الخادم
  
        if (response.data) {
          Swal.fire("تم الدفع بنجاح!", "تمت معالجة عملية الدفع ببطاقتك", "success");
        } else {
          Swal.fire("خطأ", response.data.error);
        }
      } catch (error) {
        console.error("Error processing payment:", error); // تسجيل الخطأ
        Swal.fire("خطأ", "تعذر الاتصال بالخادم. يرجى المحاولة لاحقًا.", "error");
      }
    }
  };
  
  const detectedCard = cardTypes.find((card) => card.prefix.test(cardNumber.replace(/\s/g, ""))) || null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#2D336B] to-[#1a1f46]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl border border-[#A9B5DF] transform transition-all duration-300 hover:shadow-[#2D336B]/20">
        <h2 className="text-3xl font-bold text-center text-[#2D336B] border-b pb-4 border-[#A9B5DF]">اختر طريقة الدفع</h2>
        
        <div className="flex justify-around bg-[#F0F3FA] p-4 rounded-xl shadow-inner">
          <label className="flex items-center cursor-pointer hover:opacity-80 transition">
            <input 
              type="radio" 
              value="cash" 
              checked={paymentMethod === "cash"} 
              onChange={() => setPaymentMethod("cash")}
              className="w-5 h-5 text-[#2D336B]" 
            />
            <span className="mr-2 text-[#2D336B] font-medium">نقدًا</span>
          </label>
          <label className="flex items-center cursor-pointer hover:opacity-80 transition">
            <input 
              type="radio" 
              value="credit" 
              checked={paymentMethod === "credit"} 
              onChange={() => setPaymentMethod("credit")}
              className="w-5 h-5 text-[#2D336B]" 
            />
            <span className="mr-2 text-[#2D336B] font-medium">بطاقة ائتمان</span>
          </label>
        </div>
        
        {paymentMethod === "cash" ? (
          <div className="bg-[#F0F3FA] p-5 rounded-xl shadow-md">
            <label className="block text-md font-semibold text-[#2D336B] mb-3 text-right">أدخل المبلغ النقدي</label>
            <div className="relative">
              <input 
                type="number" 
                value={cashAmount} 
                onChange={(e) => setCashAmount(e.target.value)} 
                className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-right bg-white" 
                placeholder="أدخل المبلغ"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2D336B] font-medium">دينار</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {detectedCard && (
              <div className="flex justify-end items-center space-x-3 p-3 rounded-lg bg-[#F0F3FA]">
                <span className="text-sm text-[#2D336B]">نوع البطاقة:</span>
                <span className={`font-medium text-white px-3 py-1 rounded-lg ${detectedCard.color}`}>{detectedCard.name}</span>
                <img src={detectedCard.logo} alt={detectedCard.name} className="w-10 h-6 object-contain" />
              </div>
            )}
            
            <div className="bg-[#F0F3FA] p-5 rounded-xl shadow-md">
              <div className="relative mb-4">
                <input 
                  type="number" 
                  value={cashAmount} 
                  onChange={(e) => setCashAmount(e.target.value)} 
                  className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-right bg-white" 
                  placeholder="أدخل المبلغ"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2D336B] font-medium">دينار</span>
              </div>
              <label className="block text-md font-semibold text-[#2D336B] mb-3 text-right">رقم البطاقة</label>
              <input 
                type="text" 
                value={cardNumber} 
                onChange={handleCardNumberChange}
                className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-right bg-white" 
                placeholder="1234 5678 9012 3456" 
                maxLength={19} 
                dir="ltr"
              />
            </div>
            
            <div className="bg-[#F0F3FA] p-5 rounded-xl shadow-md">
              <label className="block text-md font-semibold text-[#2D336B] mb-3 text-right">اسم حامل البطاقة</label>
              <input 
                type="text" 
                value={cardHolder} 
                onChange={(e) => setCardHolder(e.target.value.toUpperCase())} 
                className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-right bg-white" 
                placeholder="الاسم الكامل" 
              />
            </div>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-1/2 bg-[#F0F3FA] p-5 rounded-xl shadow-md">
                <label className="block text-md font-semibold text-[#2D336B] mb-3 text-right">تاريخ الانتهاء</label>
                <input 
                  type="text" 
                  value={expiry} 
                  onChange={handleExpiryChange} 
                  className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-center bg-white" 
                  placeholder="MM/YY" 
                  maxLength={5}
                  dir="ltr"
                />
              </div>
              <div className="w-1/2 bg-[#F0F3FA] p-5 rounded-xl shadow-md">
                <label className="block text-md font-semibold text-[#2D336B] mb-3 text-right">رمز CVC</label>
                <input 
                  type="text" 
                  value={cvc} 
                  onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ""))} 
                  className="w-full p-4 border-2 border-[#A9B5DF] rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B] transition text-center bg-white" 
                  placeholder="123" 
                  maxLength={3}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        )}
        
        <button 
          className="w-full py-4 font-bold text-white bg-[#2D336B] hover:bg-[#1f2551] rounded-xl shadow-lg transition duration-300 focus:ring-4 focus:ring-[#A9B5DF] focus:ring-opacity-50 transform hover:scale-105"
          onClick={handlePayment}
        >
          {paymentMethod === "cash" ? "التبرع نقدًا" : "تبرع الآن"}
        </button>
      </div>
    </div>
  );
}