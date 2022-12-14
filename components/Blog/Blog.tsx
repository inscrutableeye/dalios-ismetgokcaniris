import React from 'react'
import { useScreenSize } from '../Hook/useScreenSize'
import BlogMobile from './BlogMobile'

const Blog: React.FC = () => {
  const { screenControl } = useScreenSize(1024)
  return (
    <>
      {screenControl ? (
        <BlogMobile />
      ) : (
        <div className='flex flex-col'>
          <text>Blog from insights</text>

          <div className=' lg:grid base:flex lg:grid-cols-2 lg:grid-rows-1 flex-col lg:flex lg:gap-2'>
            <img src='Rectangle 18.png' className='pl-10' />
            <img src='Rectangle 19.png' />
            <div className='bg-text w-20 flex items-center justify-center rounded-full ml-10'>
              <text>Web</text>
            </div>
            <div className='bg-text w-20 flex items-center justify-center rounded-full'>
              {' '}
              <text>Web</text>
            </div>
            <text className='ml-10 text-text text-3xl'>
              A small business is only as good as its tools and it is totally
              true.
            </text>
            <text className=' text-text text-3xl'>
              A small business is only as good as its tools and it is totally
              true.
            </text>

            <button className='border-text flex  items-center justify-center ml-10 border-2 rounded-full  w-40 h-14'>
              <text className=' text-text text-base'>read more</text>
            </button>
            <button className='border-text flex items-center justify-center  border-2 w-20 rounded-full  w-40 h-14'>
              <text className=' text-text text-base'>read more</text>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default Blog
