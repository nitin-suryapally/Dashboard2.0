import React from 'react'
import Stratagy from "../components/Stratagy"
import Cta from '../components/Cta'

const Page3 = () => {
  return (
    <div className='flex flex-col items-start w-full gap-16 sm:w-1/4 mb-10'>
      <Stratagy />
      <Cta />
    </div>
  )
}

export default Page3
