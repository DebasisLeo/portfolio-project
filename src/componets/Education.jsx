import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import "aos/dist/aos.css";

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 md:py-24 text-white"
      id="education"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            My Education
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            A brief overview of my academic background.
          </motion.p>
        </div>

        {/* Education Content */}
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideIn}
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <FaUniversity className="text-6xl text-teal-400 mb-6 animate-bounce" />
          <motion.h3
            className="text-2xl md:text-3xl font-semibold mb-4"
            animate={{
              color: ["#34D399", "#60A5FA", "#A78BFA","#FFFFFF", "#34D399"], // Color cycle
            }}
            transition={{
              duration: 3, // Time for one cycle
              repeat: Infinity, // Infinite repeat
              ease: "easeInOut", // Smooth easing
            }}
          >
            Shahjalal University of Science and Technology, Sylhet
          </motion.h3>
          <p className="text-lg md:text-xl text-gray-300">
            I am a <strong className="text-teal-400">4th semester</strong> student in the{" "}
            <strong className="text-blue-400 ">
              Department of Software Engineering
            </strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
