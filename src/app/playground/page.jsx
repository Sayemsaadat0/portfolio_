import Image from 'next/image'
import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Playground = () => {
    // f0ebe5
    return (
        <section className='bg-[#f0ebe5] min-h-screen flex items-center justify-center'>
            <div className='commonContainer flex items-center   justify-center min-h-[calc(100vh)] relative'>
                <button className='absolute -right-1/3 top-1/4 hover:scale-105 duration-300 hover:drop-shadow-2xl  bg-transparent'>
                    <Image className='animate-Button rounded-full' src={'https://i.ibb.co/H7Sx81p/Logo-5.png'} alt='btn' width={150} height={100} />
                    <span className='absolute  top-[calc(50%-17px)] left-1/2 -translate-x-1/2'><FaArrowDown className='text-4xl' /> </span>
                </button>
                <div className='border-t
                border-b-0 
                border-r 
                border-r-black 
                border-t-black p-4 
                rounded-full  
                bg-none relative'>
                    <Image className='rounded-full 
                    object-cover shadow-2xl z-30 relative '
                        src={'https://i.ibb.co/Tk1zs3C/Untitled-design-2.png'} alt='banner'
                        width={450}
                        height={650} />
                    <h1 className='absolute titleFont1 text-[96px] top-[calc(33%-35px)] z-30 text-right  -left-[calc(50%+20px)]  leading-[80px] 
                      h-full bg-gradient-to-r from-[#efad66] via-black   to-primary inline-block text-transparent bg-clip-text animate-gradient
                    '>Abu <br /> Saadat <br /> Md <br /> Sayem</h1>
                    <h3 className='absolute  text-[44px] bg-gradient-to-r from-[#f0ebe5]    to-transparent titleFont1
                    top-[calc(65%)] 
                    -right-[calc(55%)] z-30     leading-[80px] 
                  rounded-full px-4 inline-block 
                    '>Frontend Developer</h3>
                    <div className="absolute h-72 w-72  rounded-full bg-[#efad66]  blur-[40px]  bottom-0  "></div>
                </div>
            </div>
        </section>
    )
}

export default Playground