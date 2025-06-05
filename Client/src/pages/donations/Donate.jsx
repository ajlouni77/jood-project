
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Donate = () => {
  const [activeTab, setActiveTab] = useState("donations");
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [zakatAmount, setZakatAmount] = useState(null); // حالة جديدة لحساب الزكاة
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setDonationAmount(amount);
  };
  const handleDonate = () => {
    if (amount && Number(amount) > 0) {
      localStorage.setItem("donationAmount", amount);
      alert("تم حفظ المبلغ، انتقل إلى صفحة الدفع");
      // يمكنك توجيه المستخدم إلى صفحة الدفع مثلاً:
      // window.location.href = "/payment";
      navigate("/PaymentPage");
    } else {
      alert("يرجى إدخال مبلغ صالح");
    }
  };
  const calculateZakat = () => {
    const amount = parseFloat(donationAmount);
    if (isNaN(amount)) {
      alert("الرجاء إدخال مبلغ صحيح");
      return;
    }
    const zakat = amount * 0.025; // حساب الزكاة (2.5%)
    setZakatAmount(zakat.toFixed(2)); // تخزين قيمة الزكاة مع تقريبها إلى منزلتين عشريتين
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F7FC]">
      <div className="w-full max-w-6xl px-4 py-12">
        {/* Header with improved styling */}
        <h1 className="text-5xl font-bold mb-10 text-[#2D336B] text-center relative">
          التبرعات
          <span className="block h-1.5 w-32 bg-[#A9B5DF] mx-auto mt-5 rounded-full"></span>
        </h1>

        {/* Improved Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-1.5 flex">
          <button
  onClick={() => setActiveTab("donations")}
  className={`px-8 py-3 rounded-full text-center font-bold transition-all duration-300 ${
    activeTab === "donations"
      ? "bg-[#2D336B] text-white shadow-md"
      : "text-[#2D336B] hover:bg-[#F0F3FA]"
  }`}
>
  التبرعات العينية
</button>
            <button
              onClick={() => setActiveTab("charity")}
              className={`px-8 py-3 rounded-full text-center font-bold transition-all duration-300 ${
                activeTab === "charity"
                  ? "bg-[#2D336B] text-white shadow-md"
                  : "text-[#2D336B] hover:bg-[#F0F3FA]"
              }`}
            >
              الصدقات
            </button>
          </div>
        </div>

        {/* In-kind Donations Section */}
        {activeTab === "donations" && (
          <>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#2D336B] mb-4">
                التبرعات العينية
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                يمكنك التبرع بالطعام والملابس والكتب وغيرها من الاحتياجات
                الأساسية للمساعدة في دعم الأسر المحتاجة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Food Donation Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    تبرع بطعام
                  </h2>
                  <p className="text-gray-600 mb-8 h-14">
                    ساهم في توفير وجبات طعام للأسر المحتاجة وإطعام المساكين.
                  </p>
                  <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    تبرع الآن
                  </button>
                </div>
              </div>

              {/* Clothes Donation Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    تبرع بملابس
                  </h2>
                  <p className="text-gray-600 mb-8 h-14">
                    تبرع بملابس جديدة أو مستعملة بحالة جيدة لمن هم في حاجة
                    إليها.
                  </p>
                  <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    تبرع الآن
                  </button>
                </div>
              </div>

              {/* Books Donation Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    تبرع بكتب
                  </h2>
                  <p className="text-gray-600 mb-8 h-14">
                    ساهم في توفير الكتب للطلاب المحتاجين ودعم العلم والتعليم.
                  </p>
                  <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    تبرع الآن
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Charity Section - Improved */}
        {activeTab === "charity" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#2D336B] mb-4">
                الصدقات
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                تصدق بما تيسر من المال لدعم مشاريع الخير ومساعدة المحتاجين.
                الصدقة تطفئ غضب الرب وتمحو الخطيئة كما يمحو الماء النار.
              </p>
            </div>

            {/* Featured Projects - New Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-[#2D336B] mb-6 text-center">
                مشاريع مميزة
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Iftar Sa'im Card - Improved */}
                <div className="bg-[#F8F9FC] rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#2D336B] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#2D336B]">
                      إفطار صائم
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm h-12">
                    من فطر صائماً كان له مثل أجره من غير أن ينقص من أجر الصائم
                    شيء.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D336B] font-bold">20 دينار</span>
                    <button  onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      تبرع الآن
                    </button>
                  </div>
                </div>

                {/* Orphan Sponsorship */}
                <div className="bg-[#F8F9FC] rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#2D336B] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#2D336B]">
                      كفالة يتيم
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm h-12">
                    أنا وكافل اليتيم في الجنة كهاتين. وأشار بالسبابة والوسطى.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D336B] font-bold">300 دينار</span>
                    <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      تبرع الآن
                    </button>
                  </div>
                </div>

                {/* Feed the Poor */}
                <div className="bg-[#F8F9FC] rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#2D336B] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#2D336B]">
                      إطعام مسكين
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm h-12">
                    ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم به.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D336B] font-bold">15 دينار</span>
                    <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      تبرع الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Amount Selector - New Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-[#2D336B] mb-6 text-center">
                اختر قيمة التبرع
              </h3>

              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[50, 100, 200, 500].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 rounded-lg text-center font-bold transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-[#2D336B] text-white"
                          : "border-2 border-[#A9B5DF] text-[#2D336B] hover:bg-[#F0F3FA]"
                      }`}
                    >
                      {amount} دينار
                    </button>
                  ))}
                </div>

                <div className="relative mb-6">
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="أو أدخل قيمة أخرى"
                    className="w-full py-3 px-4 rounded-lg border-2 border-[#A9B5DF] focus:border-[#2D336B] focus:outline-none text-right"
                  />
                  <span className="absolute left-4 top-3 text-gray-500">
                    دينار
                  </span>
                </div>

                <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#3D4380] text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full text-lg">
                  تبرع الآن
                </button>
              </div>

              <div className="bg-[#F8F9FC] p-4 rounded-lg">
                <h4 className="text-[#2D336B] font-bold mb-2 text-center">
                  طرق الدفع المتاحة
                </h4>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#2D336B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#2D336B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#2D336B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Charity Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Zakat Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    الزكاة
                  </h2>
                  <p className="text-gray-600 mb-6">
                    أخرج زكاة مالك لتطهير أموالك وسد حاجة الفقراء والمساكين.
                  </p>
                  <div className="flex justify-center gap-4 mb-6">
                    <button
                      onClick={calculateZakat}
                      className="border-2 border-[#A9B5DF] text-[#2D336B] font-bold py-2 px-4 rounded-lg hover:bg-[#F0F3FA] transition-colors duration-300"
                    >
                      حاسبة الزكاة
                    </button>
                  </div>
                  {zakatAmount && (
                    <p className="text-[#2D336B] font-bold mb-4">
                      قيمة الزكاة: {zakatAmount} دينار
                    </p>
                  )}
                  <button className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    أخرج زكاتك
                  </button>
                </div>
              </div>

              {/* Sadaqah Jariyah Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    صدقة جارية
                  </h2>
                  <p className="text-gray-600 mb-6">
                    ساهم في بناء المساجد وحفر الآبار ومشاريع الصدقات الجارية.
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-center gap-2 mb-2">
                      {[100, 500, 1000].map((amount) => (
                        <span
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className="cursor-pointer bg-[#F0F3FA] text-[#2D336B] text-sm py-1 px-3 rounded-full hover:bg-[#A9B5DF] hover:text-white transition-colors duration-300"
                        >
                          {amount}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    تبرع الآن
                  </button>
                </div>
              </div>

              {/* Charity Fund Card - Improved */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center overflow-hidden">
                  <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">
                    صندوق الخيرات
                  </h2>
                  <p className="text-gray-600 mb-6">
                    صندوق عام للتبرعات يتم توجيهها للأكثر احتياجاً حسب
                    الأولويات.
                  </p>
                  <div className="mb-6">
                    <div className="w-full bg-[#F0F3FA] h-3 rounded-full mb-2">
                      <div className="bg-[#2D336B] h-3 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>الهدف: 100,000 دينار</span>
                      <span>تم جمع: 75,000 دينار</span>
                    </div>
                  </div>
                  <button onClick={handleDonate} className="bg-[#2D336B] hover:bg-[#2D336B] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg w-full">
                    تبرع الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;