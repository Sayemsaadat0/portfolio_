import Footer from '@/components/core/footer/Footer';
import Navbar from '@/components/core/navbar/Navbar';
import React from 'react';

const template = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default template;