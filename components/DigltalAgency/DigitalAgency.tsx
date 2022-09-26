import React from 'react'

const DigitalAgency: React.FC = () => {
  return (
    <div
      className='flex 2xl:flex-row lg:flex-row  sm:flex-col base:flex-col 2xl:items-start 2xl:justify-start sm:items-center 
    sm:justify-center base:items-center base:justify-center'
    >
      <div className='flex flex-col items-center '>
        <text
          className='2xl:text-5xl lg:text-5xl md:text-5xl base:text-base text-pcolor 2xl:pl-40 lg:pl-40 2xl:text-start lg:text-start md:text-center sm:text-center base:text-center  base:pl-10 font-semibold 2xl:leading-10
        lg:leading-10 base:leading-12 non-italic mt-14 '
        >
          We are a creative <br></br>
          digital agency
        </text>

        <text
          className='text-xs text-pcolor 2xl:pl-40 2xl:pr-24 lg:pl-40 lg:pr-24 2xl:text-start pr-4 lg:text-start md:text-center sm:text-center base:text-center
         base:pl-4 pt-10 leading-8 font-normal non-italic'
        >
          Dalio started with a vision for building an agency to solve the
          <br></br>
          business problems of the future, and that requires a <br></br>{' '}
          different model. We’re not a branding agency that dabbles in tech,{' '}
          <br></br> and we’re not a development shop that leaves you hanging
          when <br></br> it’s time to go to market.
          <br></br>
          We start with human experience and layer in technology and <br></br>
          marketing to deliver truly integrated digital solutions. <br></br>
          This unique set of capabilities sets us apart from other agencies{' '}
          <br></br>
          and positions DIG to help you attack your goals.
        </text>

        <button
          className='bg-heroButton pl-8 rounded-full py-5 2xl:self-start lg:self-start md:self-center sm:self-center base:self-center
         2xl:ml-40 lg:ml-40 md:ml-4 mt-16 mb-96  '
        >
          <div className='flex flex-row items-center justify-between'>
            <text className='text-lg leading-6 font-medium '>Contact us</text>
            <img src='btnarrow.png' className='pl-8 flex space-end pr-6' />
          </div>
        </button>
      </div>

      <div className='2xl:grid lg:grid sm:grid base:grid 2xl:gap-4  lg:gap-4 sm:gap-2 base:gap-2 base:p-10 grid-cols-2 grid-rows-2 2xl:-translate-y-0 lg:-translate-y-0 md:-translate-y-64 sm:-translate-y-0 base:-translate-y-64 lg:translate-x-64  sm:pt-4 z-50'>
        <img src='agency1.png' />
        <img
          src='agency2.png'
          className='2lx:pt-12 base:pt-12 2xl:pl-12 base:pl-12 base:-translate-x-12'
        />
        <img
          src='agency3.png'
          className='2xl:pl-12 base:pl-12 2lx:pt-12 base:pt-12 base:-translate-y-12'
        />
        <img src='agency4.png' />
      </div>
    </div>
  )
}
export default DigitalAgency
