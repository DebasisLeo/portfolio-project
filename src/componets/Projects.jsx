import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "aos/dist/aos.css"; 


const individualProjects = [
  {
    id: 1,
    name: "Lingo Bingo: A Vocabulary Learning Application",
    image: 'https://i.ibb.co.com/kDYpdc9/a1.jpg',
    techStack: "Tailwind, React, MongoDB, Firebase, DaisyUI",
    description:
      "An interactive vocabulary learning application designed to help users improve their vocabulary skills.",
    liveLink: "https://private-route-47cf2.web.app/",
    githubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-DebasisLeo",
    challenges:
      "The biggest challenge was ensuring real-time synchronization with Firebase.",
    details:
      "Lingo Bingo is an app that uses game mechanics to make learning vocabulary fun and interactive. When users click on a word, the app provides the correct pronunciation, enhancing the learning experience. Real-time data sync with Firebase and handling large data sets were the major challenges during development.",
  },
  {
    id: 2,
    name: "Modern Hotel Booking Platform",
    image: 'https://i.ibb.co.com/ZhcL3GT/a2.webp',
    techStack: "Tailwind, React, MongoDB, Firebase, DaisyUI",
    description:
      "A platform to search and book hotels, providing real-time availability and booking functionality.",
    liveLink: "https://hotel-managemet.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-DebasisLeo",
    challenges:
      "Handling payment processing securely and ensuring smooth real-time booking updates were key challenges.",
    details:
      "This platform allows users to find and book hotels with real-time availability updates. Users can check hotel locations, book rooms, cancel bookings, and post or view feedback. Optimizing database queries and ensuring secure payment processing were significant challenges during development.",
  },
  {
    id: 3,
    name: "Visa Navigator Portal",
    image: 'https://i.ibb.co.com/5BCZLm3/a3.jpg',
    techStack: "Tailwind, React, MongoDB, Firebase, DaisyUI",
    description:
      "A portal to help users navigate through the visa application process with real-time status tracking.",
    liveLink: "https://sunflower-project-416c5.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-DebasisLeo",
    challenges:
      "Integrating third-party APIs for visa status tracking was a challenge.",
    details:
      "Visa Navigator helps users apply for visas, track their visa status in real-time, and manage visa updates. The platform features both dark mode and light mode for better user experience. Users can apply, cancel, and update their visa status in real-time. Integrating various APIs to provide accurate information and ensuring seamless user interaction were the main challenges during development.",
  },
  {
    id: 4,
    name: "Platinum Lounge",
    image: 'https://i.ibb.co.com/8DD0wWS6/premium-photo-1663012975679-4f257055a5e3-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64.jpg',
    techStack: "React, Tailwind CSS, MongoDB, Firebase, DaisyUI",
    description: "A restaurant website for Platinum Lounge offering delicious food and online ordering.",
    liveLink: "https://bistro-boss-e3f5a.web.app/",
    githubLink: "https://github.com/DebasisLeo/crave-client",
    challenges: "Designing a responsive UI and integrating Firebase and MongoDB for smooth user experience.",
    details: "Platinum Lounge is a restaurant website showcasing menu items with a user-friendly interface. The project involved building responsive layouts, implementing online ordering, and real-time updates using Firebase and MongoDB to enhance customer experience.",
  }
  
];

const teamProject = {
  id: 4,
  name: "Teamly - E-Commerce Platform",
  image: 'https://i.ibb.co.com/R45hc1P/a4.webp', 
  techStack: "Tailwind, React, MongoDB, Firebase, DaisyUI",
  description: "An e-commerce platform developed by our team for online shopping.",
  liveLink: "https://fashionbarnshop.com/",
  githubLink: "https://github.com/username/teamly",
  challenges:
    "Coordinating tasks between team members and handling real-time updates across the platform.",
  details:
    "Teamly is an e-commerce platform with real-time chat and task management. The main challenge was ensuring smooth coordination between team members and handling the integration of various features, including secure payment methods.",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="bg-gradient-to-r from-gray-800 via-cyan-500 to-black py-16 md:py-24 text-white"
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
          >
            My Best Projects
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Take a look at some of my highlighted projects.
          </p>
        </div>

        {/* Individual Projects */}
        <div className="mb-12">
          <motion.h3
            className="text-3xl md:text-4xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
          >
            Individual Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                data-aos="zoom-in"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="text-gray-300 mt-4">{project.description}</p>
                  <div className="flex mt-6 space-x-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded flex items-center space-x-2"
                    >
                      <FaCode />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Project */}
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
          >
            Team Project
          </motion.h3>
          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-aos="zoom-in"
          >
            <img
              src={teamProject.image}
              alt={teamProject.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{teamProject.name}</h3>
              <p className="text-gray-300 mt-4">{teamProject.description}</p>
              <div className="flex mt-6 space-x-4">
                <button
                  onClick={() => setSelectedProject(teamProject)}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded flex items-center space-x-2"
                >
                  <FaCode />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-11/12 md:w-1/2">
            <h3 className="text-3xl font-semibold">{selectedProject.name}</h3>
            <p className="text-lg text-gray-300 mt-4">{selectedProject.details}</p>
            <div className="mt-6">
              <p className="font-semibold text-gray-400">Tech Stack:</p>
              <p className="text-gray-300">{selectedProject.techStack}</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-gray-400">Challenges Faced:</p>
              <p className="text-gray-300">{selectedProject.challenges}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-500 flex items-center space-x-2"
              >
                <FaExternalLinkAlt />
                <span>Live Project</span>
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-500 flex items-center space-x-2"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
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

export default Projects;
