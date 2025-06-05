
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BeneficiaryCard = ({ onDonate }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [donationMessages, setDonationMessages] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/beneficiariescard")
      .then((response) => {
        setBeneficiaries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("خطأ أثناء جلب البيانات:", error);
        setLoading(false);
      });
  }, []);

  const openPdf = (documentPath) => {
    if (documentPath) {
      const formattedPath = documentPath.replace(/\\/g, "/");
      const fullUrl = `http://localhost:4000/${formattedPath}`;
      window.open(fullUrl, "_blank");
    } else {
      console.error("المستند غير موجود.");
    }
  };

  const handleDonate = (beneficiaryId) => {
    setDonationMessages((prev) => ({
      ...prev,
      [beneficiaryId]: "تم التبرع بنجاح! شكراً لمساعدتك."
    }));
    if (onDonate) onDonate(beneficiaryId);
  };

  const statusMapping = {
    needy: "محتاج",
    orphan: "يتيم",
    disabled: "ذوي الاحتياجات الخاصة",
  };

  const typeMapping = {
    individual: "فرد",
    family: "عائلة",
  };

  if (loading) {
    return <div className="text-center text-gray-600">جاري تحميل البيانات...</div>;
  }

  const approvedBeneficiaries = beneficiaries.filter(
    (beneficiary) => beneficiary.status === "موافق عليه"
  );

  return (
    <div className="container mx-auto px-4 mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
        {approvedBeneficiaries.map((beneficiary) => (
          <div
            key={beneficiary.id || beneficiary._id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-[#394867] text-white p-4 text-center font-bold">
              بطاقة المستفيد
            </div>

            <div className="p-6">
              {donationMessages[beneficiary.id || beneficiary._id] && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                  {donationMessages[beneficiary.id || beneficiary._id]}
                </div>
              )}

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">الحالة:</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {statusMapping[beneficiary.statusPerson] || "غير محدد"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">النوع:</span>
                <span className="text-gray-700">
                  {typeMapping[beneficiary.type] || "غير محدد"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">العنوان:</span>
                <span className="text-gray-700">{beneficiary.address}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">الاحتياجات:</span>
                <span className="text-gray-700">
                  {beneficiary.needs && typeof beneficiary.needs === "object"
                    ? Object.keys(beneficiary.needs)
                        .filter((key) => beneficiary.needs[key])
                        .map((key) => (key === "food" ? "طعام" : key === "books" ? "كتب" : "ملابس"))
                        .join(", ")
                    : "لا توجد احتياجات محددة"}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-800 mb-2">الوصف:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {beneficiary.needsDescription}
                </p>
              </div>

              <div className="mt-6 flex gap-2" dir="ltr">
                <Link to="/PaymentPage">
                  <button
                    onClick={() => handleDonate(beneficiary.id || beneficiary._id)}
                    className="flex-1 bg-[#394867] text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow"
                  >
                    تبرع الآن
                  </button>
                </Link>

                <button
                  onClick={() => openPdf(beneficiary.document)}
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow"
                >
                  عرض المستندات
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiaryCard;