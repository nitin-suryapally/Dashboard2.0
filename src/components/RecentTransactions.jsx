import React from 'react'

const RecentTransactions = () => {
    return (
        <div className='flex flex-col gap-4 sm:gap-2 mt-4 sm:mt-2'>
            <p className='text-lg sm:text-md font-bold'>Recent Transactions</p>
            <div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>20-07-01</p>
                <p className='p-1 text-lg sm:text-md font-bold'>Withdraw transfer bank XX-ll....</p>
            </div>
        </div>
    )
}

export default RecentTransactions
