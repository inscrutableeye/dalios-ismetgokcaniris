import React from 'react'

const Stats: React.FC = () => {
  return (
    <div className='flex 2xl:flex-row lg:flex-row sm:flex-col  items-center justify-around 2xl:pt-36 lg:pt-36 sm:pt-32 px-28 '>
      <div className='flex flex-col items-center'>
        <text className='text-5xl text-text'>4.8K</text>
        <text className='text-xl text-text pb-16'>Job Completed</text>
      </div>
      <div className='flex flex-col items-center'>
        <text className='text-5xl text-text'>12+</text>
        <text className='text-xl text-text pb-16'>Industry Experience</text>
      </div>
      <div className='flex flex-col items-center'>
        <text className='text-5xl text-text'>2.5k+</text>
        <text className='text-xl text-text pb-16'>World wide clients</text>
      </div>
      <div className='flex flex-col items-center'>
        <text className='text-5xl text-text'>120+</text>
        <text className='text-xl text-text '>Won Awards</text>
      </div>
    </div>
  )
}
export default Stats
