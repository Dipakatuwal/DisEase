import React, { useState } from "react";

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setSuccessMessage(true);

    // Clear the success message after 3 seconds (optional)
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mt-24 mb-6">
        We'd love to hear from you. Inquire about anything you want.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="message"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-deepsky text-white font-semibold py-2 px-4 rounded hover:bg-deepsky"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-4">
          <p>
            <strong>📞 Phone:</strong> +977 9861616431 <br />
            Call us directly if you need any help. We will help you.
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:info@disease.com.np"
              className="text-deepsky underline"
            >
              info@disease.com.np
            </a>
            <br />
            Mail us directly if you have any problems. We will analyze for you.
          </p>
          <p>
            <strong>📍 Address:</strong> New Baneshwor
          </p>
        </div>
      </div>

      {/* Success Message Popup */}
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-xl font-semibold text-green-600">Success!</h2>
            <p className="text-gray-700">Your message has been sent successfully!</p>
            <button
              onClick={() => setSuccessMessage(false)}
              className="mt-4 bg-deepsky text-white py-1 px-4 rounded hover:bg-deepsky"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
