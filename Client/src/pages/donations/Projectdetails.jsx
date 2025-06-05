// // ProjectDetailsPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProjectDetailsPage = () => {
//   const { id } = useParams(); 
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/projects/${id}`) 
//       .then((response) => {
//         setProject(response.data);
//       })
//       .catch((error) => console.error("Error fetching project details:", error));
//   }, [id]);

//   if (!project) return <div>جاري تحميل البيانات...</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-[#2D336B]">{project.title}</h1>
//       <p className="text-gray-600 mt-4">{project.description}</p>
//       <div className="mt-6">
//         <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
//       </div>
//       <div className="mt-6">
//         <span className="font-bold text-[#2D336B]">الهدف:</span> {project.goal} دينار أردني
//       </div>
//       <div className="mt-4">
//         <span className="font-bold text-[#2D336B]">تم جمعه:</span> {project.raised} دينار أردني
//       </div>
//       {/* يمكنك إضافة المزيد من التفاصيل حسب الحاجة */}
//     </div>
//   );
// };

// export default ProjectDetailsPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProjectDetailsPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/${id}`) 
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => console.error("Error fetching project details:", error));
  }, [id]);

  if (!project) return (
    <div className="flex justify-center items-center h-screen bg-[#A9B5DF]/10">
      <div className="text-[#2D336B] text-xl font-semibold">جاري تحميل البيانات...</div>
    </div>
  );

  // Calculate progress percentage
  const progressPercentage = (project.raised / project.goal) * 100;

  return (
    <div className="min-h-screen bg-[#A9B5DF]/10">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero image section */}
          <div className="relative h-80">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D336B]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl font-bold">{project.title}</h1>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#2D336B]">تم جمعه: {project.raised} دينار أردني</span>
                <span className="font-bold text-[#2D336B]">الهدف: {project.goal} دينار أردني</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-[#2D336B] h-4 rounded-full" 
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-[#2D336B] font-medium">
                {progressPercentage.toFixed(1)}%
              </div>
            </div>

            {/* Description card */}
            <div className="bg-[#A9B5DF]/20 p-6 rounded-lg border border-[#A9B5DF] mb-6">
              <h2 className="text-xl font-bold text-[#2D336B] mb-3">تفاصيل المشروع</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            {/* Call to action */}
            <div className="text-center mt-8">
                <Link to="/PaymentPage">
              <button className="bg-[#2D336B] hover:bg-[#2D336B]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                دعم المشروع
              </button></Link>
            </div>

            {/* Additional details section */}
            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#A9B5DF]/10 p-4 rounded-lg border border-[#A9B5DF]/30">
                <h3 className="text-lg font-bold text-[#2D336B] mb-2">التفاصيل</h3>
                <div className="space-y-2">
                  {project.details && Object.entries(project.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#A9B5DF]/10 p-4 rounded-lg border border-[#A9B5DF]/30">
                <h3 className="text-lg font-bold text-[#2D336B] mb-2">معلومات إضافية</h3>
                <div className="space-y-2">
             
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;