
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon
} from "@heroicons/react/24/solid";
import {  Heart } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  const links = [
    { name: "الصفحة الرئيسية", path: "/dashboard/overview", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "المستخدمون", path: "/dashboard/users", icon: <UserCircleIcon className="w-5 h-5" /> },
    { name: "المستفيدون", path: "/dashboard/Beneficiaries", icon: <UserCircleIcon className="w-5 h-5" /> },
    { name: "الرسائل", path: "/dashboard/message", icon: <ChatBubbleLeftIcon className="w-5 h-5" /> },
    { name: "إضافة مشروع", path: "/dashboard/AddProjectForm", icon: <PlusCircleIcon className="w-5 h-5" /> },
  ];
  return (
    <div className="flex flex-row-reverse"> {/* هنا تمت إضافة flex-row-reverse */}
         {!isOpen && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-md lg:hidden"
        >
          ☰ {/* رمز القائمة */}
        </button>
      )}
      {/* القائمة الجانبية */}
      <aside 
        className={`bg-gray-800 text-white w-64 min-h-screen flex flex-col p-4 shadow-lg 
          fixed top-0 right-0 z-50 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          lg:translate-x-0 lg:fixed lg:right-0 lg:z-0 lg:w-64`}
      >
        {/* زر إغلاق القائمة (يظهر فقط في الشاشات الصغيرة) */}
        <button 
          onClick={toggleSidebar} 
          className="mb-4 self-start text-lg lg:hidden"
        >
          ✖
        </button>

        {/* عنوان الموقع */}
        <div className="flex items-center justify-center">
  <Heart className="w-6 h-6 text-white mr-2 animate-pulse" />
  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-white">
    جود
  </div>
</div>


        {/* الروابط (تم إنزالها إلى الأسفل بـ mt-10) */}
        <ul className="flex-1 mt-10 space-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-row-reverse items-center gap-2 p-2 rounded-md ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                {link.icon} <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* زر تسجيل الخروج */}
        <NavLink
          to="/"
          className="mt-auto flex flex-row-reverse items-center gap-2 p-3 rounded-md bg-red-600 hover:bg-red-700 transition"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" /> <span>تسجيل الخروج</span>
        </NavLink>
      </aside>

      {/* المحتوى الرئيسي */}
     
    </div>
  );
};

export default Sidebar;