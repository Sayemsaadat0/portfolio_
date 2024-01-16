import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-center w-full py-4 mt-10 md:mt-20  sticky top-[100%] text-slate-400'>
            <p>© {currentYear} Abu Saadat Md. Sayem, All rights reserved.</p>
        </div>
    )
}

export default Footer