import React from 'react';
import { FaLaptopCode, FaBrain, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { stiffness: 120, damping: 17 } },
  };

  const scaleUp = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { stiffness: 120, damping: 17 } },
  };

  const highlightText = {
    hidden: { opacity: 0, x: -100, color: '#fff', filter: 'blur(4px)' },  // Start from left, blur, white color
    visible: {
      opacity: 1,
      x: 0,  // Move to the normal position
      color: '#ffcc00', // Change to a new color (you can use any color you want)
      filter: 'blur(0)',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-gradient-to-r mt-3 from-teal-500 via-cyan-500 to-indigo-600 text-white py-16 md:py-24" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-6">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            variants={highlightText}
            viewport={{ once: false }} // Trigger each time it enters the viewport
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: false }}
          >
            I am a passionate web developer with a strong interest in Machine Learning and Cybersecurity. Let me tell you a bit about myself.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 text-lg text-gray-200">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false }}
            >
              I developed a keen interest in web development at the age of 11, inspired by my elder brother's impressive work in this field. Over the years, my passion for technology has expanded to include machine learning and cybersecurity, where I am eager to apply my skills and knowledge.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false }}
            >
              Outside of my professional interests, I am an avid sports enthusiast. I enjoy games like table tennis, cricket, and badminton, which help me stay active and improve my focus. I believe that a balance between work and recreation is essential for creativity and success.
            </motion.p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col space-y-6">
              <motion.div
                className="flex items-center space-x-6 transform transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                variants={scaleUp}
                viewport={{ once: false }}
              >
                <FaLaptopCode className="text-5xl text-blue-400" />
                <motion.span
                  className="text-xl md:text-2xl font-semibold text-white"
                  variants={highlightText}
                >
                  Web Development
                </motion.span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 transform transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                variants={scaleUp}
                viewport={{ once: false }}
              >
                <FaBrain className="text-5xl text-green-400" />
                <motion.span
                  className="text-xl md:text-2xl font-semibold text-white"
                  variants={highlightText}
                >
                  Machine Learning
                </motion.span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 transform transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                variants={scaleUp}
                viewport={{ once: false }}
              >
                <FaShieldAlt className="text-5xl text-red-400" />
                <motion.span
                  className="text-xl md:text-2xl font-semibold text-white"
                  variants={highlightText}
                >
                  Cybersecurity
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
