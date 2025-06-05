// import React, { useState, useEffect } from "react";
// // import DonorDashboard from "../pages/donorDashboard";

// const MyDonation = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     // محاكاة جلب البيانات من API أو قاعدة بيانات
//     const fetchDonations = async () => {
//       const dummyData = [
//         {
//           id: 1,
//           image: "https://via.placeholder.com/150",
//           description: "ملابس شتوية للأطفال بحالة جيدة جدًا.",
//           status: "تم التوصيل",
//         },
//         {
//           id: 2,
//           image: "https://via.placeholder.com/150",
//           description: "لعبة تعليمية للأطفال.",
//           status: "في الطريق",
//         },
//         {
//           id: 3,
//           image: "https://via.placeholder.com/150",
//           description: "حقيبة مدرسية تحتوي على أدوات مدرسية.",
//           status: "قيد المراجعة",
//         },
//       ];
//       setDonations(dummyData);
//     };
//     fetchDonations();
//   }, []);

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">تبرعاتي السابقة</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {donations.map((donation) => (
//           <div key={donation.id} className="bg-white shadow-md rounded-lg p-4">
//             <img src={donation.image} alt="Donation" className="w-full h-40 object-cover rounded-md mb-3" />
//             <p className="text-gray-700">{donation.description}</p>
//             <p className={`mt-2 p-1 text-sm font-bold rounded-md ${
//               donation.status === "تم التوصيل" ? "bg-green-200 text-green-700" :
//               donation.status === "في الطريق" ? "bg-yellow-200 text-yellow-700" :
//               "bg-gray-200 text-gray-700"
//             }`}>
//               {donation.status}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyDonation;