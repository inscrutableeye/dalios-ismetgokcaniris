import React from 'react'
import ImTwitter from 'react-icons/Im'
const icon = ImTwitter
const Footer: React.FC = () => {
  return (
    <div className='bg-footer flex flex-col '>
      <div className='flex 2xl:flex-row lg:flex-col sm:flex-col base:flex-col items-center justify-start'>
        <div className='flex flex-col bg-heroButton  items-start justify-around mt-11 2xl:ml-20 lg:ml-8 sm:ml-8 rounded-5xl 2xl:mb-32 lg:mb-32 sm:mb-32 2xl:py-20 2xl:pl-14 2xl:pr-64  lg:py-20 lg:pl-14 lg:pr-64  sm:py-8 sm:pl-8 sm:pr-32   base:py-8 base:pl-8 base:pr-32 base:m-4   '>
          <text className='text-footertext text-base leading-10 font-semibold none-italic'>
            Sign Up to Receive Product Updates and More
          </text>

          <input
            type='email'
            placeholder='youremail@gmail.com'
            className=' flex-none  self-stretch order-1 bg-heroButton  border-opacity-30 border-b-2 border-b-footertext text-footertext '
          />
        </div>
        <div className='flex 2xl:flex-row lg:flex-col sm:flex-col  base:flex-col   justify-between items-start lg:pl-44 sm:pl-44 base:translate-x-20 2xl:px-64'>
          <div className='flex flex-col pr-14 lg:pb-10 sm:pb-10 2xl:items-start 2xl:justify-center lg:items-center lg:justify-center sm:items-center sm:justify-center  base:items-center base:justify-center'>
            <text className='text-xl text-text font-semibold leading-5 '>
              Office
            </text>
            <text className='text-base  text-text font-normal leading-8'>
              545, Street 11, Block F California, U.S.A
            </text>
          </div>
          <div className='flex flex-col lg:pb-10 sm:pb-10 2xl:items-start 2xl:justify-center  lg:items-center lg:justify-center sm:items-center sm:justify-center  base:items-center base:justify-center'>
            <text className='text-xl text-text font-semibold leading-5'>
              Contact
            </text>
            <text className='text-base  text-text font-normal leading-8'>
              +92 302 300 3215
            </text>
            <text className='text-base  text-text font-normal leading-8'>
              ouraddress@email.com
            </text>
          </div>
        </div>
      </div>

      <div className='flex flex 2xl:flex-row lg:flex-col sm:flex-col base:flex-col  2xl:items-start 2xl:justify-between pb-16 lg:items-center lg:justify-center sm:items-center sm:justify-center base:items-center base:justify-center'>
        <text>2022. All Rights Reserved</text>
        <text>Terms and Conditions Privacy</text>
        <div className='flex flex-row px-6 lg:p-6 sm:py-6'>
          <img src='twitler.png' className='pr-4' />
          <img src='face.png' className='pr-4' />
          <img src='iconss.png' className='pr-4' />
          <img src='github.png' className='pr-4' />
        </div>
      </div>
    </div>
  )
}
export default Footer
