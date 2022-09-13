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

const HeaderMobile: React.FC = () => {
  return (
    <div className=' h-65 flex justify-between items-start fixed py-8  z-50  '>
      <img
        src='Dalio.png'
        className=' base:mr-80 base:pl-10 sm:pl-10 sm:mr-40 md:pl-10 md:mr-96'
      />

      <img src='Vector.png' />
    </div>
  )
}
export default HeaderMobile
