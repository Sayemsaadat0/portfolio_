import React from 'react'

const AboutSection = () => {
    return (
        <section id='about'>
            <div className="mx-auto flex flex-col items-center justify-center gap-10  w-full  relative ">
                <div className='relative'>
                    <span className='h-12 w-12  md:h-16 md:w-16 rounded-full bg-primary opacity-70 absolute -top-3 -left-2 -z-10'></span>
                    <h3 className='text-2xl md:text-4xl '>{"About Sayem"}</h3>
                </div>
                {/* <div className='h-60 w-60 bg-primary rounded-full blur-[80px] opacity-80 absolute left-0 bottom-0 -z-10 hidden md:block' /> */}

                <div className='md:w-2/3 text-center leading-[200%]'>
                    <p>Am Abu Saadat Md. Sayem, a <br />
                        <span className='border m-2 p-2 w-full  rounded-[200%]  border-slate-500 font-semibold'>
                            Frontend Developer
                        </span>
                        from Naaogaon, Bangladesh. with a strong desire to make a difference in the world through the power of web design, by creating websites that are both beautiful and functional, and that help people achieve their goals.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection