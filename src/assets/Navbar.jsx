import React from "react";

import { useUser } from "../context/UserContext"; // Adjust path as needed
import logo from "./Logo.jpg"; // Ensure logo path is correct

const Navbar = () => {
  const { user, logout } = useUser(); // Access user context

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-transparent">
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
          <div className="flex items-center space-x-4">
            <img 
              src={user.profilePicture || "/default-avatar.png"}
              alt="Profile"
              className="w-8 h-8 rounded-full"
              />
              <span>{user.username}</span>
          <button
            onClick={logout}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Logout
          </button>
          </div>
        ) : (
          <>
            <a
              href="/login"
              className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-100"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
