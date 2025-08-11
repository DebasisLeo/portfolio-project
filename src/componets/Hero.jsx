import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Typed } from 'react-typed';

import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';
import D from '../assets/da.jpg';
import Resume from '../assets/Resume.pdf'; // Import your resume PDF file

const Hero = () => {
    // Reference for Typed component
    const typedRef = useRef(null);

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });

        
        if (typedRef.current) {
            new Typed(typedRef.current, {
                strings: [
                    'Frontend Developer',
                    'Web Developer',
                    'Full Stack Developer',
                    'Backend Developer',
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
            });
        }
    }, []);

    return (
        <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-cyan-100 text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-12 relative">
            {/* Left Side */}
            <div
                className="flex flex-col justify-center items-start space-y-6 w-full md:w-1/2"
                data-aos="fade-right"
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hi, This Is <span className="text-blue-400">DEBASIS</span>
                </h1>

                {/* Dynamic Typing Effect */}
                <p className="text-xl text-gray-400">
                    <span ref={typedRef}></span>
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-4 backdrop-blur-md bg-white/10 p-4 rounded-lg shadow-lg">
                    <a
                        href="https://github.com/DebasisLeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debashis-joy-507818313/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/debasis.heron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://x.com/leo_debasis?s=21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                </div>

               
                <div className="space-x-4 mt-6 ">
                    <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-2xl font-semibold transition duration-300 shadow-lg"
                    >
                        View My Resume
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
                data-aos="fade-left"
            >
                {/* Profile Image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 relative z-10">
                    <img
                        src={D} 
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gray-700 border-2 border-blue-500 animate-float"></div>
            </div>

            
            <div
                className="absolute bottom-6 text-center w-full flex justify-center"
                data-aos="fade-up"
            >
                <div className="text-gray-400 text-sm">
                    <span className="animate-bounce">&darr;</span> Scroll Down
                </div>
            </div>
        </section>
    );
};

export default Hero;
