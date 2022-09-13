import Link from 'next/link'
import React from 'react'
import { useScreenSize } from '../Hook/useScreenSize'
import HeaderMobile from './HeaderMobile'

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
  const { screenControl } = useScreenSize(1024)
  return (
    <>
      {screenControl ? (
        <HeaderMobile />
      ) : (
        <div className='2xl:px-40 lg:px-40  h-65 flex justify-between items-center fixed py-8 flex-row z-50  '>
          <div className=''>
            <img src='Dalio.png' className='2xl:mr-44 ' />
          </div>

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

          <img src='Vector.png' className='2xl:pl-80 lg:pl-40' />
        </div>
      )}
    </>
  )
}
export default Header
