import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Compare = () => {

    return (
        <div className='flex flex-col w-full gap-4 sm:gap-2 '>
            <div className='fle flex-col gap-1'>
                <p className='text-lg font-bold'>How do I compare my peers?</p>
                <p className='text-sm text-gray-500 dark:text-gray-400 '>These numbers represents current goal achievment </p>
            </div>

            <div className='sm:flex sm:flex-row sm:gap-20 sm:w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <p>Age: <span className='ml-[5px]'>Under 30</span> <FaCaretDown className='inline-block text-gray-500' /></p>
                    <p>Salary: <span className='ml-[5px]'>K 20 - K 30 <FaCaretDown className='inline-block text-gray-500' /></span></p>
                    <p>Gender: <span className='ml-[5px]'>Male <FaCaretDown className='inline-block text-gray-500' /></span></p>

                </div>

                <div className='flex w-full sm:w-[50%] justify-between'>

                    <div className='w-20 h-20 flex flex-col items-center gap-1'>
                        <CircularProgressbar value="78" text='78%' />
                        <p className='text-xs'>Average</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center gap-1'>
                        <CircularProgressbar value="95" text='95%' />
                        <p className='text-xs'>Top</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center gap-1'>
                        <CircularProgressbar value="59" text='59%' />
                        <p className='text-xs'>Me</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Compare
