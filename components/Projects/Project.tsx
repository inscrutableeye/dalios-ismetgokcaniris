import React, { useState } from 'react'
import { useScreenSize } from '../Hook/useScreenSize'
import ProjectMobile from './ProjectMobile'

const Projects: Array<{
  id: number
  title: string
  image: any
  image2: any
  imagetitle: string
  desc: string
  imagetitle2: string
  desc2: string
}> = [
  {
    id: 0,
    title: 'All',
    image: 'rectangle 12.png',
    image2: 'rectangle 13.png',
    imagetitle: 'Talent.com - Logo, Full Redesign and Branding',
    imagetitle2: 'Bonfire - Landing Page Design Webby Awards Nomination',
    desc:
      'Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were able to create the most streamlined',
    desc2:
      'Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.'
  },
  {
    id: 1,
    title: 'UI/UX',
    image: 'rectangle 12.png',
    image2: 'rectangle 13.png',
    imagetitle: 'Talent.com - Logo, Full Redesign and Branding',
    imagetitle2: 'Bonfire - Landing Page Design Webby Awards Nomination',
    desc:
      'Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were able to create the most streamlined',
    desc2:
      'Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.'
  },
  {
    id: 2,
    title: 'Web Design',
    image: 'rectangle 12.png',
    image2: 'rectangle 13.png',
    imagetitle: 'Talent.com - Logo, Full Redesign and Branding',
    imagetitle2: 'Bonfire - Landing Page Design Webby Awards Nomination',
    desc:
      'Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were able to create the most streamlined',
    desc2:
      'Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.'
  },
  {
    id: 3,
    title: 'Branding',
    image: 'rectangle 12.png',
    image2: 'rectangle 13.png',
    imagetitle: 'Talent.com - Logo, Full Redesign and Branding',
    imagetitle2: 'Bonfire - Landing Page Design Webby Awards Nomination',
    desc:
      'Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were able to create the most streamlined',
    desc2:
      'Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.'
  },
  {
    id: 4,
    title: 'Interaction',
    image: 'rectangle 12.png',
    image2: 'rectangle 13.png',
    imagetitle: 'Talent.com - Logo, Full Redesign and Branding',
    imagetitle2: 'Bonfire - Landing Page Design Webby Awards Nomination',
    desc:
      'Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were able to create the most streamlined',
    desc2:
      'Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.'
  }
]

const Project: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { screenControl } = useScreenSize(1024)
  return (
    <>
      {screenControl ? (
        <ProjectMobile />
      ) : (
        <div className='flex flex-col items-center  justify-center pt-32 '>
          <text className='text-5xl text-text leading-10 font-bold '>
            Our latest Projects
          </text>
          <div className='flex flex-row items-center  justify-center pt-6'>
            {Projects.map((val: any, index: any) => {
              return (
                <text
                  onClick={() => setSelectedIndex(index)}
                  className={
                    selectedIndex === index
                      ? 'text-select px-20 text-base font-medium leading-7'
                      : 'text-text px-20 text-base font-medium leading-7'
                  }
                >
                  {val.title}
                </text>
              )
            })}
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row mt-10 items-center justify-center'>
              <img src={Projects[selectedIndex].image} className={'mr-6'} />
              <img src={Projects[selectedIndex].image2} />
            </div>

            <div className='flex flex-row items-start justify-around '>
              <text className='text-base text-text font-bold leading-9 pt-8 2xl:pl-56 lg:pl-30 mr-40 '>
                {Projects[selectedIndex].imagetitle}
              </text>
              <text className='text-base text-text font-bold leading-9 pt-8 2xl:pr-80 mr-24 '>
                {Projects[selectedIndex].imagetitle2}
              </text>
            </div>
            <div className='flex flex-row items-start justify-evenly -ml-16'>
              <text className='text-base text-pcolor leading-7 font-normal 2xl:pl-96 lg:pl-24  '>
                {Projects[selectedIndex].desc}
              </text>
              <text className='text-base text-pcolor leading-7 font-normal 2xl:pr-96 ml-12 pr-4'>
                {Projects[selectedIndex].desc2}
              </text>
            </div>
          </div>
          <button className='bg-heroButton pl-11 py-5 mt-16 rounded-full pr-20 self-center'>
            Load More
          </button>
        </div>
      )}
    </>
  )
}
export default Project
