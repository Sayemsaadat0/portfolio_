import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className='flex gap-x-4'>
      <div>
        <Link href={'/'}><FaFacebookSquare className='text-3xl ' /></Link>
      </div>
      <div>
        <Link href={'/'}><FaFacebookSquare className='text-3xl ' /></Link>
      </div>
      <div>
        <Link href={'/'}><FaFacebookSquare className='text-3xl ' /></Link>
      </div>
    </div>
  )
}

export default SocialLinks