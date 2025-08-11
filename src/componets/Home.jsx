import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Experience from './Experince';
import SkillMe from './SkillMe';
import Education from './Education';
import Projects from './Projects';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <SkillMe></SkillMe>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
            
            
        </div>
    );
};

export default Home;