import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext"; // Adjust path as needed
import logo from "./Logo.jpg"; // Ensure logo path is correct

const Navbar = () => {
  const { user, logout } = useUser(); // Access user context
  const [isBlinking, setIsBlinking] = useState(false); // State to trigger blink effect
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

  // Function to get initials from the user's name
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`; // Combine both initials
  };

  // Function to handle logout with blinking effect
  const handleLogout = () => {
    setIsBlinking(true); // Start the blink effect
    setTimeout(() => {
      logout(); // Perform logout after the blink
      window.location.href = "/"; // Redirect to homepage after logout
    }, 500); // Blink lasts for 500ms before redirection
  };

  // Handle click outside to close the dropdown
  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black rounded-full shadow-md transition-all ${isBlinking ? 'opacity-0' : 'opacity-500'}`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="Logo" className="w-13 h-12" />
      </div>

      <div className="flex space-x-4">
        {user ? (
          <div className="relative dropdown  right-1/2 flex items-center space-x-4">
            {/* User's initials inside a circle */}
            <div
              className="w-8 h-8 bg-deepsky text-white flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {getInitials(user.username)} {/* Display initials */}
            </div>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute left-3/5 mt-40  transform -translate-x-1/2 mt-24 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <a
                  href="/my-booking"
                  className="block px-4 py-2 text-deepsky hover:bg-gray-200"
                >
                  My Booking
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-deepsky hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}

            {/* Logout button if not in dropdown */}
            {/* <button
              onClick={handleLogout} // Trigger the logout with blink effect
              className="bg-deepsky text-white px-4 py-2 rounded hover:bg-deepsky"
            >
              Logout
            </button> */}
          </div>
        ) : (
          <>
            <a
              href="/login"
              className="text-deepsky text-lg px-4 py-2"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-deepsky text-lg px-4 py-2"
            >
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
