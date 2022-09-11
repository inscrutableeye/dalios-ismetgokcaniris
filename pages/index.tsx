import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DigitalAgency from '../components/DigltalAgency/DigitalAgency'
import Header from '../components/Header/Header'
import Project from '../components/Projects/Project'
import Services from '../components/Services/Services'
import ServicesTitle from '../components/Services/ServicesTitle'
import Solution from '../components/Solution/Solution'
import Stats from '../components/Stats/Stats'

const Home: NextPage = () => {
  return (
    <div className='bg-bg  h-full w-full flex-col overflow-hidden '>
       <Header/>
       
       <div className='flex items-start justify-between  '>
        <img src='Ornament 69.png' className='relative'/>
        
        <div className='flex items-start justify-around pt-40  ' >
          
      <img src='Vector 1.png' className='absolute translate-x-64'  />
      
      <div className='flex flex-col items-center justify-start pr-72'> 
<div className='flex flex-row'>
  <img src='Group 25.png' />
      <text className='relative text-10xl text-text font-bold leading-10 pt-14 pr-96 '>
        Digital 
      </text>

    
      </div>
    
      <text className='relative text-10xl text-text font-bold leading-10 pt-14 pr-32 '>
        Agency 
      </text>

     
      <text className='relative text-2xl text-text pt-24 flex items-start justify-start pr-40'>
      Full-service design support that growing B2B <br></br> companies need. World leading agency.
      </text>
     

      <button className='bg-heroButton pl-8 pr-14 rounded-full py-5 self-start ml-24 mt-16'>asasdasddasd</button>
   
      </div>


      </div>
<div className='  bg-leftHero w-80 h-80  bg-contain blur-3xl shadow-bg-2xl opacity-20 mr-100%  absolute'/>
        <div className='flex items-end justify-end'>
      <div className='  bg-hero w-80 h-80  bg-contain blur-3xl shadow-bg-2xl opacity-10 ml-100%'/>
      </div>
      
      
      </div>
   
    <DigitalAgency/>
    <Stats/>
    <Solution/>
    <ServicesTitle/>
    <Services/>
    <Project/>
    </div>
  )
}

export default Home
