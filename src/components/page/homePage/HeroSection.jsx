
import { Button } from '@/components/ui/button'
import Image from 'next/legacy/image';
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";


const HeroSection = () => {
    return (
        <section className='py-12 md:py-20 xl:py-28'>
            <div className="text-[32px] text-center md:text-left  md:text-[44px] lg:text-[56px] xl:text-[62px]  py-10">
                <p >Hey, <span className="font-bold">Sayem Saadat</span> here! Discover </p>
                <p>my stories and creative {`portfolio's.`}</p>

                {/* <div className='flex items-center justify-center pt-6'>
                    <Button className="flex items-center justify-center gap-2" variant={'default'}>Lets Talk <BsFillSendFill /></Button>
                </div> */}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-y-10 gap-x-10 ">
                <div className='flex items-center justify-center md:justify-normal md:w-1/2 '>
                    <Image className='object-cover  object-top rounded-[12px]'
                        src={'https://i.ibb.co/Tk1zs3C/Untitled-design-2.png'} alt='banner'
                        width={460}
                        height={500} />
                </div>
                <div className='text-center md:text-left md:w-1/2  space-y-5 md:space-y-10'>
                    <p className="text-[24px] font-semibold text-slate-500">
                        About
                    </p>
                    <p className="text-[18px] md:text-[22px] text-center md:text-justify">Am Abu Saadat Md. Sayem, a Frontend Developer from
                        Naaogaon, Bangladesh. with a strong desire to make a
                        difference in the world through the power of web design, by
                        creating websites that are both beautiful and functional,
                        and that help people achieve their goals.
                    </p>
                    <div className='flex items-center justify-center md:justify-start'>
                        <Button className="flex items-center justify-center gap-2" variant={'default'}>Download Resume<MdDownloadForOffline className='text-2xl' /></Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection