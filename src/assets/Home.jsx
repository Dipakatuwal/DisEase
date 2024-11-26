import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Doctor from "./doctor.jpg"; // Ensure this image exists in the correct folder
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Doctor1 from "./Doctor1.jpg";
import Doctor2 from "./Doctor2.jpg";
import Doctor3 from "./Doctor3.jpg";


const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const { user } = useUser();
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

  const testimonials = [
    {
      quote:
        "After looking at various products, I finally zeroed down to Dis-Ease. Online booking is seamless and appreciated by my patients. I highly recommend Dis-Ease.",
      author: "Dr. Nita Rai, Pediatrician, Nepal",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      quote:
        "Dis-Ease has been a game-changer for my clinic. The prediction system is accurate and helps guide my diagnosis process.",
      author: "Dr. Anu Subbha, General Practitioner, Nepal",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      quote:
        "Booking appointments has never been this easy. Patients love how simple and intuitive the system is.",
      author: "Dr. Manish Bista, Orthopedic Surgeon, Nepal",
      rating: "⭐⭐⭐⭐",
    },
  ];

  const handlePredict = (e) => {
    e.preventDefault();
    user ? navigate("/predict") : navigate("/");
  };

  const handleAppoint = (e) => {
    e.preventDefault();
    user ? navigate("/appoint") : navigate("/");
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar /> {/* No images here */}

      {/* First Section - Text on Left, Images on Right */}
      <section className="relative h-screen bg-gray-100 text-black flex items-center justify-between">
        <div className="text-left p-8 md:p-16 max-w-lg ml-10">
          <h1 className="text-4xl mt-[150px] md:mt-[200px] font-bold mb-4">
               Ensuring Healthy Lifestyle
          </h1>
          <p className="text-lg md:text-base mb-6">
            Our disease classification system helps identify potential health
            conditions based on symptoms provided by users. Coupled with doctor
            recommendations, we aim to streamline the process of getting medical
            attention, offering users an easy way to book appointments with
            specialists in their area.
          </p>
          <div className="space-x-4">
            <button
              onClick={handlePredict}
              className="bg-transparent border border-deepsky hover:bg-deepsky text-deepsky hover:text-white font-semibold py-2 px-4 rounded"
            >
              Predict!
            </button>
            <button
              onClick={handleAppoint}
              className="bg-deepsky hover:bg-deepsky text-white font-semibold py-2 px-4 rounded"
            >
              Appoint!
            </button>
          </div>
        </div>

       
{/* Right Side: Doctor Images */}
<div className="mt-24 mx-auto w-[40%] grid grid-rows-2 grid-cols-2 gap-4 h-[470px]">
  {/* Doctor 1 - Full height of the first column */}
  <div className="bg-orange-100 shadow-lg row-span-2 overflow-hidden">
    <img
      src={Doctor1}
      alt="Doctor1"
      className="w-full h-full rounded-lg object-cover"
    />
  </div>

  {/* Doctor 2 - Top half of the second column, slightly lower */}
  <div className="bg-purple-100 shadow-lg relative top-7 overflow-hidden">
    <img
      src={Doctor2}
      alt="Doctor2"
      className="w-full h-full rounded-lg object-cover"
    />
  </div>

  {/* Doctor 3 - Bottom half of the second column, even lower */}
  <div className="bg-teal-100 shadow-lg relative top-8 overflow-hidden">
    <img
      src={Doctor3}
      alt="Doctor3"
      className="w-full h-full rounded-lg object-cover"
    />
  </div>
</div>




      </section>

      {/* Second Section: Services */}
      <section className="h-screen  rounded bg-gray-200 flex flex-col justify-center items-start pl-10 relative">
        <h2 className="text-3xl font-bold mb-4 absolute left-0 top-100">
          Services We Offer!
        </h2>
        <div className="relative w-full flex items-center justify-end pr-10">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="absolute text-lg font-semibold cursor-pointer"
              style={service.position}
            >
              {service.name}
              {hoveredService === index && (
                <div className="absolute left-0 mt-2 w-48 bg-deepsky text-white p-4 rounded-md shadow-lg">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-sm mt-2">{service.description}</p>
                </div>
              )}
            </div>
          ))}
          <img src={Doctor} alt="Doctor" className="w-1/5 rounded-md shadow-lg" />
        </div>
      </section>

      {/* Third Section: Testimonials */}
      <section className="h-screen flex flex-col justify-center items-center bg-white">
        <h3 className="text-2xl font-bold mb-4">What Our Customers Say</h3>
        <div className="relative w-4/5 mx-auto p-8 border rounded-2xl  shadow-lg h-[200px]">
  
          {/* Testimonial Content */}
          <p className="text-gray-600 italic">
            {testimonials[currentTestimonialIndex].rating}
          </p>
          <p className="text-gray-700 text-lg mt-4">
            “{testimonials[currentTestimonialIndex].quote}”
          </p>
          <p className="text-gray-600 mt-2 font-semibold">
            {testimonials[currentTestimonialIndex].author}
          </p>

         {/* Previous Button */}
{/* Previous Button */}
<button
  onClick={handlePreviousTestimonial}
  className="absolute top-1/2 left-[-4rem] transform -translate-y-1/2 text-4xl text-deepsky-500 font-bold "
>
  &lt;
</button>

{/* Next Button */}
<button
  onClick={handleNextTestimonial}
  className="absolute top-1/2 right-[-4rem] transform -translate-y-1/2 text-4xl text-deepsky-500 font-bold"
>
  &gt;
</button>


        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
