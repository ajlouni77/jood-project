// import { useState } from "react";

// const AddProjectForm = () => {
//   const [project, setProject] = useState({
//     image: "",
//     title: "",
//     description: "",
//     goal: "",
//     raised: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProject((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Project: ", project);
//     // يمكن هنا إرسال البيانات إلى قاعدة البيانات
//   };

//   return (
//     <>
//     <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-6">
//           <h2 className="text-xl font-bold text-white ">المشاريع</h2>
//         </div>
//     <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200 rtl">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800 text-right">إضافة مشروع جديد</h2>
//       <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 text-right">رابط الصورة</label>
//           <input
//             type="text"
//             name="image"
//             placeholder="رابط الصورة"
//             value={project.image}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
        
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 text-right">عنوان المشروع</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="عنوان المشروع"
//             value={project.title}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
        
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 text-right">وصف المشروع</label>
//           <textarea
//             name="description"
//             placeholder="وصف المشروع"
//             value={project.description}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700 text-right">المبلغ المستهدف</label>
//             <input
//               type="number"
//               name="goal"
//               placeholder="المبلغ المستهدف"
//               value={project.goal}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
          
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700 text-right">المبلغ المُجمّع</label>
//             <input
//               type="number"
//               name="raised"
//               placeholder="المبلغ المُجمّع"
//               value={project.raised}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>
        
//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-200 shadow-md"
//         >
//           إضافة المشروع
//         </button>
//       </form>
//     </div></>
//   );
// };

// export default AddProjectForm;
import { useState } from "react";
import axios from "axios";

const AddProjectForm = () => {
  const [project, setProject] = useState({
    image: "",
    title: "",
    description: "",
    goal: "",
    raised: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/projects", project);
      alert("تمت إضافة المشروع بنجاح!");
      setProject({ image: "", title: "", description: "", goal: "", raised: "" });
    } catch (error) {
      console.error("خطأ في إضافة المشروع:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200 rtl overflow-hidden">
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-6">
        <h2 className="text-xl font-bold text-white text-right">المشاريع</h2>
      </div>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-right">إضافة مشروع جديد</h2>
        <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">رابط الصورة</label>
            <input
              type="text"
              name="image"
              placeholder="رابط الصورة"
              value={project.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">عنوان المشروع</label>
            <input
              type="text"
              name="title"
              placeholder="عنوان المشروع"
              value={project.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">وصف المشروع</label>
            <textarea
              name="description"
              placeholder="وصف المشروع"
              value={project.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 text-right">المبلغ المستهدف</label>
              <input
                type="number"
                name="goal"
                placeholder="المبلغ المستهدف"
                value={project.goal}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 text-right">المبلغ المُجمّع</label>
              <input
                type="number"
                name="raised"
                placeholder="المبلغ المُجمّع"
                value={project.raised}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-200 shadow-md"
          >
            إضافة المشروع
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;










