
import React from 'react';
// import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EduAndExpSection from './EduAndExpSection';
import SkillSection from './SkillSection';
import ContactSection from './ContactSection';
import HeroSection1 from './HeroSection1';

const HomePage = () => {
    return (
        <div className=' space-y-[50px] md:space-y-[100px]'>
            <div><HeroSection1 /></div>
            <div > <AboutSection /></div>
            <div id="experience"><EduAndExpSection /></div>
            <div > <SkillSection /></div>
            <div id="contact" className=""> <ContactSection /></div>
        </div>
    );
};

export default HomePage;