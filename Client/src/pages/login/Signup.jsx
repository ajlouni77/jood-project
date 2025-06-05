

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "donor", // القيمة الافتراضية
    status: "pending", // القيمة الافتراضية
    phoneNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:4000/api/signup", formData);
      setSuccess("تم التسجيل بنجاح!");
      setFormData({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "", address: "" }); // تفريغ الحقول
      console.log("بيانات المستخدم:", response.data);
      navigate("/Login"); 
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ ما");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row-reverse">
        {/* قسم الصورة */}
        <div className="hidden md:block md:w-1/2 bg-blue-600 relative">
          <img
            src="/api/placeholder/600/800"
            alt="تسجيل حساب"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">مرحبًا بك!</h1>
            <p className="text-center text-lg">انضم إلينا وابدأ رحلتك معنا اليوم.</p>
          </div>
        </div>
        
        {/* قسم النموذج */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">إنشاء حساب</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
                <input type="text" name="firstName" placeholder="الاسم الأول" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">اسم العائلة</label>
                <input type="text" name="lastName" placeholder="اسم العائلة" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
              </div>
            </div>
            
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input type="email" name="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input type="password" name="password" placeholder="كلمة المرور" value={formData.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input type="text" name="phoneNumber" placeholder="رقم الهاتف" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
            <textarea name="address" placeholder="العنوان" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required rows="3"></textarea>
            
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-lg">
              تسجيل
            </button>
          </form>
          <Link to={"/Login"}>
        <p className="text-center text-gray-600 mt-4">
          هل  تملك حسابًا؟ <a href="#" className="text-blue-600 hover:underline">تسجيل دخول</a>
        </p></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;