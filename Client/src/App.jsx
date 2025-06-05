
// // import { Router } from 'react-router-dom';
// import AboutUs from './pages/aboutUs/AboutUs'
// // import DonationForm from './pages/donations/dd';
// import { Router, Routes, Route } from 'react-router-dom';
// import Donate from './pages/donations/Donate';
// import Request from './pages/requests/Request';
// import RequestForm from './pages/requests/RequestForm';
// import Routedd from './pages/routedashboard/Routedd';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/home/Home';
// import Routedoner from './pages/routedashboard/Routedoners';
// import DonationSection from './pages/donations/card';
// import PaymentPage from './pages/donations/payment';
// import Requestcard from './pages/donations/requests';
// import SignUp from './pages/login/Signup';
// import Login from './pages/login/Login';

// function App() {
  

//   return (
//     <>
//   <Navbar/>
//   <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutUs" element={<AboutUs />} />
//           <Route path="/aboutUs" element={<AboutUs />}/>
//           <Route path="/payment" element={<PaymentPage />}/>
//           <Route path="/card" element={<DonationSection />}/>
//         </Routes>
  
//    {/* <Routedoner/> */}
   
    
//    {/* <Requestcard/> */}

//     {/* <PaymentPage/> */}
//    {/* <Footer/> */}
//    {/* <Login/> */}
// {/* <Routedd/> */}

//     {/* <Routedd/>
//     <DonationSection/> */}

//     {/* <Routedd/> */}

    
//      {/* <AboutUs /> */}
//    {/* </Login> */}
//   </>
 
//   )
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/home/Home";
// import AboutUs from "./pages/aboutUs/AboutUs";
// import Donate from "./pages/donations/Donate";
// import Request from "./pages/requests/Request";
// import RequestForm from "./pages/requests/RequestForm";
// import Routedd from "./pages/routedashboard/Routedd";
// import Login from "./pages/login/Login";
// import DonationSection from './pages/donations/card';
// import PaymentPage from "./pages/donations/payment";
// import Requestcard from "./pages/donations/requests";
// import Signup from "./pages/login/Signup"
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutUs" element={<AboutUs />} />
//         <Route path="/Donate" element={<Donate />} />
//         <Route path="/Request" element={<Request />} />
//         <Route path="/RequestForm" element={<RequestForm />} />
//         {/* <Route path="/Routedd" element={<Routedd />} /> */}
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/card" element={<DonationSection />} />
//         <Route path="/PaymentPage" element={<PaymentPage />} />
//         <Route path="/Requestcard" element={<Requestcard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Donate from "./pages/donations/Donate";
import Request from "./pages/requests/Request";
import RequestForm from "./pages/requests/RequestForm";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import DonationSection from './pages/donations/card';
import PaymentPage from "./pages/donations/payment";
import Requestcard from "./pages/donations/requests";
import Routedd from "./pages/routedashboard/Routedd";
import BeneficiaryForm from "./pages/BeneficiaryForm";
import BeneficiaryCard from "./pages/BeneficiaryCard";
import Profile from "./pages/profile";

import ProjectDetailsPage from "./pages/donations/Projectdetails";



function App() {
  return (
    <Router>
      <Routes>
        {/* صفحات الموقع العادية */}
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>} />
        
        <Route path="/aboutUs" element={<>
          <Navbar />
          <AboutUs />
          <Footer />
        </>} />
  
        <Route path="/PaymentPage" element={<>
          <Navbar />
          <PaymentPage />
          <Footer />
        </>} />
        <Route path="/Donate" element={<>
          <Navbar />
          <Donate />
          <Footer />
        </>} />
        
        <Route path="/Request" element={<>
          <Navbar />
          <Request />
          <Footer />
        </>} />

        <Route path="/RequestForm" element={<>
          <Navbar />
          <RequestForm />
          <Footer />
        </>} />

        <Route path="/Login" element={<>
          
          <Login />
          
        </>} />

        <Route path="/Signup" element={<>
       
          <Signup />
      
        </>} />

        <Route path="/card" element={<>
          <Navbar />
          <DonationSection />
          <Footer />
        </>} />

        <Route path="/BeneficiaryForm" element={<>
          <Navbar />
          <BeneficiaryForm />
          <Footer />
        </>} />
        <Route path="/BeneficiaryCard" element={<>
          <Navbar />
          <BeneficiaryCard />
          <Footer />
        </>} />
        <Route path="/BeneficiaryCard" element={<>
          <Navbar />
          <BeneficiaryCard />
          <Footer />
        </>} />

        <Route path="/project/:id" element={<>
          <Navbar />
          <ProjectDetailsPage />
          <Footer />
        </>} />


      
        <Route path="/Profile" element={<>
          <Navbar />
          <Profile />
          <Footer />
        </>} />


      
        <Route path="/Profile" element={<>
          <Navbar />
          <Profile />
          <Footer />
        </>} />

        <Route path="/Requestcard" element={<>
          <Navbar />
          <Requestcard />
          <Footer />
        </>} />

        {/* صفحات لوحة التحكم */}
        <Route path="/dashboard/*" element={<Routedd />} />
      </Routes>
    </Router>
  );
}

export default App;
