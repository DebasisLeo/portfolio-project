import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos'; // Import AOS initialization

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Left Side - Logo */}
                <div className="text-2xl font-bold flex items-center" data-aos="fade-right">
                    <FaUserCircle className="mr-2 text-3xl" /> MyPortfolio
                </div>

                {/* Middle Side - Navigation Links */}
                <ul
                    className={`${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-8 md:static absolute bg-gray-800 md:bg-transparent w-full md:w-auto text-center md:text-left md:flex-row text-sm font-medium`}
                    data-aos="fade-down"
                >
                    <li><a href="#home" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Home</a></li>
                    <li><a href="#about" className="block py-2 px-4 hover:text-blue-400 transition duration-300">About Me</a></li>
                    <li><a href="#experience" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Experience</a></li>
                    <li><a href="#skills" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Skills</a></li>
                    <li><a href="#education" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Education</a></li>
                    <li><a href="#projects" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Projects</a></li>
                    <li><a href="#contact" className="block py-2 px-4 hover:text-blue-400 transition duration-300">Contact Me</a></li>
                </ul>

                {/* Right Side - Button */}
                <div data-aos="fade-left" className="hidden md:block">
                    <a
                        href="#contact"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold transition duration-300"
                    >
                        Hire Me
                    </a>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex justify-between items-center px-6">
                <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
