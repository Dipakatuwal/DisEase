import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        
        

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright Information */}
        <p className="mt-4 text-sm">© 2024 DIS-EASE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
