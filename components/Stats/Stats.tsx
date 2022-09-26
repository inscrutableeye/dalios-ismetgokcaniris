import React from 'react'

const Stats: React.FC = () => {
  return (
    <div className='flex 2xl:flex-row lg:flex-row sm:flex-col  base:flex-col 2xl:items-start lg:items-start sm:items-center base:items-center justify-between  2xl:px-28 lg:px-28 base:px-10 '>
      <div className='flex flex-col items-center justify-center'>
        <text className='text-5xl text-text'>4.8K</text>
        <text className='text-xl text-text pb-16'>Job Completed</text>
      </div>
      <div className='flex flex-col items-center  justify-center'>
        <text className='text-5xl text-text'>12+</text>
        <text className='text-xl text-text pb-16'>Industry Experience</text>
      </div>
      <div className='flex flex-col items-center  justify-center'>
        <text className='text-5xl text-text'>2.5k+</text>
        <text className='text-xl text-text pb-16'>World wide clients</text>
      </div>
      <div className='flex flex-col items-center  justify-center'>
        <text className='text-5xl text-text'>120+</text>
        <text className='text-xl text-text '>Won Awards</text>
      </div>
    </div>
  )
}
export default Stats
