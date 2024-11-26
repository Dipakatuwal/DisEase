import React, { useState } from "react";
import { useUser } from "../context/UserContext"; // Adjust path as needed
import Navbar from "./Navbar";

const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add real authentication logic
    // For example, checking against a database
    if (username && password) {
      login({ username }); // Create user and store in context
      window.location.href = "/"; // Redirect to home page
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[100vh] bg-gray-200 shadow-lg">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-deepsky text-white px-4 py-2 rounded-xl hover:bg-deepsky"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
