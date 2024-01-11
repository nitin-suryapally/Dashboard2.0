import React from 'react'
import Header2 from '../components/Header2'
import Goal from '../components/Goal'
import Contributions from '../components/Contributions'
import StackedBarChart from '../components/Charts'
import Compare from '../components/Compare'
const Page2 = () => {
  return (
    <div className='flex flex-col items-start w-full  gap-16 sm:gap-8  sm:w-2/4'>
      <Header2 />
      <Goal />
      <Contributions />
      <div className='w-full h-full sm:w-[85%] sm:h-[95%]'>
        <StackedBarChart />
      </div>
      <Compare />
    </div>
  )
}

export default Page2
