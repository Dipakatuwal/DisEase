
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const DoctorAppointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  

  const doctors = [
    { name: "Dr. Sakrina Basnet", specialty: "Dentist", experience: "6 Years", address: "Teaching Hospital, kathmandu", img: "data:image/jpeg;base64,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" },
    { name: "Dr. Shankar Khadka", specialty: "Neurologist", experience: "10 Years", address: "BP Simriti, kathmandu", img: "data:image/jpeg;base64,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" },
    { name: "Dr. Jyoti Thapa", specialty: "Cardiologist", experience: "7 Years", address: "Hams Hospital, kathmandu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gNVKelRB50r9FP-gxa4IOxz1nb8Q33Zljw&s" },
    { name: "Dr. Dipesh kc", specialty: "General Doctor", experience: "10 Years", address: "Mediciti Hospital, kathmandu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpw_Z-YS2OFJlVZBUzdiF7Y9ymoVgSAOcP8w&s" },
    { name: "Dr. Kailash kunwar", specialty: "Orthopedic", experience: "15 Years", address: "Teaching Hospital, kathmandu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLai2q15AQgaiIj5isORigW2ujRZK1Qw0Fag&s" },
    { name: "Dr. Shambhu Thapa", specialty: "Cardiologist", experience: "18 Years", address: "Norvic Hospital,kathmandu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Z-WsADidYIW9ZFaVH9poy3gA1pVYcCMOg&s" },
    { name: "Dr. Ayan ", specialty: "Dentist", experience: "10 Years", address: "Kantipur Dental, kathmandu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cJ-IB3GUqUWPN5nc8DNJ3mqkbJVIEHj2kw&s" },
    { name: "Dr. Subash koirala", specialty: "General Doctor", experience: "10 Years", address: "B&B Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTULlxL_TmmagP0EV0ct_3l9wIcuWKTVng1Q&s" },
  ];

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Function to handle opening the appointment form
  const handleOpenModal = (doctor) => {
    setSelectedDoctor(doctor); // Set the selected doctor
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the appointment form
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedDoctor(null); // Clear the selected doctor
  };

  // Limit to 8 doctors for 2 rows
  const displayedDoctors = filteredDoctors.slice(0, 8);

  return (
    <div className="container mx-auto p-8">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a doctor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-l-md p-2 w-full  mt-24 max-w-md"
        />
        <button className="bg-deepsky text-white px-4  mt-24 rounded-r-md">
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        {["Dentist", "Cardiologist", "Orthopedic", "Neurologist", "Otology", "General Doctor"].map((category) => (
          <button
            key={category}
            className="bg-deepsky text-white px-4 py-2 rounded-full shadow hover:bg-deepsky"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Doctors */}
      <h2 className="text-2xl font-bold mb-4">Popular Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {displayedDoctors.map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full h-32 object-cover rounded-t-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p className="text-deepsky font-semibold">{doctor.specialty}</p>
              <p>{doctor.experience}</p>
              <p className="text-sm text-gray-500">{doctor.address}</p>
              <button
                onClick={() => handleOpenModal(doctor)}
                className="mt-4 bg-deepsky text-white px-4 py-2 rounded hover:bg-deepsky"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedDoctor && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <AppointmentForm doctor={selectedDoctor} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointment;

