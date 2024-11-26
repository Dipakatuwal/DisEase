import React, { useEffect, useState } from "react";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from localStorage
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  

  // Handle appointment cancellation
  const handleCancel = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Booking</h1>

        {/* Tabs (Upcoming and Expired) */}
        <div className="flex border-b mb-4">
          <button className="py-2 px-4 text-deepsky border-b-2 border-deepsky">
            Upcoming
          </button>
          <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-gray-300">
            Expired
          </button>
        </div>

        {/* Booking Cards */}
        <div className="space-y-4">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  {/* Doctor Image */}
                  <img
                    src={booking.doctorPhoto || "https://via.placeholder.com/80"} // Default placeholder image
                    alt="Doctor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {/* Booking Details */}
                  <div>
                    <h2 className="text-lg font-semibold">{booking.doctorName}</h2>
                    <p className="text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {booking.address}
                    </p>
                    <p className="text-gray-600">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      Appointment On: {booking.date}
                    </p>
                    <p className="text-gray-600">
                      <i className="fas fa-clock mr-2"></i>
                      At Time: {booking.time}
                    </p>
                  </div>
                </div>
                {/* Cancel Button */}
                <button
                  onClick={() => handleCancel(index)}
                  className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
                >
                  Cancel Appointment
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No bookings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
