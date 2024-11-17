import { Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";
import Predict from "./assets/Predict";
import Navbar from "./assets/Navbar";
import AppointmentForm from "./assets/Appoint";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar added here so it's always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/appoint" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}

export default App;
