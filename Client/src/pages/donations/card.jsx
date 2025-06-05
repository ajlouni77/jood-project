
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DonationCard = ({ image, title, description, goal, raised,id }) => {

  const progress = (raised / goal) * 100;
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

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

  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative">
        {/* صورة البطاقة */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-[#2D336B] text-white px-3 py-1 m-2 rounded-full text-sm">
          مميز
        </div>
      </div>

      <div className="p-4">
        {/* محتوى البطاقة */}
        <h3 className="text-xl font-bold mb-2 text-[#2D336B] text-right">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-right text-sm">{description}</p>

        {/* معلومات إضافية */}
        <div className="flex justify-between text-sm mb-2">
          {/* <span className="text-gray-600">الهدف: {goal} دولار</span> */}
          {/* <span className="text-[#2D336B] font-medium">تم جمع: {raised} دولار</span> */}
        </div>

        {/* شريط التقدم */}
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-[#2D336B] h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div> */}

        {/* إدخال مبلغ التبرع */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="أدخل المبلغ بالدينار الأردني"
          className="w-full border border-gray-300 rounded-md p-2 text-right mb-4 focus:border-[#2D336B] focus:ring-1 focus:ring-[#2D336B] outline-none"
        />

        {/* زر التبرع */}
        <button
          onClick={handleDonate}
          className="w-full bg-[#2D336B] hover:bg-[#232a5c] text-white py-2 rounded-md font-medium transition-colors duration-300"
        >
          تبرع الآن
        </button>

        {/* خط فاصل وكلمة تفاصيل */}
        <div className="mt-4 pt-3 border-t border-gray-200 text-center">

        <Link to={`/project/${id}`} className="text-[#2D336B] hover:text-[#A9B5DF] text-sm font-medium transition-colors duration-300">

            تفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import { useEffect } from "react";

const DonationSection = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projects")
      .then((response) => {
        setDonations(response.data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="py-12 bg-[#F8F9FC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2D336B] text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-20 after:h-1 after:bg-[#A9B5DF] after:rounded-full">
          المشاريع
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.length > 0 ? (
            donations.map((donation, index) => (
              <DonationCard
                key={index}
                image={donation.image}
                title={donation.title}
                description={donation.description}
                goal={donation.goal}
                raised={donation.raised}
                id={donation.id}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12 bg-white rounded-lg shadow">
              لا يوجد مشاريع حالياً
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
