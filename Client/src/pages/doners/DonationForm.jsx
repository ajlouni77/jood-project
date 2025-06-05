// import { useState } from "react";

// const DonationForm = () => {
//   const [donationType, setDonationType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [images, setImages] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleDonationTypeChange = (e) => {
//     setDonationType(e.target.value);
//     setSelectedItems([]); // Reset selected items when donation type changes
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleItemSelection = (item) => {
//     if (selectedItems.includes(item)) {
//       setSelectedItems(selectedItems.filter((i) => i !== item));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // محاكاة إرسال البيانات إلى الخادم
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowSuccess(true);

//       // إعادة تعيين النموذج بعد فترة
//       setTimeout(() => {
//         setShowSuccess(false);
//         setDonationType("");
//         setAmount("");
//         setImages([]);
//         setSelectedItems([]);
//       }, 3000);
//     }, 1500);
//   };

//   // قوائم العناصر بناءً على نوع التبرع
//   const itemsByDonationType = {
//     ملابس: ["تيشيرت", "جاكيت", "بنطلون", "فستان"],
//     طعام: ["لحم", "دجاج", "زيت", "رز", "سكر", "طحين"],
//     كتب: ["كتاب إنجليزي", "كتاب عربي", "مجلة", "قصة"],
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rtl">
//       <div className="max-w-xl mx-auto">
//         {showSuccess ? (
//           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8 text-green-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">
//               تم التبرع بنجاح!
//             </h2>
//             <p className="text-gray-600 mb-4">
//               شكراً لك على تبرعك بمبلغ {amount} درهم في نوع التبرع:{" "}
//               {donationType}
//             </p>
//             <p className="text-sm text-gray-500">
//               سيتم إرسال إيصال إلى بريدك الإلكتروني قريباً.
//             </p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
//               <h2 className="text-2xl font-bold mb-1">نموذج التبرع</h2>
//               <p className="text-blue-100">
//                 ساهم في دعم المحتاجين من خلال تبرعك
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               {/* تفاصيل التبرع */}
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   تفاصيل التبرع
//                 </h3>

//                 <div>
//                   <label
//                     htmlFor="donationType"
//                     className="block text-gray-700 mb-2 font-medium"
//                   >
//                     نوع التبرع
//                   </label>
//                   <select
//                     id="donationType"
//                     value={donationType}
//                     onChange={handleDonationTypeChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-700"
//                     required
//                   >
//                     <option value="">اختر نوع التبرع</option>
//                     <option value="مال">مال</option>
//                     <option value="طعام">طعام</option>
//                     <option value="ملابس">ملابس</option>
//                     <option value="كتب">كتب</option>
//                   </select>
//                 </div>

//                 {donationType === "مال" ? (
//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">
//                       مبلغ التبرع (دينار)
//                     </label>
//                     <input
//                       type="number"
//                       id="amount"
//                       value={amount}
//                       onChange={handleAmountChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       placeholder="أدخل المبلغ"
//                       required
//                     />
//                   </div>
//                 ) : (
//                   <>
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium">
//                         اختر العناصر
//                       </label>
//                       <div className="grid grid-cols-2 gap-2">
//                         {itemsByDonationType[donationType]?.map((item) => (
//                           <button
//                             key={item}
//                             type="button"
//                             onClick={() => handleItemSelection(item)}
//                             className={`py-2 px-4 rounded-lg font-medium transition ${
//                               selectedItems.includes(item)
//                                 ? "bg-blue-600 text-white"
//                                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                             }`}
//                           >
//                             {item}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium">
//                         أضف صوراً (اختياري)
//                       </label>
//                       <input
//                         type="file"
//                         multiple
//                         onChange={handleImageUpload}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className={`w-full py-3 px-4 rounded-lg text-white font-medium transition ${
//                   isSubmitting
//                     ? "bg-blue-400 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     جاري التبرع...
//                   </span>
//                 ) : (
//                   "تقديم التبرع"
//                 )}
//               </button>
//             </form>
//           </div>
//         )}

//         <div className="mt-6 text-center text-sm text-gray-500">
//           <p>جميع التبرعات تخضع للمراجعة قبل توزيعها على المستفيدين.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationForm;