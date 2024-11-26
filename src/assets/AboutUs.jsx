import React from "react";

const AboutUs = () => {
  return (
    <div className="container  mt-24 mx-auto p-8">
      <h1 className="text-4xl  text-deepsky font-bold mb-6">About Us</h1>
      <p className="text-l mb-4">
        Welcome to <strong>Dis-Ease</strong>, a platform dedicated to improving healthcare accessibility.
        Our goal is to provide users with a seamless experience for disease prediction, 
        doctor recommendations, and appointment booking.
      </p>
      <p className="text-l mb-4">
        By utilizing advanced algorithms and machine learning techniques, we aim to assist users 
        in identifying potential health conditions based on symptoms. This empowers users to make informed 
        decisions and connect with healthcare professionals quickly.
      </p>
      <p className="text-l mb-4">
        We believe in leveraging technology to bridge the gap between patients and medical expertise, 
        making healthcare more accessible for everyone.
      </p>
      <h2 className="text-2xl text-deepsky font-semibold mt-8">Our Vision</h2>
      <p className="text-lg mb-4">
        To revolutionize the healthcare experience by providing cutting-edge solutions for 
        disease diagnosis and treatment accessibility.
      </p>
      <h2 className="text-2xl text-deepsky font-semibold mt-8">Our Mission</h2>
      <p className="text-lg">
        To make healthcare affordable, reliable, and accessible by combining 
        artificial intelligence with user-friendly design.
      </p>
    </div>
  );
};

export default AboutUs;
