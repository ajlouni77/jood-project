// import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
// import Home from "../dashboardAdmin/overview";
// import Users from "../dashboardAdmin/users";
// import Message from "../dashboardAdmin/message";
// import AddProjectForm from "../dashboardAdmin/AddProjectForm";


// function Routedd() {
//   return (
//     <div className="flex flex-row-reverse">
//       <Sidebar />
//       <div className="flex-1 p-4 lg:mr-64">
//         <Routes>
//           <Route path="/overview" element={<Home />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/message" element={<Message />} />
//           <Route path="/AddProjectForm" element={<AddProjectForm/>} />
//           <Route path="*" element={<Navigate to="/overview" />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Routedd;
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Home from "../dashboardAdmin/overview";
import Users from "../dashboardAdmin/users";
import Message from "../dashboardAdmin/message";
import AddProjectForm from "../dashboardAdmin/AddProjectForm";
import { Beneficiaries } from "../dashboardAdmin/Beneficiaries";

function Routedd() {
  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1 p-4 lg:mr-64">
        <Routes>
          {/* إعادة التوجيه تلقائيًا من /dashboard إلى /dashboard/overview */}
          <Route path="/" element={<Navigate to="/dashboard/overview" />} />
          <Route path="/overview" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Beneficiaries" element={<Beneficiaries/>} />
          <Route path="/message" element={<Message />} />
          <Route path="/AddProjectForm" element={<AddProjectForm />} />
          <Route path="*" element={<Navigate to="/dashboard/overview" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Routedd;
