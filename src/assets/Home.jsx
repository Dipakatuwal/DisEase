import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import doc from "./Doc.jpg";
import Doctor from "./doctor.jpg"; // Ensure this image exists in the correct folder
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const { user, login, logout } = useUser();
  const navigate = useNavigate();

  const services = [
    {
      name: "Consultation",
      description: "Get expert consultation for your health issues.",
      position: { top: "25%", left: "28%" },
    },
    {
      name: "Prediction",
      description: "Predict health conditions based on symptoms.",
      position: { top: "25%", left: "55%" },
    },
    {
      name: "Hospital Booking",
      description: "Book a hospital appointment quickly and easily.",
      position: { top: "70%", left: "28%" },
    },
    {
      name: "Doctor Recommendation",
      description: "Get recommended doctors based on your needs.",
      position: { top: "70%", left: "55%" },
    },
  ];

  const handlePredict = (e) => {
    e.preventDefault(); // Prevent default action
    console.log(user);
    if (user) {
      navigate("/predict");
    } else if (!user) {
      navigate("/"); // Redirect to home or login if the user is not authenticated
    }
  };

  const handleAppoint = (e) => {
    e.preventDefault(); // Prevent default action
    console.log(user);
    if (user) {
      navigate("/appoint");
    } else if (!user) {
      navigate("/"); // Redirect to home or login if the user is not authenticated
    }
  };


  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* First Section: Ensuring Healthy Lifestyle */}
      <section
        className="relative h-screen bg-cover bg-center text-white flex items-center"
        style={{ backgroundImage: `url(${doc})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>{" "}
        {/* Dark overlay */}
        {/* Content Container */}
        <div className="relative z-10 text-left p-8 md:p-16 max-w-lg ml-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ensuring Healthy Lifestyle
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Our disease classification system helps identify potential health
            conditions based on symptoms provided by users. Coupled with doctor
            recommendations, we aim to streamline the process of getting medical
            attention, offering users an easy way to book appointments with
            specialists in their area.
          </p>
          <div className="space-x-4">
            <button
              onClick={handlePredict}
              className="bg-transparent border border-green-500 hover:bg-green-500 text-green-500 hover:text-white font-semibold py-2 px-4 rounded"
            >
              Predict!
            </button>
            <button
             onClick={handleAppoint}
             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Appoint!
            </button>
          </div>
        </div>
      </section>

      {/* Second Section: Services */}
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-start pl-10 relative">
        <h2 className="text-3xl font-bold mb-4 absolute left-0 top-100">
          Services We Offer!
        </h2>

        {/* Service Items Positioned Around the Image */}
        <div className="relative w-full flex items-center justify-end pr-10">
          {/* Text items with hover effect */}
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className={`absolute text-lg font-semibold cursor-pointer`}
              style={service.position}
            >
              {service.name}

              {/* Show description below the word on hover */}
              {hoveredService === index && (
                <div className="absolute left-0 mt-2 w-48 bg-green-500 text-white p-4 rounded-md shadow-lg">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-sm mt-2">{service.description}</p>
                </div>
              )}
            </div>
          ))}

          {/* Image positioned at the right end */}
          <img
            src={Doctor}
            alt="Doctor"
            className="w-1/5 rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Third Section: Customer Say & Footer */}
      <section className="h-screen flex flex-col justify-between bg-white">
        {/* Customer Say */}
        <div className="flex-grow flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-xl font-semibold mb-2">
            Read What Our Customers Say
          </h3>
          <p className="text-gray-600 italic mb-4">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-700 max-w-2xl mx-auto">
            “After looking at various products, I finally zeroed down to
            Dis-Ease. Online booking is seamless and appreciated by my patients.
            I highly recommend Dis-Ease.”
          </p>
          <p className="text-gray-600 mt-2">
            Dr. Naveen Kini, Pediatrician, India
          </p>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </>
  );
};

export default Home;
