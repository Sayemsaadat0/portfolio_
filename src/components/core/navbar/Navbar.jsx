"use client"
import React, { useState } from 'react'
import SocialLinks from '../SocialLinks'
import { MdMenu } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import Link from 'next/link';









const NavMenuList = () => {
    const navMenu = [
        {
            name: 'Portfolio',
            url: '/projects'
        },
        {
            name: 'Contact',
            url: '/'
        }
    ]
    return <div className="flex flex-col md:flex-row gap-4">
        {navMenu.map((menuItem, index) => (
            <span className="text-[14px] md:text-[16px] md:font-medium hover:underline underline-offset-4 transition-all" key={index}>
                <Link href={menuItem.url}>{menuItem.name}</Link>
            </span>
        ))}
    </div>
}


export const NavAsidebar = () => {
    const [open, setOpen] = useState(false)
    return <div>
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                <MdMenu />
            </div>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left">Sayem</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-between  h-full pt-10">
                    <NavMenuList />
                    <div className="mb-6">
                        <SocialLinks />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    </div>
}



const Navbar = () => {
    return (
        <div className='w-full bg-white fixed top-0 left-0 z-20'>
            <div className='commonContainer border py-1 md:py-3'>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:block'>
                        <SocialLinks />
                    </div>
                    <Link href={'/'}>
                        <h3 className='font-semibold text-[24px] md:text-[28px] xl:text-[32px] '>Sayem</h3>
                    </Link>
                    <div className='hidden md:block'>
                        <NavMenuList />
                    </div>
                    <div className='block md:hidden'>
                        <NavAsidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar