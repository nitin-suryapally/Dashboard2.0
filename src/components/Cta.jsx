import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Cta = () => {
  return (
    <div className='sm:flex w-full gap-10 hidden'>
      <div className='w-1 bg-blue-700 h-full'></div>
      <div className='flex flex-col gap-1'>
        <p className='text-lg'>Are you considering a</p>
        <p className='text-xl font-bold'>Housing Advance?</p>
        <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>Limited time reduced intrest</p>
        <button type="button" className="text-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pr-[90px] py-2.5 me-2 mb-2   focus:outline-none w-[100%] ">Learn More <FaAngleRight className='inline-block' /></button>
      </div>
    </div>
  )
}

export default Cta