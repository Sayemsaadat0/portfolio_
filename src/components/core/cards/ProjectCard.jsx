import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = () => {
    return (
        <div className='border p-4 max-w-[450px] space-y-6 max-h-[650px] overflow-y-auto cardScroll text-justify bg-white  rounded-[20px] '>

            <div className='flex flex-col items-center group relative overflow-hidden rounded-[20px]'>
                <Image className='object-cover rounded-[20px] ' src={'https://i.pinimg.com/736x/16/e2/69/16e2699ba8c7b8ad8e690310092e43c6.jpg'} width={450} height={300} alt='Card Image' />

                <div className='absolute left-[500px]  justify-center bg-slate-500/10 transition-all duration-700 group-hover:left-0 w-full h-full rounded-[20px]  py-4'>
                </div>
                <div className='absolute left-[500px] transition-all duration-700 group-hover:left-0 w-full h-full flex items-center justify-center space-x-3 font-bold '>
                    <Link href="#">Live Site</Link>
                    <Link href="#">Client</Link>
                    <Link href="#">Server</Link>
                </div>
            </div>


            <div>
                <Link className='text-2xl font-semibold hover:text-slate-400  transition-all duration-300' href="#">Project title </Link>
            </div>


            <div>
                short Description <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sapiente accusantium a doloremque commodi dolores minima. Error sint,
            </div>
            <div className='space-y-2'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius fugiat aliquam, corrupti suscipit obcaecati eos maxime sunt eveniet earum.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius fugiat aliquam, corrupti suscipit obcaecati eos maxime sunt eveniet earum.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius fugiat aliquam, corrupti suscipit obcaecati eos maxime sunt eveniet earum.</li>
            </div>
        </div>
    )
}

export default ProjectCard



/* 
*/