"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdOutlineMenu } from "react-icons/md";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname()
    const navLinks = <div className='flex  flex-col lg:flex-row gap-6 text-xl'>
        {/* <Link className='max-w-36' href={'/#about'}>About</Link> */}
        <Link className={`max-w-36 transition-all duration-500 hover:opacity-80 hover:underline underline-offset-4 ${pathname === '/projects' && 'underline opacity-40  '}`} href={'/projects'}>Projects</Link>
        <Link className={`max-w-36 transition-all duration-500 hover:opacity-80 hover:underline underline-offset-4 ${pathname === '#experience' && 'underline opacity-40 underline-offset-4 font-bold'}`} href={'/#experience'}>Experienct</Link>
        <Link className={`max-w-36 transition-all duration-500 hover:opacity-80 hover:underline underline-offset-4 ${pathname === '#contact' && 'underline opacity-40 underline-offset-4 font-bold'}`}  href={'/#contact'}>Contact</Link>
    </div>
    const [open, setOpen] = useState(false)
    return (
        <div className='fixed top-0 left-0 w-full  z-20 bg-white'>
            <div className='flex justify-between commonContainer py-3 lg:py-6'>
                <div>
                    <Link href="/"><h2 className='text-xl lg:text-4xl'>Sayem</h2></Link>
                </div>
                <div className='hidden lg:block'>
                    {navLinks}
                </div>
                <div className='block lg:hidden'>
                    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                        <SheetTrigger><MdOutlineMenu className='text-2xl' /></SheetTrigger>
                        <SheetContent side='left'>
                            <div className='pb-20'>
                                <h2 className='text-2xl lg:text-4xl'>Sayem Saadat</h2>
                            </div>
                            <div onClick={() => setOpen(!open)}>
                                {navLinks}
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}

export default Navbar





/* 
const Navbar = () => {
    const navLinks = <div className='flex flex-col lg:flex-row gap-6 text-xl'>
        <Link className='max-w-36' href={'/#about'}>About</Link>
        <Link className='max-w-36' href={'/projects'}>Projects</Link>
        <Link className='max-w-36' href={'/'}>Experienct</Link>
        <Link className='max-w-36' href={'/'}>Contact</Link>
    </div>


    const [open, setOpen] = useState(false)
    return (
        <div className=' backdrop-blur-md z-10 fixed w-full  top-0 -translate-x-1/2 commonContainer mx-auto '>
            <div className='flex justify-between  lg:px-24 w-full   py-3 lg:py-6'>
                <div>
                    <Link href="/"><h2 className='text-xl lg:text-4xl'>Sayem</h2></Link>
                </div>
                <div className='hidden lg:block'>
                    {navLinks}
                </div>
                <div className='block lg:hidden'>
                    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                        <SheetTrigger><MdOutlineMenu className='text-2xl' /></SheetTrigger>
                        <SheetContent side='left'>
                            <div className='pb-20'>
                                <h2 className='text-2xl lg:text-4xl'>Sayem Saadat</h2>
                            </div>
                            <div onClick={() => setOpen(!open)}>
                                {navLinks}
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}

*/