import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { FaAngleRight } from "react-icons/fa";

const Stratagy = () => {
  return (
    <div className='flex flex-col w-full gap-4'>
      <p className='text-xl font-bold'>Retirement stratagy</p>
      <div className='flex flex-col gap-2'>
        <p className='text-md font-bold'>Employee Contribution</p>
        <div className='flex justify-between w-full'>
          <div className='w-[60%]'>
            <ProgressBar completed={12} bgColor='#87CEEB' />
          </div>
          <p className='text-md font-bold'>12%</p>
        </div>
        <p className='text-md font-bold'>Restricted age</p>
        <div className='flex justify-between w-full'>
          <div className='w-[60%]'>
            <ProgressBar completed={65} bgColor='#87CEEB' />
          </div>
          <p className='text-md font-bold'>65%</p>
        </div>
        <div className='flex justify-between w-full'>
          <p className='text-md font-bold'>Employer Contribution</p>
          <p className='text-md font-bold'>9.4%</p>
        </div>
        <div className='flex justify-between w-full'>
          <p className='text-md font-bold'>Intrest Rate</p>
          <p className='text-md font-bold'>5%</p>
        </div>
      </div>

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full ">Update</button>

      <button type="button" className="text-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none w-[100%] ">View Help Doc <FaAngleRight className='inline-block' /></button>
    </div>
  )
}

export default Stratagy
