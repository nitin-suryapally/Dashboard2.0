import React from 'react'

const Contributions = () => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <p className='text-lg font-bold text-gray-700'>Contributions Overtime</p>
            <div className='flex justify-between items-center pr-10'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <div className="rounded-full bg-blue-800 w-6 sm:w-3 sm:h2 h-3"> </div>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2 sm:pb-0'>Employer</p>
                    <p className='text-2xl sm:text-sm font-bold'>$73,500</p>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 '>
                    <div className="rounded-full bg-blue-800 w-6 sm:w-3 sm:h2 h-3"> </div>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2 sm:pb-0'>Employee</p>
                    <p className='text-2xl sm:text-sm font-bold'>$52,500</p>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <div className="rounded-full bg-blue-800 w-6 sm:w-3 sm:h2 h-3"> </div>
                    <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400 pb-2 sm:pb-0'>Total Intrest</p>
                    <p className='text-2xl sm:text-sm font-bold'>$244,313</p>
                </div>
            </div>
        </div>
    )
}

export default Contributions
