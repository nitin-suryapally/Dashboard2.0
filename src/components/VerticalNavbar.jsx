import React, { useState } from 'react';
import { PiButterflyFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuMenuSquare } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";

const VerticalNavBar = () => {


    return (
        <nav className="fixed left-0 top-0 h-full sm:flex sm:flex-col bg-white border-r border-gray-300 py-2 px-2 gap-12 hidden w-10 ">
            <a href="/" className="">
                <PiButterflyFill className="w-6 h-6" />
            </a>
            <ul className="flex flex-col gap-4">
                <a href="#" className={`cursor-pointer flex items-center justify-center `} >
                    <IoHomeOutline className={`w-6 h-6 `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center `} >
                    <IoIosSearch className={`w-6 h-6`} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center `} >
                    <CiUser className={`w-6 h-6 `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center `} >
                    <LuMenuSquare className={`w-6 h-6 `} />
                </a>
                <a href="#" className={`cursor-pointer flex items-center justify-center `} >
                    <RiPagesLine className={`w-6 h-6 `} />
                </a>
            </ul>
        </nav>
    );
};

export default VerticalNavBar;
