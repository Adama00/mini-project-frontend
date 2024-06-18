import Link from 'next/link'
import React from 'react'
import { IoMdCart } from "react-icons/io";
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <header className='fixed w-full top-0 left-0 bg-primary p-4 md:px-24 z-[5]'>
        <div className="flex justify-between gap-12">
            <Link href={"/"} className='text-white text-lg'>My Shop</Link>
             

            <div>
                <menu className='flex justify-between gap-6 items-center'>
                <div className="flex gap-2  bg-white p-1 rounded-lg">
                    <IoSearch className='pt-1 font-black' size={22} color="gray" />
                    <input type="text" className='outline-none ' placeholder='Search Product'/>
                </div>
                <Link className='text-white text-2xl ' href={"/cart"}>
                    <IoMdCart/>
                 </Link>
                </menu>
            </div>

            <nav className=''>
                <menu className='flex justify-between gap-6'>
                <Link className='text-white text-sm' href={"/"}>Home</Link>
                <Link className='text-white text-sm' href={"/"}>About</Link>
                <Link className='text-white text-sm' href={"/admin"}>Admin</Link>
                </menu>
            </nav>
           

        </div>
    </header>
  )
}

export default Header