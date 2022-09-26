import React from 'react'

const HeroMobile: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center md:-ml-80 sm:-ml-80 base:-ml-96 '>
      <div className='flex flex-row pt-96'>
        <img src='Group20.png' />

        <text className='relative text-7xl  text-text font-bold leading-10 pt-14 pr-96 '>
          Digital
        </text>
      </div>

      <div className='flex flex-col'>
        <text className='relative text-7xl  text-text font-bold leading-10 pt-14 pr-64 '>
          Agency
        </text>

        <text className='relative text-lg leading-8 text-text pt-24 flex items-start justify-start'>
          Full-service design support that growing <br></br> B2B companies need.
          World leading <br></br> agency.
        </text>

        <button className='bg-heroButton pl-8 pr-14 rounded-full py-5 self-start  mt-16 mb-32'>
          asasdasddasd
        </button>
      </div>
      <div className='flex flex-col items-start justify-center -ml-52'>
        <img src='Rectangle 1.png' className='w-80 h-80' />
        <img src='Rectangle 6.png' className='w-40 h-48 mt-14' />
      </div>
    </div>
  )
}
export default HeroMobile
