import Link from 'next/link'
import React from 'react'

const HeaderLinks: Array<{
  name: string
  path: string
}> = [
  {
    name: 'About us',
    path: '/'
  },
  {
    name: 'What We Do',
    path: '/'
  },
  {
    name: 'Our Work',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/'
  },
  {
    name: 'Say Hi',
    path: '/'
  }
]

const Header: React.FC = () => {
  return (
    <div className='2xl:px-40 lg:px-40  h-65 flex justify-between items-center fixed py-8 flex-row z-50  '>
      <div className=''>
        <img src='Dalio.png' className='2xl:pr-44 ' />
      </div>

      <div className=' 2xl:flex lg:flex 2xl:items-center lg:items-center sm:items-center   '>
        {HeaderLinks.map((val, index) => {
          return (
            <a
              href={val.path.toString()}
              key={index}
              className='text-text 2xl:text-lg lg:text-sm 2xl:px-14   lg:px-8  '
            >
              {val.name}
            </a>
          )
        })}
      </div>

      <img src='Vector.png' className='2xl:pl-80 lg:pl-40' />
    </div>
  )
}
export default Header
