import React, { useState } from "react";

const AppointmentForm = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM"];
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeSelect = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API submission
    console.log("Appointment data submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Auto-close modal after success
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="mt-24 fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center  z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 overflow-y-auto max-h-[80vh]">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Success!</h2>
            <p className="text-gray-600">Your appointment has been booked with Dr. {doctor.name}.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl text-deepsky font-semibold mb-4">
              Book an Appointment with {doctor.name}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mt-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                  min={today}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Appointment Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      className={`p-2 rounded-lg border ${
                        formData.time === slot
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-deepsky text-white rounded-lg hover:bg-blue-600"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
