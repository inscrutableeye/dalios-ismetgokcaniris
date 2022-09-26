import React from 'react'

const Solution: React.FC = () => {
  return (
    <div className='flex 2xl:flex-row lg:flex-row sm:flex-col-reverse base:flex-col-reverse pt-32'>
      <div className='bg-solback1 2xl:w-2/5 lg:w-2/5 sm:w-full  flex 2xl:pt-24 lg:pt-24  2xl:items-center 2xl:justify-around lg:items-center lg:justify-around  '>
        <img
          src='solimg.png'
          className='z-30 2xl:ml-96 lg:ml-40 md:ml-16 sm:px-7 base:px-7 sm:-translate-y-24  base:-translate-y-24  '
        />
      </div>
      <div className='2xl:bg-solback2  lg:bg-solback2  2xl:w-3/5 lg:w-3/5  sm:flex sm:items-center sm:justify-center base:flex base:items-center base:justify-center pb-32'>
        <div className='flex flex-col'>
          <text className='text-text text-5xl flex items-center justify-around pt-40 font-bold leading-10 base:pl-4'>
            Our Solution Approach
          </text>

          <div className='flex flex-col items-center p-4'>
            <div className='flex flex-row items-center justify-center pt-12 mr-10'>
              <img src='ok.png' />
              <text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
                Data Analysis with problem factor
              </text>
            </div>
            <text className='text-soldesc text-left text-base font-normal leading-8'>
              Delivering the spatial expertise of the largest, most <br></br>{' '}
              sophisticated performance marketing agencies, while <br></br>{' '}
              providing intimate, boutique-like support.
            </text>
            <div className='flex flex-row items-center justify-center pt-12 mr-20'>
              <img src='ok.png' />
              <text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
                Functionality solution for users
              </text>
            </div>
            <text className='text-soldesc text-left text-base font-normal leading-8'>
              Delivering the spatial expertise of the largest, most <br></br>{' '}
              sophisticated performance marketing agencies, while <br></br>{' '}
              providing intimate, boutique-like support.
            </text>

            <div className='flex flex-row items-center justify-center pt-12 mr-32'>
              <img src='ok.png' />
              <text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
                Latest technology enabled
              </text>
            </div>
            <text className='text-soldesc text-left text-base font-normal leading-8'>
              Delivering the spatial expertise of the largest, most <br></br>{' '}
              sophisticated performance marketing agencies, while <br></br>{' '}
              providing intimate, boutique-like support.
            </text>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Solution
