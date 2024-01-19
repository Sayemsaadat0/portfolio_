import Image from 'next/image'
import React from 'react'

const SkillSection = () => {
    return (
        <div className='flex flex-col space-y-[30px] md:space-y-[50px] items-center'>
            <div className='relative pb-6 md:pb-8 xl:pb-10'>
                <span className='h-12 w-12  md:h-16 md:w-16 rounded-full bg-primary opacity-70 absolute -top-3 -left-2 -z-10'></span>
                <h3 className='text-2xl md:text-4xl text-center'>Stuffs  I am Good at! </h3>
            </div>

            <div className='grid w-full place-items-center  grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-10'>
                {
                    [...new Array(15)].map((i,) => <div key={Math.random()}>
                        <Image className="object-cover"
                            src={'https://placehold.co/180x180/png'} alt="skill" width={200} height={200} />
                    </div>)
                }


            </div>
        </div>
    )
}

export default SkillSection