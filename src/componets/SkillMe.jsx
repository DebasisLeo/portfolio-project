import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiCplusplus, SiTailwindcss, SiDaisyui } from "react-icons/si";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400 text-5xl" /> },
];

const SkillMe = () => {
  return (
    <section
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-16 md:py-24 text-white"
      id="skills"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial="hidden"
            whileInView="visible"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Here are the technologies and tools I am proficient with:
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center"
              animate={{
                x: [0, -20, 20, 0], 
              }}
              transition={{
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: index * 0.1, 
              }}
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMe;
