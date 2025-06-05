//profilecd 
import React from "react";

const Profile = () => {
  const user = {
    firstName: "محمود",
    lastName: "سليمان",
    email: "mahmoud@gmail.com",
    phoneNumber: "+962 7 9999 9999",
    address: "الأردن",
    role: "مستخدم عادي",
    status: "نشط",
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg mt-10 border border-gray-200">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-500 text-white text-3xl flex items-center justify-center rounded-full shadow-md">
          {user.firstName.charAt(0)}{user.lastName.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.firstName} {user.lastName}</h2>
        <p className="text-gray-600">{user.role}</p>
      </div>
      
      <div className="mt-6 space-y-4 text-gray-700">
        <p><strong className="text-gray-900">البريد الإلكتروني:</strong> {user.email}</p>
        <p><strong className="text-gray-900">رقم الهاتف:</strong> {user.phoneNumber}</p>
        <p><strong className="text-gray-900">العنوان:</strong> {user.address}</p>
        <p><strong className="text-gray-900">الحالة:</strong> <span className="text-green-600 font-semibold">{user.status}</span></p>
      </div>
    </div>
  );
};

export default Profile;