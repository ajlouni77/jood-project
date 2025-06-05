import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

export default function BeneficiaryForm() {
  const [formData, setFormData] = useState({
    statusPerson: "",
    address: "",
    type: "",
    needs: {
      food: false,
      books: false,
      clothes: false,
    },
    document: null,
    status: "قيد الانتظار",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // For loading state
  const [successMessage, setSuccessMessage] = useState(""); // To show success message
  const [errorMessage, setErrorMessage] = useState(""); // To show error message

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        needs: { ...prev.needs, [name]: checked },
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, document: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.statusPerson) newErrors.statusPerson = "الحالة مطلوبة";
    if (!formData.address) newErrors.address = "العنوان مطلوب";
    if (!formData.type) newErrors.type = "نوع المستفيد مطلوب";
    if (!formData.description) newErrors.description = "الوصف مطلوب";
    if (!formData.document) {
      newErrors.document = "يجب تحميل ملف PDF";
    } else if (formData.document.type !== "application/pdf") {
      newErrors.document = "يجب تحميل ملف بصيغة PDF فقط";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setErrorMessage(""); // Reset error message
      setSuccessMessage(""); // Reset success message

      // Prepare form data for submission
      const formDataToSend = new FormData();
      formDataToSend.append("statusPerson", formData.statusPerson);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("needs", JSON.stringify(formData.needs)); // Convert the needs object to JSON
      formDataToSend.append("document", formData.document);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("description", formData.description);

      try {
        // Send POST request to backend API
        const response = await axios.post(
          "http://localhost:4000/api/beneficiaries",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              // Include authorization token if needed
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        // Handle response
        if (response.data.success) {
          setSuccessMessage("تم إضافة المستفيد بنجاح!");
          setFormData({
            statusPerson: "",
            address: "",
            type: "",
            needs: { food: false, books: false, clothes: false },
            document: null,
            status: "قيد الانتظار",
            description: "",
          });
        } else {
          setErrorMessage("فشل في إضافة المستفيد.");
        }
      } catch (error) {
        console.error("Error adding beneficiary:", error);
        setErrorMessage("حدث خطأ أثناء إرسال البيانات.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-[#A9B5DF]/10 p-8 shadow-lg rounded-lg border border-[#A9B5DF]/30">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#2D336B]">نموذج المستفيد</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Status */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-1">الحالة</label>
          <select
            name="statusPerson"
            value={formData.statusPerson}
            onChange={handleChange}
            className="w-full p-3 border border-[#A9B5DF] rounded-md focus:ring-2 focus:ring-[#2D336B] focus:border-transparent transition-all duration-200"
          >
            <option value="">اختر الحالة</option>
            <option value="needy">محتاج</option>
            <option value="orphan">يتيم</option>
            <option value="disabled">ذو احتياجات خاصة</option>
          </select>
          {errors.statusPerson && (
            <p className="text-red-500 text-sm mt-1">{errors.statusPerson}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-1">العنوان</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-[#A9B5DF] rounded-md focus:ring-2 focus:ring-[#2D336B] focus:border-transparent transition-all duration-200"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-1">وصف</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-[#A9B5DF] rounded-md focus:ring-2 focus:ring-[#2D336B] focus:border-transparent transition-all duration-200"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-1">نوع المستفيد</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 border border-[#A9B5DF] rounded-md focus:ring-2 focus:ring-[#2D336B] focus:border-transparent transition-all duration-200"
          >
            <option value="">اختر النوع</option>
            <option value="individual">فرد</option>
            <option value="family">عائلة</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        {/* Needs */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-2">الاحتياجات</label>
          <div className="flex gap-6 bg-white p-4 rounded-md border border-[#A9B5DF]/30">
            <label className="flex items-center text-[#2D336B]">
              <input
                type="checkbox"
                name="food"
                checked={formData.needs.food}
                onChange={handleChange}
                className="mr-2 w-4 h-4 accent-[#2D336B]"
              />{" "}
              طعام
            </label>
            <label className="flex items-center text-[#2D336B]">
              <input
                type="checkbox"
                name="books"
                checked={formData.needs.books}
                onChange={handleChange}
                className="mr-2 w-4 h-4 accent-[#2D336B]"
              />{" "}
              كتب
            </label>
            <label className="flex items-center text-[#2D336B]">
              <input
                type="checkbox"
                name="clothes"
                checked={formData.needs.clothes}
                onChange={handleChange}
                className="mr-2 w-4 h-4 accent-[#2D336B]"
              />{" "}
              ملابس
            </label>
          </div>
        </div>

        {/* Document Upload */}
        <div>
          <label className="block font-medium text-[#2D336B] mb-1">تحميل المستندات (PDF فقط)</label>
          <div className="border border-dashed border-[#A9B5DF] p-4 rounded-md bg-white">
            <input
              type="file"
              name="document"
              onChange={handleChange}
              className="w-full text-[#2D336B]"
            />
          </div>
          {errors.document && (
            <p className="text-red-500 text-sm mt-1">{errors.document}</p>
          )}
        </div>

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2D336B] text-white py-3 rounded-md hover:bg-[#2D336B]/90 transition-all duration-300 font-medium text-lg mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-[#A9B5DF]"
          disabled={loading}
        >
          {loading ? "جاري الإرسال..." : "إرسال"}
        </button>
      </form>
    </div>
  );
}
