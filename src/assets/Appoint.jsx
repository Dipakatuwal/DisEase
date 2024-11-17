import React, { useState } from "react";

const AppointmentForm = () => {
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment Requested!\nHospital: ${hospital}\nDoctor: ${doctor}`);
    // Add logic to save appointment or navigate further
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>

      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleFormSubmit}
      >
        {/* Select Hospital */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Your Hospital:
          </label>
          <select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Hospital</option>
            <option value="City Hospital">City Hospital</option>
            <option value="General Hospital">General Hospital</option>
            <option value="Specialist Center">Specialist Center</option>
          </select>
        </div>

        {/* Select Doctor */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Doctor:
          </label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Request for Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
