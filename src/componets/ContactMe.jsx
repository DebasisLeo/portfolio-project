import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactMe = () => {
  const [showModal, setShowModal] = useState(false); // State to show modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yzct53", // Replace with your actual service ID
        "template_i9b5xbq", // Replace with your actual template ID
        e.target,
        "NC2sBAQhN_X2YSsZ0" // Replace with your actual User ID
      )
      .then(
        (result) => {
          console.log("Message Sent", result.text);
          setShowModal(true);
          // Clear form fields after successful submission
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error", error.text);
        }
      );
  };

  return (
    <section
      className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 py-16 md:py-24 text-white" // Updated gradient colors for a unique design
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
          >
            Contact Me
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            I am always open to discussing new projects or opportunities. Feel free to reach out to me!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Message Form */}
          <motion.div
            className="flex flex-col items-center justify-center text-center md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={sendEmail} className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center space-x-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div
            className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <ul className="text-gray-300 space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-teal-400" />
                <span>01777947046</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-teal-400" />
                <span>01777947046</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-400" />
                <span>joydebashis8@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-11/12 md:w-1/3">
            <h3 className="text-2xl font-semibold text-teal-400">Message Sent!</h3>
            <p className="text-gray-300 mt-4">
              Your message has been sent successfully. I will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
