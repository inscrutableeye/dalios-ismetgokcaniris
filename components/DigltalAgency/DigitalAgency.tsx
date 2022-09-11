import React from 'react';



const DigitalAgency:React.FC = () => {
    
    return (
        <div className='flex flex-row '>

            <div className='flex flex-col'> 
                <text className='text-5xl text-pcolor pl-40 font-semibold leading-10 non-italic'>
                We are a creative <br></br>
digital agency
                </text>

                <text className='text-xs text-pcolor pl-40 pt-10 leading-8 font-normal non-italic'>
                Dalio started with a vision for building an agency to solve the business <br></br> problems of the future, and that requires a different model. <br></br>
We’re not a branding agency that dabbles in tech, and we’re not a <br></br> development shop that leaves you hanging when it’s time  <br></br>
to go to market.
<br></br>
<br></br>
We start with human experience and layer in technology and <br></br>
marketing to deliver truly integrated digital solutions. <br></br>
This unique set of capabilities sets us apart from other agencies  <br></br>
and positions DIG to help you attack your goals.
                </text>

                <button className='bg-heroButton rounded-full ml-40 mr-52 pl-8 pr-12 py-4 mt-16' >
                    asdasdsa
                </button>

            </div>

            <div className=''/>

            <div className='grid gap-4 grid-cols-2 grid-rows-2 translate-x-full  z-50'>
                <img src='agency1.png'/>
                <img src='agency2.png' className='pt-12'/>
                <img src='agency3.png' className='pl-12'/>
                <img src='agency4.png'/>
            </div>



        </div>
    )
}
export default DigitalAgency;