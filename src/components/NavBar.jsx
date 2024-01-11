import React, { useState } from 'react'
import { PiButterflyFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuMenuSquare } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";


const NavBar = () => {
    const [isActive, setIsActive] = useState('home')
    return (


        <nav className=" fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-between items-center py-2 px-4 h-14 sm:hidden ">
            <a href="/" className="p-2 hidden sm:block">
                <PiButterflyFill className="w-8 h-8" />
            </a>


            <ul className="h-full w-full gap-8 flex justify-between mx-2">

                <a href="#" className={`cursor-pointer flex items-center justify-center ${isActive === 'home' ? 'bg-blue-700 rounded-lg' : ''}`} onClick={() => setIsActive("home")}>
                    <IoHomeOutline className={`w-10 h-10 ${isActive === 'home' ? 'text-white' : ''} `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center ${isActive === 'search' ? 'bg-blue-700 rounded-lg' : ''}`} onClick={() => setIsActive("search")}>
                    <IoIosSearch className={`w-10 h-10 ${isActive === 'search' ? 'text-white' : ''} `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center ${isActive === 'user' ? 'bg-blue-700 rounded-lg' : ''}`} onClick={() => setIsActive("user")}>
                    <CiUser className={`w-10 h-10 ${isActive === 'user' ? 'text-white' : ''} `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center ${isActive === 'menu' ? 'bg-blue-700 rounded-lg' : ''}`} onClick={() => setIsActive("menu")}>
                    <LuMenuSquare className={`w-10 h-10 ${isActive === 'menu' ? 'text-white' : ''} `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center ${isActive === 'pages' ? 'bg-blue-700 rounded-lg' : ''}`} onClick={() => setIsActive("pages")}>
                    <RiPagesLine className={`w-10 h-10 ${isActive === 'pages' ? 'text-white' : ''} `} />
                </a>

            </ul>
        </nav>
    )
}

export default NavBar
