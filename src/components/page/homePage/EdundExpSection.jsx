"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";




const EdundExpSection = () => {
    const [activetab, setActiveTab] = useState('experience')
    return (
        <section className='md:py-10'>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row '>
                <div className='text-center md:text-left'>
                    <p className="text-[32px] font-semibold text-slate-500">
                        Work & Study Chronicles
                    </p>
                    <p className="text-[18px]">Overview of my academic degree and professional experience</p>

                </div>

                <div>
                    <Button className={`text-[16px] font-normal text-black no-underline ${activetab === 'experience' ? 'font-bold text-slate-500 underline' : ''}`} onClick={() => setActiveTab('experience')} variant={'link'}>
                        Experienct
                    </Button>
                    <Button className={`text-[16px] font-normal text-black no-underline ${activetab === 'education' ? 'font-bold text-slate-500 underline' : ''}`} onClick={() => setActiveTab('education')} variant={'link'}>
                        Education
                    </Button>
                </div>
            </div>

            {/* education */}
            <div className='mt-6 md:mt-12'>
                {
                    activetab === 'education' && <div className='space-y-6'>
                        <div className='space-y-2'>
                            <p className='text-[18px] md:text-[24px] font-semibold'>Bachelor of Science in Botany (2018 - Present)
                            </p>
                            <p className='text-[18px] md:text-[24px]'>National University Bangladesh
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-[18px] md:text-[24px] font-semibold'>Higher Secondary Certificate(Science)
                            </p>
                            <p className='text-[18px] md:text-[24px]'>Naogaon Govt. College, Naogaon, Bangladesh

                            </p>
                        </div>
                    </div>
                }
            </div>

            {/* Experience */}
            <div className='mt-6 md:mt-12'>
                {
                    activetab === 'experience' && <div className='space-y-6'>
                        <div className='space-y-2'>
                            <p className='text-[24px] font-semibold'>Intern Developer
                            </p>
                            <p className='text-[18px] md:text-[24px]'>
                                The Yolo Studio ,Gulshan-2, Dhaka
                            </p>
                            <p>
                                (Nov 2023 - Present)
                            </p>
                            <div className='  space-y-4 text-[18px]'>
                                <p className='flex md:items-center gap-2'><FaCheckCircle className='text-xl'/> Actively participated with the team to meet the goals and build both user-friendly and interactive web applications.
                                </p>
                                <p className='flex md:items-center   gap-2'><FaCheckCircle className='text-xl'/> Assisted in frontend development to optimize website performance with efficient coding practices.
                                </p>
                                <p className='flex  md:items-center  gap-2'><FaCheckCircle className='text-xl'/> Engaged in self-directed learning to expand skills and stay updated with the latest technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}

export default EdundExpSection