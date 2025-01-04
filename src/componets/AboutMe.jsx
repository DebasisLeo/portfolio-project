import React from 'react';
import { FaLaptopCode, FaBrain, FaShieldAlt } from 'react-icons/fa'; // Removed the playing icons
import { Motion, spring } from 'react-motion';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

const AboutMe = () => {
  // Initialize AOS animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r mt-3 from-teal-500 via-cyan-500 to-indigo-600 text-white py-16 md:py-24" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-6">
          <Motion
            defaultStyle={{ opacity: 0 }}
            style={{ opacity: spring(1, { stiffness: 120, damping: 17 }) }}
          >
            {(style) => (
              <h2
                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                style={{ opacity: style.opacity }}
              >
                About Me
              </h2>
            )}
          </Motion>
          <p className="text-lg md:text-xl text-gray-200">
            I am a passionate web developer with a strong interest in Machine Learning and Cybersecurity. Let me tell you a bit about myself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div data-aos="fade-up" className="space-y-6 text-lg text-gray-200">
            <Motion
              defaultStyle={{ opacity: 0 }}
              style={{ opacity: spring(1, { stiffness: 120, damping: 17 }) }}
            >
              {(style) => (
                <p style={{ opacity: style.opacity }}>
                  I developed a keen interest in web development at the age of 11, inspired by my elder brother's impressive work in this field. Over the years, my passion for technology has expanded to include machine learning and cybersecurity, where I am eager to apply my skills and knowledge.
                </p>
              )}
            </Motion>

            <Motion
              defaultStyle={{ opacity: 0 }}
              style={{ opacity: spring(1, { stiffness: 120, damping: 17 }) }}
            >
              {(style) => (
                <p style={{ opacity: style.opacity }}>
                  Outside of my professional interests, I am an avid sports enthusiast. I enjoy games like table tennis, cricket, and badminton, which help me stay active and improve my focus. I believe that a balance between work and recreation is essential for creativity and success.
                </p>
              )}
            </Motion>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <div className="flex flex-col space-y-6">
              <Motion
                defaultStyle={{ scale: 0 }}
                style={{ scale: spring(1, { stiffness: 120, damping: 17 }) }}
              >
                {(style) => (
                  <div
                    className="flex items-center space-x-6 transform transition-all duration-300"
                    style={{ transform: `scale(${style.scale})` }}
                  >
                    <FaLaptopCode className="text-5xl text-blue-400" />
                    <span className="text-xl font-semibold text-white">Web Development</span>
                  </div>
                )}
              </Motion>

              <Motion
                defaultStyle={{ scale: 0 }}
                style={{ scale: spring(1, { stiffness: 120, damping: 17 }) }}
              >
                {(style) => (
                  <div
                    className="flex items-center space-x-6 transform transition-all duration-300"
                    style={{ transform: `scale(${style.scale})` }}
                  >
                    <FaBrain className="text-5xl text-green-400" />
                    <span className="text-xl font-semibold text-white">Machine Learning</span>
                  </div>
                )}
              </Motion>

              <Motion
                defaultStyle={{ scale: 0 }}
                style={{ scale: spring(1, { stiffness: 120, damping: 17 }) }}
              >
                {(style) => (
                  <div
                    className="flex items-center space-x-6 transform transition-all duration-300"
                    style={{ transform: `scale(${style.scale})` }}
                  >
                    <FaShieldAlt className="text-5xl text-red-400" />
                    <span className="text-xl font-semibold text-white">Cybersecurity</span>
                  </div>
                )}
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
