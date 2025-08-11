import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const WelcomeMessage = () => {
  useEffect(() => {
    AOS.init(); 
    AOS.refresh(); 
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-20 px-6 md:px-12"
      id="welcome"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          {/* Typewriter Effect */}
          <div className="mb-6 text-2xl font-bold text-center" data-aos="fade-up">
            <Typewriter
              words={[
                "Welcome to My Website.",
                "I'm Debasis, a Web Developer.",
                "Passionate About Machine Learning.",
                "Advocate for Cybersecurity.",
              ]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
          <p
            className="text-lg md:text-2xl text-gray-200 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm always excited to learn, grow, and collaborate. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
