import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog/Blog'
import Clients from '../components/Clients/Clients'
import DigitalAgency from '../components/DigltalAgency/DigitalAgency'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Project from '../components/Projects/Project'
import Services from '../components/Services/Services'
import ServicesTitle from '../components/Services/ServicesTitle'
import Solution from '../components/Solution/Solution'
import Stats from '../components/Stats/Stats'

const Home: NextPage = () => {
  return (
    <div className='bg-bg  h-full   flex-col overflow-hidden '>
      <Header />

      <div className='flex items-start justify-between  '>
        <img src='Ornament 69.png' className='relative' />

        <div className='flex 2xl:items-start lg:items-start justify-around pt-40 lg:-translate-x-96 '>
          <img src='Vector 1.png' className='absolute  translate-x-64  ' />

          <div className='flex flex-col items-center 2xl:justify-start lg:justify-around pr-72'>
            <div className='flex flex-row'>
              <img src='Group 25.png' />

              <text className='relative text-10xl  text-text font-bold leading-10 pt-14 pr-96 '>
                Digital
              </text>
            </div>

            <div className='flex flex-row justify-between'>
              <img
                src='Rectangle 6.png'
                className='z-50  h-3/4 -ml-20 mt-80 pr-14'
              />
              <div className='flex flex-col'>
                <text className='relative text-10xl text-text font-bold leading-10 pt-14 pr-32 '>
                  Agency
                </text>

                <text className='relative text-2xl text-text pt-24 flex items-start justify-start pr-40'>
                  Full-service design support that growing B2B <br></br>{' '}
                  companies need. World leading agency.
                </text>

                <button className='bg-heroButton pl-8 pr-14 rounded-full py-5 self-start ml-24 mt-16 mb-96'>
                  asasdasddasd
                </button>
              </div>
              <img src='Rectangle 1.png' className='z-50 -ml-24 w-80 h-3/4' />
            </div>
          </div>
        </div>
        <div className='  bg-leftHero w-80 h-80  bg-contain blur-3xl shadow-bg-2xl opacity-20 mr-100%  absolute' />
        <div className='flex 2xl:items-end 2xl:justify-end'>
          <div className='  bg-hero w-96 h-96 bg-contain blur-3xl shadow-bg-2xl opacity-10 lg:-translate-x-full lg:-ml-96 ' />
        </div>
      </div>

      <DigitalAgency />
      <Stats />
      <Solution />
      <ServicesTitle />
      <Services />
      <Project />
      <Clients />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
