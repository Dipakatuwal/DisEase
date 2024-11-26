import { Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";
import Predict from "./assets/Predict";
import Navbar from "./assets/Navbar";
import DoctorAppointment from "./assets/Appoint";
import AboutUs from "./assets/AboutUs";
import ContactUs from "./assets/ContactUs";
import AppointmentForm from "./assets/AppointmentForm";
import MyBooking from "./assets/MyBooking";




function App() {
  return (
    <>
      <Navbar /> {/* Navbar added here so it's always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/appoint" element={<DoctorAppointment />} />
        <Route path="/my-booking" element={<MyBooking />} />
        
      </Routes>
    </>
  );
}

export default App;
