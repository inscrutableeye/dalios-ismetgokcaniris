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
          <img src='Vector 1.png' className='absolute  lg:translate-x-64  2xl:translate-x-96 sm:w-40 lg:6/12 2xl:w-7/12 ' />

          <div className='flex flex-col items-center 2xl:justify-start lg:justify-around lg:pr-72 2xl:pl-96'>
            <div className='flex flex-row sm:items-center sm:justify-center 2xl:pr-12'>
              <img src='Group 25.png' />

              <text className='relative lg:text-10xl 2xl:text-10xl sm:text-7xl text-text font-bold leading-10 pt-14 pr-96 '>
                Digital
              </text>
            </div>

         
          
              <div className='flex flex-col'>
                <text className='relative lg:text-10xl 2xl:text-10xl sm:text-7xl text-text font-bold leading-10 pt-14 pr-32 '>
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
       
          </div>
        </div>
        <div className='  bg-leftHero w-80 h-80  bg-contain blur-3xl shadow-bg-2xl opacity-20 mr-100%  absolute' />
        <div className='flex 2xl:items-end 2xl:justify-end'>
          <div className='  bg-hero w-96 h-96 bg-contain blur-3xl shadow-bg-2xl opacity-10 lg:-translate-x-full lg:-ml-96 2xl:-ml-32  ' />
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
