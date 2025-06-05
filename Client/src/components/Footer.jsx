// import React from "react";
// import {
//   Heart,
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   ArrowUp,
// } from "lucide-react";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-black text-white">
//       {/* القسم الرئيسي للتذييل */}
//       <div className="py-12">
//         <div className="max-w-6xl mx-auto px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* حول جود */}
//             <div>
//               <div className="flex items-center mb-4">
//                 <Heart className="h-8 w-8 text-black mr-2" />
//                 <span className="font-bold text-2xl">جود</span>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 منظمة خيرية مكرسة لمساعدة المحتاجين وتقديم الدعم للمجتمعات
//                 الضعيفة من خلال مبادرات التنمية المستدامة والمساعدات الإنسانية.
//               </p>
//               <div className="flex space-x-4 rtl:space-x-reverse">
//                 <a
//                   href="#"
//                   className="bg-black hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
//                 >
//                   <Facebook size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-black hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
//                 >
//                   <Twitter size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-black hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
//                 >
//                   <Instagram size={18} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-black hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
//                 >
//                   <Youtube size={18} />
//                 </a>
//               </div>
//             </div>

//             {/* روابط سريعة */}
//             <div>
//               <h3 className="text-lg font-bold mb-4 text-gray-300">
//                 روابط سريعة
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> الرئيسية
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> من نحن
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> مشاريعنا
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> الفعاليات
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> المتطوعون
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> فرص التطوع
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-white flex items-center"
//                   >
//                     <ExternalLink size={14} className="ml-2" /> الأسئلة الشائعة
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* حملاتنا الخيرية */}
//             <div>
//               <h3 className="text-lg font-bold mb-4 text-gray-300">
//                 حملاتنا الخيرية
//               </h3>
//               <ul className="space-y-4">
//                 <li>
//                   <a href="#" className="group">
//                     <div className="flex items-center">
//                       <div className="w-16 h-12 bg-black rounded overflow-hidden flex-shrink-0 ml-3">
//                         <img
//                           src="https://chafaf.ma/wp-content/uploads/2024/09/fourniture-scolaire-3.webp"
//                           alt="صورة الحملة"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h4 className="font-medium group-hover:text-gray-300 transition duration-300">
//                           دعم التعليم
//                         </h4>
//                         <div className="text-sm text-gray-500">
//                           12,500 مستفيد
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="group">
//                     <div className="flex items-center">
//                       <div className="w-16 h-12 bg-black rounded overflow-hidden flex-shrink-0 ml-3">
//                         <img
//                           src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/donation-box-dubai-ar-Cover-AR-27-02-2025.jpg"
//                           alt="صورة الحملة"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h4 className="font-medium group-hover:text-gray-300 transition duration-300">
//                           بنك الملابس
//                         </h4>
//                         <div className="text-sm text-gray-500">
//                           8,750 مستفيد
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="group">
//                     <div className="flex items-center">
//                       <div className="w-16 h-12 bg-black rounded overflow-hidden flex-shrink-0 ml-3">
//                         <img
//                           src="https://www.mobtada.com/resize?src=uploads/images/2017/10/473269.jpg&w=750&h=450&zc=0&q=70"
//                           alt="صورة الحملة"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h4 className="font-medium group-hover:text-gray-300 transition duration-300">
//                           مبادرة الغذاء الصحي
//                         </h4>
//                         <div className="text-sm text-gray-500">
//                           5,320 مستفيد
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* اتصل بنا */}
//             <div>
//               <h3 className="text-lg font-bold mb-4 text-gray-300">اتصل بنا</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <MapPin className="h-5 w-5 text-gray-400 ml-2 mt-1" />
//                   <span className="text-gray-300">الاردن</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Phone className="h-5 w-5 text-gray-400 ml-2" />
//                   <span className="text-gray-300 hover:text-white">
//                     +962 777887799
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <Mail className="h-5 w-5 text-gray-400 ml-2" />
//                   <span className="text-gray-300 hover:text-white">
//                     info@jood-charity.org
//                   </span>
//                 </li>
//               </ul>

//               <div className="mt-6 p-4 bg-gray-800 rounded-lg">
//                 <h4 className="font-bold mb-2 text-gray-300">ساعات العمل</h4>
//                 <p className="text-gray-300 text-sm">
//                   السبت - الخميس: 9:00 صباحاً - 5:00 مساءً
//                 </p>
//                 <p className="text-gray-300 text-sm">الجمعة: مغلق</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* شريط الحقوق والسياسات */}
//       <div className="bg-gray-900 py-4">
//         <div className="max-w-6xl mx-auto px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-500 text-sm">
//               حقوق النشر © 2025 جود. جميع الحقوق محفوظة.
//             </div>
//             <div className="flex space-x-4 rtl:space-x-reverse text-sm">
//               <a href="#" className="text-gray-500 hover:text-white">
//                 سياسة الخصوصية
//               </a>
//               <span className="text-gray-500">|</span>
//               <a href="#" className="text-gray-500 hover:text-white">
//                 الشروط والأحكام
//               </a>
//               <span className="text-gray-500">|</span>
//               <a href="#" className="text-gray-500 hover:text-white">
//                 سياسة ملفات تعريف الارتباط
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* زر العودة للأعلى */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 left-8 bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 z-50"
//       >
//         <ArrowUp className="h-5 w-5" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#2D336B] text-[#A9B5DF] py-8 rtl shadow-t-md">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <Heart className="w-7 h-7 text-rose-500 mr-2 animate-pulse" />
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#A9B5DF] to-rose-500 bg-clip-text">
            جود
          </div>
        </div>

        {/* Footer Links */}
        <div className="mb-8">
          <ul className="flex justify-center space-x-10">
            <li>
              <a
                href="#"
                className="font-medium text-[#A9B5DF] hover:text-white transition-colors duration-300"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-[#A9B5DF] hover:text-white transition-colors duration-300"
              >
                عن التبرعات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-[#A9B5DF] hover:text-white transition-colors duration-300"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="#"
            className="text-[#A9B5DF] hover:text-white transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#A9B5DF] hover:text-white transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#A9B5DF] hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#A9B5DF] hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-[#A9B5DF]">
          &copy; 2025 جميع الحقوق محفوظة لـ{" "}
          <span className="font-semibold text-white">جود</span>
        </p>
      </div>
      {/* زر العودة للأعلى */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-[#A9B5DF] hover:bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 z-50"
      >
        <ArrowUp className="h-5 w-5 text-[#2D336B]" />
      </button>
    </footer>
  );
};

export default Footer;