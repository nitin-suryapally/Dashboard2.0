import React from 'react'

const Goal = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-12 w-full'>
            <div className='flex flex-col gap-2'>
                <p className='text-4xl sm:text-2xl font-bold'>$300,000</p>
                <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>My Goal</p>
                <hr className='bg-blue-500 h-[2px] w-[90%] ml-3 border-none' />

            </div>
            <div className='flex justify-between sm:hidden'>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold'>59%</p>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>Goal Acheived</p>
                    <hr className='bg-blue-500 h-[2px] w-[90%] ml-3 border-none' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold'>K 300</p>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>EST. Monthly Income</p>
                    <hr className='bg-blue-500 h-[2px] w-[90%] ml-3 border-none' />
                </div>
            </div>
            <div className='hidden sm:flex sm:flex-row sm:gap-10'>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold'>59%</p>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>Goal Acheived</p>
                    <hr className='bg-blue-500 h-[2px] w-[90%] ml-3 border-none' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold'>K 300</p>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2'>EST. Monthly Income</p>
                    <hr className='bg-blue-500 h-[2px] w-[90%] ml-3 border-none' />
                </div>
            </div>


        </div>
    )
}

export default Goal
