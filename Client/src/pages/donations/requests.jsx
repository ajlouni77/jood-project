import React, { useState } from 'react';

const DonationCard = ({ image, title, description, goal, raised }) => {
  const progress = (raised / goal) * 100;
  const [amount, setAmount] = useState('');
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* صورة البطاقة */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* محتوى البطاقة */}
      <div className="p-5 bg-white">
        <h3 className="text-xl font-bold mb-2 text-right text-[#2D336B]">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-right text-sm">
          {description}
        </p>
        
        {/* معلومات إضافية */}
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-semibold text-[#2D336B]">
            الهدف: {goal} دينار
          </span>
          <span className="font-semibold text-[#2D336B]">
            تم جمع: {raised} دينار
          </span>
        </div>
        
        {/* شريط التقدم */}
        <div className="w-full bg-[#A9B5DF] h-3 rounded-full mb-4">
          <div 
            className="bg-[#2D336B] h-3 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* إدخال مبلغ التبرع */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="أدخل المبلغ بالدينار الأردني"
          className="w-full border border-[#A9B5DF] rounded-md p-2 text-right mb-4 focus:outline-none focus:ring-2 focus:ring-[#2D336B]"
        />
        
        {/* زر التبرع */}
        <button className="w-full bg-[#2D336B] hover:bg-opacity-90 text-white py-2 rounded-md font-medium transition-colors duration-300">
          تبرع الآن
        </button>
        
        {/* خط فاصل وكلمة تفاصيل */}
        <div className="mt-4 pt-3 border-t border-[#A9B5DF] text-center">
          <a href="#" className="text-[#2D336B] hover:underline font-medium">
            تفاصيل
          </a>
        </div>
      </div>
    </div>
  );
};

const Requestcard = () => {
  const donations = [
    { image: "/api/placeholder/400/300", title: "مبادرة الغذاء الصحي", description: "ساهم في تقديم وجبات للمحتاجين حول العالم.", goal: 15000, raised: 7500, category: "طعام" },
    { image: "/api/placeholder/400/300", title: "دعم التعليم", description: "ساعد في نشر المعرفة من خلال التبرع .", goal: 8000, raised: 4500, category: "تعليم" },
    { image: "/api/placeholder/400/300", title: "بنك الملابس", description: "امنح الدفء لمن يحتاج من خلال التبرع .", goal: 12000, raised: 6000, category: "ملابس" }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  const filteredDonations = selectedCategory === 'الكل'
    ? donations
    : donations.filter(donation => donation.category === selectedCategory);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#2D336B] text-center mb-8">
        المشاريع
      </h2>
      
      {/* فلتر التصنيف */}
      <div className="mb-8 flex justify-center">
        <select
          className="bg-white border border-[#A9B5DF] rounded-md px-4 py-2 text-[#2D336B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D336B]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="الكل">الكل</option>
          <option value="طعام">طعام</option>
          <option value="تعليم">تعليم</option>
          <option value="ملابس">ملابس</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDonations.map((donation, index) => (
          <DonationCard key={index} {...donation} />
        ))}
      </div>
    </div>
  );
};

export default Requestcard;