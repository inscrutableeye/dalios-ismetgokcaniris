import React from 'react'

type ServicesProps = {}

const ServicesTitle: React.FC<ServicesProps> = () => {
  return (
    <div className='flex flex-row items-center justify-between pt-32 pb-10'>
      <text className='text-text 2xl:text-5xl lg:text-5xl sm:text-2xl base:text-2xl base:pl-4 sm:pl-4  font-bold'>
        Service we can <br></br>
        help you
      </text>

      <button className='bg-bg border-2 border-text rounded-full h-14 w-32 2xl:mr-32 lg:mr-32 sm:mr-16 base:mr-8'>
        <text className='text-text py-2.5'>see all</text>
      </button>
    </div>
  )
}
export default ServicesTitle
