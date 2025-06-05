import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post(
        "http://localhost:4000/api/login",
        formData
      );
      const token = response.data.token; 
      localStorage.setItem("authToken", token); 

      setSuccess("تم تسجيل الدخول بنجاح!");
      setFormData({ email: "", password: "" });
      if (formData.email === "admin@admin.com") {
        navigate("/dashboard/*"); // حذف `*`
      } else {
        navigate("/");
      }
      console.log("User Data:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ ما");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            تسجيل الدخول
          </button>
        </form>
        <Link to={"/Signup"}>
          <p className="text-center text-gray-600 mt-4">
            لا تملك حسابًا؟{" "}
            <a href="#" className="text-blue-600 hover:underline">
              إنشاء حساب
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
