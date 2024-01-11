import React from 'react'
import ProfileCard from '../components/ProfileCard'
import PricingCard from '../components/PricingCard'
import RecentTransactions from '../components/RecentTransactions'

const Page1 = () => {
  return (
    <div className='flex flex-col items-start w-full gap-16 sm:gap-12  sm:w-1/4 '>
      <ProfileCard />
      <PricingCard />
      <RecentTransactions />
    </div>
  )
}

export default Page1
