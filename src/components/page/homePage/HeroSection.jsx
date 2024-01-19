import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section >
            <div className="mx-auto flex flex-col items-center justify-center  pt-20 md:pt-32 md:flex-row relative">
                <div className="mb-10 md:mb-0 w-full flex justify-center items-center md:justify-between   md:w-1/2 ">
                    <div className='-rotate-90 hidden md:block'>
                        <div className="flex gap-x-4 ">
                            <Link href='/'><FaLinkedin className='w-10 h-10   hover:opacity-50 transition-all duration-500 ease-in-out' /></Link>
                            <Link href='/'><FaSquareGithub className='w-10 h-10 hover:opacity-50 transition-all duration-500 ease-in-out' /></Link>
                        </div>
                    </div>
                    <div className='md:px-16'>
                        <Image className="object-cover  w-44 h-44  md:w-60 md:h-60 xl:w-80 xl:h-80 object-center rounded-full" src='https://i.ibb.co/JF8npBQ/20231213-104046f-1-2.jpg' alt='sayem' width={400} height={400} />
                    </div>
                </div>
                {/* <div className='h-72 w-72 bg-secondary rounded-full blur-[120px] opacity-60 absolute -left-20 top-0 -z-10' /> */}
                {/* <div className='h-72 w-72 bg-primary rounded-full blur-[90px] opacity-80 absolute right-0 bottom-0 -z-10 hidden md:block' /> */}
                <div className="w-full justify-center flex flex-col items-center text-center  md:text-left  md:items-start md:w-1/2 ">
                    {/* title */}
                    <div className='relative'>
                        <p className='h-8 w-8 rounded-full bg-primary opacity-70 absolute -top-1 -left-2 -z-10'></p>
                        <p className=''>{"Hello, I'm"}</p>
                    </div>
                    <h1 className='text-2xl font-semibold md:text-5xl md:font-bold titleFont'>Abu Saadat Md. Sayem</h1>
                    <h2 className='text-xl font-semibold md:text-xl  text-gray-400 '>Frontend Developer</h2>
                    <div className='mt-4 flex gap-2 items-center'>
                        <Button>Resume</Button>
                        <Button className='rounded-[20px]' variant={'outline'}>Contact</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection