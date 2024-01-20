import Image from 'next/image'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'

const HeroSection1 = () => {
    return (
        <section className='bg-[#f0ebe5] py-[120px] md:py-0 min-h-[calc(85vh)] md:min-h-[calc(100vh)] flex items-center justify-center '>
            <div className='commonContainer flex items-center   justify-center  relative'>
                <div>
                    <button className='absolute hidden top-[10%] hover:scale-105 duration-300 hover:drop-shadow-2xl  bg-transparent -right-[calc(30%)] lg:block'>
                        <Image className='animate-Button rounded-full' src={'https://i.ibb.co/H7Sx81p/Logo-5.png'} alt='btn' width={150} height={100} />
                        <span className='absolute  top-[calc(50%-17px)] left-1/2 -translate-x-1/2'><FaArrowDown className='text-4xl' /> </span>
                    </button>
                    <button className='absolute block -top-[5%] hover:scale-105 duration-300 hover:drop-shadow-2xl  bg-transparent right-5 md:-right-[10%] lg:hidden'>
                        <Image className='animate-Button rounded-full w-[80px] md:w-[150px]' src={'https://i.ibb.co/H7Sx81p/Logo-5.png'} alt='btn' width={150} height={100} />
                        <span className='absolute  top-[calc(50%-17px)] left-1/2 -translate-x-1/2'><FaArrowDown className='text-4xl' /> </span>
                    </button>
                </div>
                <div className='border-t w-[90%] sm:w-full border-b-0 border-r border-r-black border-t-black p-4 rounded-full  bg-none relative'>
                    <Image className='  rounded-full object-cover shadow-2xl z-30 relative '
                        src={'https://i.ibb.co/Tk1zs3C/Untitled-design-2.png'} alt='banner'
                        width={350}
                        height={650} />
                    <div>
                        <h1 className='absolute titleFont1 text-[75px] top-[calc(33%-35px)] z-30 text-right  -left-[calc(50%+30px)]  leading-[80px]  h-full bg-gradient-to-r from-[#efad66] via-black   to-primary hidden lg:block text-transparent bg-clip-text animate-gradient'>Abu <br /> Saadat <br /> Md <br /> Sayem</h1>

                        <h1
                            className='absolute animate-gradient titleFont1
                        text-[32px] sm:text-[48px] md:text-[52px] 
                        -top-[calc(10%)] 
                        -left-0 sm:-left-[15%] md:-left-[15%]
                        leading-10 z-30 xl:leading-[80px]  h-full 
                        bg-gradient-to-r from-[#efad66] via-black   to-primary block lg:hidden text-transparent bg-clip-text  '>Abu Saadat <br /> Md  Sayem</h1>
                    </div>
                    <div>
                        <h3 className='absolute  text-[36px] bg-gradient-to-r from-[#f0ebe5]    to-transparent titleFont1 top-[calc(65%)] -right-[calc(55%)] z-30  leading-[80px] rounded-full px-4 hidden lg:block'>
                            Frontend Developer</h3>
                        <h3 className='absolute rounded-full px-4 block lg:hidden  
                        titleFont1 text-center
                        right-0
                        -bottom-[15%] 
                        z-30  text-[24px] 
                         leading-8'>
                            Frontend <br /> Developer</h3>
                    </div>
                    <div className="absolute h-32 w-32 md:h-72 md:w-72  rounded-full bg-[#efad66]  blur-[40px]  bottom-0  "></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection1