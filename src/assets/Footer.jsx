import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import { Link, useNavigate } from "react-router-dom"; // For navigation if using React Router

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Navigate to the home route after scrolling
    navigate("/");
  };

  const handleFeedback = () => {
    alert("Redirecting to the feedback form!"); // Placeholder functionality for feedback
  };

  return (
    <footer className="bg-deepsky text-white py-8">
      <div className="container mx-auto text-center space-y-6">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <button
            onClick={handleScrollToTop}
            className=" text-sm focus:outline-none"
          >
            Home
          </button>
          <Link to="/about">
            About Us
          </Link>
          <Link to="/contact">
            Contact Us
          </Link>
          
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright Information */}
        <p className="text-sm">© 2024 DIS-EASE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
