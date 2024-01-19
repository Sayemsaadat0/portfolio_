"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useState } from 'react'


const EduAndExpTab = ({ active, setActive }) => {
    const handleTabClick = (tabNme) => {
        setActive(tabNme);
    };
    return (
        <div className="border flex px-2 py-2 md:w-fit items-center  space-x-2 justify-center md:bg-s6-Bg-4 overflow-x-auto rounded-full mx-auto">
            <Button
                className={`bg-transparent ${active === 'education' && ' bg-primary'}`}
                onClick={() => handleTabClick('education')}>
                Education
            </Button>
            <Button
                className={`bg-transparent ${active === 'experience' && ' bg-primary'}`}
                onClick={() => handleTabClick('experience')}>
                Experience
            </Button>
        </div>
    )
}








// default
const EduAndExpSection = () => {
    const [active, setActive] = useState('experience')
    return (
        <section className="text-gray-600 body-font flex flex-col items-center ">
            <div className='relative pb-6 md:pb-8 xl:pb-10'>
                <span className='h-12 w-12  md:h-16 md:w-16 rounded-full bg-primary opacity-70 absolute -top-3 -left-2 -z-10'></span>
                <h3 className='text-2xl md:text-4xl text-center'>Education and Professional <br /> Experience</h3>

            </div>
            <div className='pb-5 md:pb-8 xl:pb-10'>
                <EduAndExpTab active={active} setActive={setActive} />
            </div>
            {/* Education */}

            {
                active === 'education' && <div className="container px-5  mx-auto flex  flex-wrap">
                    <div className="flex  flex-wrap-reverse w-full">
                        <div className="md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-6 mx-2 h-6 rounded-full bg-slate-400 inline-flex items-center justify-center text-white relative z-10">
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-6 mx-2 h-6 rounded-full bg-slate-400 inline-flex items-center justify-center text-white relative z-10">
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 flex items-center justify-center' >
                            <Image src={'https://i.ibb.co/yn9XbdJ/Logo.png'} alt='education' width={400} height={400} />
                        </div>
                    </div>
                </div>
            }

            {/* experience */}

            {
                active === 'experience' && <div className=" px-5  mx-auto flex  flex-wrap">
                    <div className="flex  flex-wrap-reverse w-full">
                        <div className="md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-6 mx-2 h-6 rounded-full bg-slate-400 inline-flex items-center justify-center text-white relative z-10">
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 flex items-center justify-center ' >
                            <Image src={'https://i.ibb.co/HDpSgCF/Logo-2.png'} alt='experience' width={400} height={400} />
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default EduAndExpSection








/*  <section className="text-gray-600 body-font">
           <div className="container px-5 py-24 mx-auto">
               <div className="flex flex-col text-center w-full mb-20">
                   <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                   <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
               </div>
               <div className="flex flex-wrap -m-4">
                   <div className="lg:w-1/3 sm:w-1/2 p-4">
                       <div className="flex relative">
                       <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" /> 
                           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                               <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                               <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                               <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </section> */