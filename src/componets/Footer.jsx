import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 text-white py-10 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-4">Connect with Me</h3>
            <p className="text-lg text-gray-200">
              Let's stay connected! Feel free to reach out to me via email or on social media.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-6 md:mb-0">
            <a href="https://github.com/DebasisLeo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl hover:text-teal-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/debashis-joy-507818313/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:text-teal-400 transition duration-300" />
            </a>
            <a href="https://x.com/leo_debasis?s=21" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-3xl hover:text-teal-400 transition duration-300" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <FaEnvelope className="text-white text-3xl hover:text-teal-400 transition duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">© 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
