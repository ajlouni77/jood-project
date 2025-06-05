

// // import { useState, useEffect } from "react";
// // import { Search, Heart } from "lucide-react";
// // import { Link as RouterLink } from "react-router-dom";

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* تحديد ارتفاع للـ Navbar لتجنب التداخل */}
// //       <div className="h-16"></div> 
      
// //       <nav
// //         className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${
// //           scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
// //         }`}
// //         dir="rtl"
// //       >
// //         <div className="container mx-auto px-4 flex justify-between items-center">
// //           {/* Logo */}
// //           <div className="flex items-center">
// //             <Heart className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
// //             <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
// //               جود
// //             </div>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="flex space-x-8 text-gray-700">
// //             <RouterLink to="/" className="font-medium hover:text-blue-600 transition-colors">
// //               الرئيسية
// //             </RouterLink>
// //             <RouterLink to="/aboutUs" className="font-medium hover:text-blue-600 transition-colors">
// //               من نحن
// //             </RouterLink>
// //             <RouterLink to="/card" className="font-medium hover:text-blue-600 transition-colors">
// //               مشاريعنا
// //             </RouterLink>
// //             <RouterLink to="/Donate" className="font-medium hover:text-blue-600 transition-colors">
// //               الفعاليات
// //             </RouterLink>
// //             <RouterLink to="/BeneficiaryCard " className="font-medium hover:text-blue-600 transition-colors">
// //              تصدق
// //             </RouterLink>
// //           </div>

// //           {/* Actions */}
// //           <div className="flex items-center space-x-4">
// //             <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
// //               <Search className="w-5 h-5" />
// //             </button>
// //             <RouterLink to="/PaymentPage">
// //               <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
// //                 <span>تبرع الآن</span>
// //                 <Heart className="h-5 w-5 mr-2" />
// //               </button>
// //             </RouterLink>

// //             <RouterLink to="/BeneficiaryForm">
// //               <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-bold transition duration-300">
// //                 إضافة احتياجاتي
// //               </button>
// //             </RouterLink>

// //             <RouterLink to="/Login">
// //               <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
// //                 تسجيل الدخول
// //               </button>
// //             </RouterLink>

// //             <RouterLink to="/Signup">
// //               <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
// //                 إنشاء حساب
// //               </button>
// //             </RouterLink>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;
// import { useState, useEffect } from "react";
// import { Search, Heart, User } from "lucide-react";
// import { Link as RouterLink } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // التحقق من وجود التوكن في localStorage
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // إذا كان التوكن موجودًا، قم بتعيين isLoggedIn إلى true

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="h-16"></div> 

//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${
//           scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
//         }`}
//         dir="rtl"
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Heart className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
//               جود
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="flex space-x-8 text-gray-700">
//             <RouterLink to="/" className="font-medium hover:text-blue-600 transition-colors">
//               الرئيسية
//             </RouterLink>
//             <RouterLink to="/aboutUs" className="font-medium hover:text-blue-600 transition-colors">
//               من نحن
//             </RouterLink>
//             <RouterLink to="/card" className="font-medium hover:text-blue-600 transition-colors">
//               مشاريعنا
//             </RouterLink>
//             <RouterLink to="/Donate" className="font-medium hover:text-blue-600 transition-colors">
//               الفعاليات
//             </RouterLink>
//             <RouterLink to="/BeneficiaryCard" className="font-medium hover:text-blue-600 transition-colors">
//               تصدق
//             </RouterLink>
//           </div>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//               <Search className="w-5 h-5" />
//             </button>
//             <RouterLink to="/PaymentPage">
//               <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
//                 <span>تبرع الآن</span>
//                 <Heart className="h-5 w-5 mr-2" />
//               </button>
//             </RouterLink>

//             <RouterLink to="/BeneficiaryForm">
//               <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-bold transition duration-300">
//                 إضافة احتياجاتي
//               </button>
//             </RouterLink>

//             {/* عرض زر الملف الشخصي عند تسجيل الدخول */}
//             {isLoggedIn ? (
//               <RouterLink to="/Profile">
//                 <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm flex items-center">
//                   <User className="w-5 h-5 ml-2" />
//                   الملف الشخصي
//                 </button>
//               </RouterLink>
//             ) : (
//               <>
//                 <RouterLink to="/Login">
//                   <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
//                     تسجيل الدخول
//                   </button>
//                 </RouterLink>

//                 <RouterLink to="/Signup">
//                   <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
//                     إنشاء حساب
//                   </button>
//                 </RouterLink>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Search, Heart, User, LogOut, Menu, X } from "lucide-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!token);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="h-16"></div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
        dir="rtl"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
              جود
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700">
            <RouterLink
              to="/"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              الرئيسية
            </RouterLink>
            <RouterLink
              to="/aboutUs"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              من نحن
            </RouterLink>
            <RouterLink
              to="/card"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              مشاريعنا
            </RouterLink>
            <RouterLink
              to="/Donate"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              الفعاليات
            </RouterLink>
            <RouterLink
              to="/BeneficiaryCard"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              تصدق
            </RouterLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <RouterLink to="/PaymentPage">
              <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
                <span>تبرع الآن</span>
                <Heart className="h-5 w-5 mr-2" />
              </button>
            </RouterLink>

            <RouterLink to="/BeneficiaryForm">
              <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-bold transition duration-300">
                إضافة احتياجاتي
              </button>
            </RouterLink>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <RouterLink to="/Profile">
                  <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm flex items-center">
                    <User className="w-5 h-5 ml-2" />
                    الملف الشخصي
                  </button>
                </RouterLink>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md font-bold flex items-center hover:bg-red-600 transition duration-300"
                >
                  <LogOut className="w-5 h-5 ml-2" />
                  تسجيل الخروج
                </button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <RouterLink to="/Login">
                  <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                    تسجيل الدخول
                  </button>
                </RouterLink>

                <RouterLink to="/Signup">
                  <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                    إنشاء حساب
                  </button>
                </RouterLink>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
            <RouterLink
              to="/"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              الرئيسية
            </RouterLink>
            <RouterLink
              to="/aboutUs"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              من نحن
            </RouterLink>
            <RouterLink
              to="/card"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              مشاريعنا
            </RouterLink>
            <RouterLink
              to="/Donate"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              الفعاليات
            </RouterLink>
            <RouterLink
              to="/BeneficiaryCard"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              تصدق
            </RouterLink>

            {/* Mobile Authentication & Action Buttons */}
            <div className="flex flex-col space-y-4 w-full px-6">
              {isLoggedIn ? (
                <>
                  <RouterLink
                    to="/Profile"
                    className="w-full text-center bg-white border border-gray-200 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm flex justify-center items-center"
                    onClick={toggleMobileMenu}
                  >
                    <User className="w-5 h-5 ml-2" />
                    الملف الشخصي
                  </RouterLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="w-full bg-red-500 text-white py-2 rounded-md font-bold flex justify-center items-center hover:bg-red-600 transition duration-300"
                  >
                    <LogOut className="w-5 h-5 ml-2" />
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <>
                  <RouterLink
                    to="/Login"
                    className="w-full text-center bg-white border border-gray-200 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                    onClick={toggleMobileMenu}
                  >
                    تسجيل الدخول
                  </RouterLink>
                  <RouterLink
                    to="/Signup"
                    className="w-full text-center bg-white border border-gray-200 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                    onClick={toggleMobileMenu}
                  >
                    إنشاء حساب
                  </RouterLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
