import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const ContactSection = () => {
    return (
        <section className="text-gray-600 body-font relative  py-20">
            <div className="absolute inset-0 ">
                <div className='relative pb-6 md:pb-8 xl:pb-10'>
                    <h3 className='text-2xl md:text-4xl text-center z-20 '>Contact Me </h3>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3030209670933!2d88.93724451102318!3d24.819308877864202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc7dcdc1138767%3A0x96cd98b659f2e035!2sUkilpara!5e0!3m2!1sen!2sbd!4v1698497347909!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    // style={{ filter: 'grayscale(80%)', }} // Apply the style directly here
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className=" px-5 md:py-24 mx-auto flex ">
                <div className="lg:w-1/3 md:w-1/3 bg-white grayscale-0  p-8 flex flex-col md:ml-auto w-full text-black roounded-[15px] relative z-10 shadow-2xl md:space-y-4">
                    
                    <div className='flex gap-2 w-full text-[18px]'>Present Address : Khilgaon, Dhaka</div>
                    <div className='flex gap-2 w-full text-[18px]'>Permanent Address : Naogaon, Rajshahi</div>
                   
                    <div className='flex gap-2 w-full text-[18px]'>Email : <a className='underline ease-in-out duration-700 transition-all underline-offset-4 hover:scale-105 flex items-center gap-1' href="mailto:“sayemsaadat0@gmail.com”">sayemsaadat0@gmail.com <MdArrowOutward /></a></div>
                    <div className='flex gap-2 w-full text-[18px]'>Whatsapp : <a target='_blank' className='underline ease-in-out duration-700 transition-all underline-offset-4 hover:scale-105 flex items-center gap-1' href="https://wa.me/+8801521574741">+8801521574741 <MdArrowOutward /></a></div>
                </div>
            </div>
        </section >

    )
}

export default ContactSection