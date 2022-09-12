import React from 'react'

const Blog: React.FC = () => {
  return (
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
        <text className='ml-10'>
          A small business is only as good as its tools and it is totally true.
        </text>
        <text>
          A small business is only as good as its tools and it is totally true.
        </text>

        <button className='border-text flex self-start ml-10'>read more</button>
        <button className='border-text flex self-start'>read more</button>
      </div>
    </div>
  )
}
export default Blog
