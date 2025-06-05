// import React, { useState, useEffect } from "react";

// const DonorNotification = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // محاكاة جلب الإشعارات من API أو قاعدة بيانات
//     const fetchNotifications = async () => {
//       const dummyData = [
//         {
//           id: 1,
//           message: "تم طلب أحد تبرعاتك من قبل مستفيد!",
//           type: "request",
//           date: "2024-02-28",
//         },
//         {
//           id: 2,
//           message: "تمت إضافة حملة تبرعية جديدة!",
//           type: "campaign",
//           date: "2024-02-27",
//         },
//       ];
//       setNotifications(dummyData);
//     };
//     fetchNotifications();
//   }, []);

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">الإشعارات</h2>
//       {notifications.length === 0 ? (
//         <p className="text-gray-500">لا توجد إشعارات حاليًا</p>
//       ) : (
//         <ul className="space-y-3">
//           {notifications.map((notification) => (
//             <li
//               key={notification.id}
//               className={`p-3 rounded-md shadow-md ${
//                 notification.type === "request"
//                   ? "bg-blue-100 text-blue-800"
//                   : "bg-green-100 text-green-800"
//               }`}
//             >
//               <p>{notification.message}</p>
//               <span className="text-sm text-gray-600">{notification.date}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DonorNotification;