
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EduAndExpSection from './EduAndExpSection';
import SkillSection from './SkillSection';
import ContactSection from './ContactSection';

const HomePage = () => {
    return (
        <div className=' space-y-[50px] md:space-y-[100px]'>
            <div><HeroSection /></div>
            <div > <AboutSection /></div>
            <div id="experience"><EduAndExpSection /></div>
            <div > <SkillSection /></div>
            <div id="contact"> <ContactSection /></div>
        </div>
    );
};

export default HomePage;