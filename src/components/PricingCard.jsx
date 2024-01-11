import React from 'react'

const PricingCard = () => {
    return (
        <div className='flex flex-col gap-4 sm:gap-2 items-left w-full'>
            <div>
                <h2 className='text-2xl sm:text-xl font-bold'>Today</h2>
                <p className='p-1 text-5xl sm:text-3xl font-bold'>$18,892</p>
                <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400'>account balance</p>
            </div>
            <div className='flex flex-col gap-2 sm:gap-1  '>
                <div className='flex sm:flex-col gap-8 sm:gap-6 '>
                    <div>
                        <p className='p-1 text-2xl sm:text-xl font-bold'>$4,000</p>
                        <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400'>Year-To-Date</p>
                    </div>

                    <div>
                        <p className='p-1 text-2xl sm:text-xl font-bold'>$1,892</p>
                        <p className='text-md sm:text-sm text-gray-500 dark:text-gray-400'>Total Intrest</p>
                    </div>

                </div>

                <div className='pt-4'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[40%] ">I want to..</button>
                </div>

            </div>

        </div>
    )
}

export default PricingCard
