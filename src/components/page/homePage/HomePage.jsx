
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-y-12'>
            <HeroSection />
            <AboutSection />
        </div>
    );
};

export default HomePage;