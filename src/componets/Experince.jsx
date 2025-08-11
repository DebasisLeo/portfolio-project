import React from "react";
import { FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Experience = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    const slideIn = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    const textAnimate = {
        hidden: { x: -50, opacity: 0, color: "#fff" },
        visible: {
            x: 0,
            opacity: 1,
            color: "#ffcc00",
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            className="bg-gradient-to-r from-cyan-800 via-gray-800 to-gray-600 text-white py-16 md:py-24"
            id="experience"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                    >
                        My Experience
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideIn}
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            variants={textAnimate}
                        >
                            My journey in web development began when I was{" "}
                            <strong>11 years old</strong>, inspired by my elder brother's
                            remarkable work as a remote developer for a company in the United
                            States.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            variants={textAnimate}
                        >
                            Initially, I assisted him with various projects, gaining hands-on
                            experience and sharpening my skills. By the age of{" "}
                            <strong>12</strong>, I started working on complete projects
                            independently. This is one of the projects I contributed to:
                        </motion.p>
                       
                        <motion.a
                            href="https://fashionbarnshop.com/" // Replace with the actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-3xl font-extrabold  space-x-2"
                            animate={{
                                x: [0, 10, 0], // Move right and back
                                color: ["#38bdf8", "#ff0000", "#38bdf8"], // From teal to red and back to teal
                            }}
                            transition={{
                                duration: 2, // Total duration for one cycle
                                repeat: Infinity, // Repeat infinitely
                                ease: "easeInOut", // Smooth easing
                            }}
                        >
                            <FaProjectDiagram className="text-2xl" />
                            <span>View the Project</span>
                        </motion.a>


                    </motion.div>

                    {/* Icon + Visual */}
                    <motion.div
                        className="flex justify-center md:justify-end"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                    >
                        <FaLaptopCode className="text-9xl text-teal-300 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
