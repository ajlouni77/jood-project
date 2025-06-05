// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export function Beneficiaries() {
//   const [beneficiaries, setBeneficiaries] = useState([]);
//   const [editingBeneficiary, setEditingBeneficiary] = useState(null);
//   const [newStatus, setNewStatus] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const beneficiariesPerPage = 5;

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/beneficiaries") // API endpoint لجلب المستفيدين
//       .then((response) => {
//         setBeneficiaries(response.data);
//       })
//       .catch((error) => {
//         console.error("حدث خطأ أثناء جلب بيانات المستفيدين!", error);
//       });
//   }, []);

//   const handleStatusChange = (beneficiaryId, status) => {
//     setEditingBeneficiary(beneficiaryId);
//     setNewStatus(status);
//   };

//   const updateStatus = (beneficiaryId) => {
//     if (!newStatus) {
//       alert("يرجى تحديد الحالة المناسبة.");
//       return;
//     }

//     axios
//       .put("http://localhost:4000/api/beneficiaries/update-status", {
//         beneficiaryId: beneficiaryId,
//         status: newStatus,
//       })
//       .then((response) => {
//         alert(response.data.message);
//         setBeneficiaries((prevBeneficiaries) =>
//           prevBeneficiaries.map((beneficiary) =>
//             beneficiary.id === beneficiaryId
//               ? { ...beneficiary, status: newStatus }
//               : beneficiary
//           )
//         );
//         setEditingBeneficiary(null);
//         setNewStatus("");
//       })
//       .catch((error) => {
//         console.error("خطأ في تحديث حالة المستفيد:", error);
//         alert("فشل في تحديث حالة المستفيد.");
//       });
//   };

//   const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
//     return !filterStatus || beneficiary.status === filterStatus;
//   });

//   const indexOfLastBeneficiary = currentPage * beneficiariesPerPage;
//   const indexOfFirstBeneficiary = indexOfLastBeneficiary - beneficiariesPerPage;
//   const currentBeneficiaries = filteredBeneficiaries.slice(
//     indexOfFirstBeneficiary,
//     indexOfLastBeneficiary
//   );

//   const statusColors = {
//     approved: "bg-emerald-100 text-emerald-800",
//     pending: "bg-amber-100 text-amber-800",
//   };

//   const statusTranslations = {
//     approved: "موافق",
//     pending: "قيد الانتظار",
//   };

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-8">
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
//           <h2 className="text-xl font-bold text-white">جدول المستفيدين</h2>
//         </div>

//         <div className="p-6">
//           {/* Filter */}
//           <div className="mb-6" dir="rtl">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               فلترة حسب الحالة
//             </label>
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="">الكل</option>
//               <option value="pending">قيد الانتظار</option>
//               <option value="approved">موافق</option>
//             </select>
//           </div>

//           {/* Modal for editing status */}
//           {editingBeneficiary && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg p-6 w-96 shadow-xl" dir="rtl">
//                 <h3 className="text-lg font-bold mb-4">تعديل حالة المستفيد</h3>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     الحالة الجديدة
//                   </label>
//                   <select
//                     value={newStatus}
//                     onChange={(e) => setNewStatus(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   >
//                     <option value="">اختر الحالة</option>
//                     <option value="pending">قيد الانتظار</option>
//                     <option value="approved">موافق</option>
//                   </select>
//                 </div>
//                 <div className="flex justify-end gap-2">
//                   <button
//                     onClick={() => {
//                       setEditingBeneficiary(null);
//                       setNewStatus("");
//                     }}
//                     className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//                   >
//                     إلغاء
//                   </button>
//                   <button
//                     onClick={() => updateStatus(editingBeneficiary)}
//                     className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
//                   >
//                     حفظ
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Table */}
//           <div className="overflow-x-auto rounded-lg border border-gray-200">
//             <table className="w-full min-w-full divide-y divide-gray-200" dir="rtl">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {[
//                     "الاسم",
//                     "الحالة",
//                     "العنوان",
//                     "الحاجات",
//                     "الوصف",
//                     "إجراءات",
//                   ].map((el) => (
//                     <th
//                       key={el}
//                       className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       {el}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {currentBeneficiaries.length > 0 ? (
//                   currentBeneficiaries.map((beneficiary) => (
//                     <tr
//                       key={beneficiary.id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">
//                           {beneficiary.statusPerson}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             statusColors[beneficiary.status] ||
//                             "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {statusTranslations[beneficiary.status] ||
//                             beneficiary.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {beneficiary.address || "-"}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {JSON.stringify(beneficiary.needs)}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {beneficiary.needsDescription || "-"}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <button
//                           onClick={() =>
//                             handleStatusChange(beneficiary.id, beneficiary.status)
//                           }
//                           className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg transition-colors"
//                         >
//                           تعديل
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="px-6 py-4 text-center text-sm text-gray-500"
//                     >
//                       لا توجد بيانات متاحة
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-center items-center mt-6 gap-2" dir="rtl">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//               className={`px-4 py-2 rounded-lg ${
//                 currentPage === 1
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
//               } transition-colors`}
//             >
//               السابق
//             </button>

//             <div className="flex items-center">
//               {Array.from(
//                 {
//                   length: Math.min(
//                     5,
//                     Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)
//                   ),
//                 },
//                 (_, i) => {
//                   const pageNum = i + 1;
//                   return (
//                     <button
//                       key={i}
//                       onClick={() => setCurrentPage(pageNum)}
//                       className={`w-8 h-8 mx-1 rounded-full ${
//                         currentPage === pageNum
//                           ? "bg-indigo-600 text-white"
//                           : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                       } transition-colors`}
//                     >
//                       {pageNum}
//                     </button>
//                   );
//                 }
//               )}

//               {Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage) > 5 && (
//                 <span className="px-2">...</span>
//               )}
//             </div>

//             <button
//               disabled={indexOfLastBeneficiary >= filteredBeneficiaries.length}
//               onClick={() => setCurrentPage(currentPage + 1)}
//               className={`px-4 py-2 rounded-lg ${
//                 indexOfLastBeneficiary >= filteredBeneficiaries.length
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
//               } transition-colors`}
//             >
//               التالي
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

export function Beneficiaries() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [editingBeneficiary, setEditingBeneficiary] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const beneficiariesPerPage = 5;


useEffect(() => {
    axios
      .get("http://localhost:4000/api/beneficiaries") // API endpoint لجلب المستفيدين
      .then((response) => {
        // تأكد من أن البيانات التي تم إرجاعها هي مصفوفة
        if (Array.isArray(response.data.data)) {
          setBeneficiaries(response.data.data);
        } else {
          console.error("البيانات ليست مصفوفة:", response.data);
        }
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب بيانات المستفيدين!", error);
      });
  }, []);
  
  const handleStatusChange = (beneficiaryId, status) => {
    setEditingBeneficiary(beneficiaryId);
    setNewStatus(status);
  };

  const updateStatus = (beneficiaryId) => {
    if (!newStatus) {
      alert("يرجى تحديد الحالة المناسبة.");
      return;
    }

  
    axios
  .put("http://localhost:4000/api/beneficiaries/update-status", {
    beneficiaryId: beneficiaryId,
    status: newStatus === "approved" ? "موافق عليه" : "قيد الانتظار",
  })
  .then((response) => {
    alert(response.data.message);
    setBeneficiaries((prevBeneficiaries) =>
      prevBeneficiaries.map((beneficiary) =>
        beneficiary.id === beneficiaryId
          ? { ...beneficiary, status: newStatus }
          : beneficiary
      )
    );
    setEditingBeneficiary(null);
    setNewStatus("");
  })
  .catch((error) => {
    console.error("خطأ في تحديث حالة المستفيد:", error);
    alert("فشل في تحديث حالة المستفيد.");
  });

  };

//   const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
//     return !filterStatus || beneficiary.status === filterStatus;
//   });
const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
    return !filterStatus || beneficiary.status.trim().toLowerCase() === filterStatus.trim().toLowerCase();
  });
  const indexOfLastBeneficiary = currentPage * beneficiariesPerPage;
  const indexOfFirstBeneficiary = indexOfLastBeneficiary - beneficiariesPerPage;
  const currentBeneficiaries = filteredBeneficiaries.slice(
    indexOfFirstBeneficiary,
    indexOfLastBeneficiary
  );

  const statusColors = {
    approved: "bg-emerald-100 text-emerald-800",
    pending: "bg-amber-100 text-amber-800",
  };

  const statusTranslations = {
    approved: "موافق",
    pending: "قيد الانتظار",
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <h2 className="text-xl font-bold text-white">جدول المستفيدين</h2>
        </div>

        <div className="p-6">
          {/* Filter */}
          <div className="mb-6" dir="rtl">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              فلترة حسب الحالة
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">الكل</option>
              <option value="قيد الانتظار">قيد الانتظار</option>
              <option value="موافق عليه">موافق</option>
            </select>
          </div>

          {/* Modal for editing status */}
          {editingBeneficiary && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-xl" dir="rtl">
                <h3 className="text-lg font-bold mb-4">تعديل حالة المستفيد</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الحالة الجديدة
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">اختر الحالة</option>
                    <option value="pending">قيد الانتظار</option>
                    <option value="approved">موافق</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setEditingBeneficiary(null);
                      setNewStatus("");
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={() => updateStatus(editingBeneficiary)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-full divide-y divide-gray-200" dir="rtl">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "الاسم",
                    "الحالة",
                    "العنوان",
                    "الحاجات",
                    "الوصف",
                    "إجراءات",
                  ].map((el) => (
                    <th
                      key={el}
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {el}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentBeneficiaries.length > 0 ? (
                  currentBeneficiaries.map((beneficiary) => (
                    <tr
                      key={beneficiary.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {beneficiary.statusPerson}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColors[beneficiary.status] ||
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {statusTranslations[beneficiary.status] ||
                            beneficiary.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {beneficiary.address || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {JSON.stringify(beneficiary.needs)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {beneficiary.needsDescription || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() =>
                            handleStatusChange(beneficiary.id, beneficiary.status)
                          }
                          className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg transition-colors"
                        >
                          تعديل
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      لا توجد بيانات متاحة
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6 gap-2" dir="rtl">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              } transition-colors`}
            >
              السابق
            </button>

            <div className="flex items-center">
              {Array.from(
                {
                  length: Math.min(
                    5,
                    Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)
                  ),
                },
                (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === pageNum
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                      } transition-colors`}
                    >
                      {pageNum}
                    </button>
                  );
                }
              )}
            </div>

            <button
              disabled={currentPage === Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              } transition-colors`}
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

