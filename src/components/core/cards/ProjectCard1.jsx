import Image from 'next/image'
import React from 'react'

const ProjectCard1 = ({ title , isRight , thumbnail, bp1, bp2, bp3}) => {

  return (
    <div className={`flex flex-col gap-x-10 md:flex-row ${isRight && 'md:flex-row-reverse'}`}>
      <div className='md:w-1/3'>
        <Image className='object-cover 
        w-full h-full
        rounded-[20px] object-center sm:object-left md:object-center'
          src={thumbnail}
          width={450}
          height={350}
          alt='CardImage'
        />
      </div>
      <div className=' md:w-2/3 flex flex-col justify-center  space-y-5'>
        {/* titles */}
        <div>
          <h3 className='font-semibold text-[20px] md:text-[24px] xl:text-[32px]'>{title}</h3>
          <p className='text-[15px]  md:text-[16px]'>Technologies : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, similique! Vero quas id assumenda cum?</p>
        </div>
        {/* bullet points */}
        <div className='text-[12px] text-slate-500 md:text-[14px]'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem praesentium blanditiis </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem praesentium blanditiis cumque quas fuga soluta optio accusamus quos eius </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem praesentium blanditiis cumque quas fuga soluta optio accusamus quos eius </li>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard1