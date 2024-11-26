import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "./Navbar";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save user data to localStorage
    const userData = { username, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    // Show success popup
    setIsSignedUp(true);

    // Hide the popup after 3 seconds and redirect to login page
    setTimeout(() => {
      setIsSignedUp(false);
      navigate("/login"); // Redirect to login page after 3 seconds
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[100vh] bg-gray-200 pt-16">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email address:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
              />
              <ul className="text-sm text-gray-500 mt-1 list-disc pl-5">
                <li>Your password must contain at least 8 characters.</li>
                <li>Your password can’t be entirely numeric.</li>
              </ul>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Password confirmation:
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password confirmation"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-deepsky"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-deepsky text-white py-2 rounded hover:bg-green-600 transition duration-200"
            >
              Signup
            </button>
          </form>
        </div>

        {/* Success Popup */}
        {isSignedUp && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg text-center">
              <p className="text-deepsky font-semibold">Account Created Successfully!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
