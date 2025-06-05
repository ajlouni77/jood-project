import { Routes, Route, Navigate } from "react-router-dom";


import DonorNotification from "../doners/DonerNotification";
import MyDonation from "../doners/MyDonation";
import SidebarDoners from "../../components/SidebarDoners";
import DonationForm from "../doners/DonationForm";


function Routedoner() {
  return (
    <div className="flex flex-row-reverse">
      <SidebarDoners/>
      <div className="flex-1 p-4 lg:mr-64">
        <Routes>
          <Route path="/" element={<DonationForm/>} />
          <Route path="/MyDonation" element={<MyDonation />} />
          <Route path="/DonorNotification" element={<DonorNotification />} />

        </Routes>
      </div>
    </div>
  );
}

export default Routedoner;
