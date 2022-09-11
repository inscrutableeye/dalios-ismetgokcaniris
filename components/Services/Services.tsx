import React from 'react';


const Services:React.FC = () => {
    
    return(
        <div className='grid gap-4 grid-cols-2 grid-rows-2 flex items-center justify-center mb-24'>
<span className='bg-servicesback rounded-tl-3xl flex items-start justify-start ml-32  '>
    <div className='flex flex-col'>
        <img src='content.png' className='w-14 h-14 ml-10 mt-24'/>
        <text className='text-text text-3xl font-semibold leading-9 pl-9 py-9'>Content Writing</text>
        <text className='text-text text-base font-normal leading-8 pl-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <br></br> consequat nunc id purus pretium sagittis. Nulla <br></br> 
        ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam <br></br>dignissim duis purus. </text>
         <button className=' border-2 border-text rounded-full h-14 w-32 mr-32 ml-9 mt-10 mb-20'>  <text className='text-text py-2.5'>Read More</text></button>
    </div>
</span>
<span className='bg-servicesback rounded-tr-3xl flex items-start justify-start mr-32 translate-y-16 '>
    <div className='flex flex-col'>
        <img src='research.png' className='w-14 h-14 ml-10 mt-24'/>
        <text className='text-text text-3xl font-semibold leading-9 pl-9 py-9'>UX Research</text>
        <text  className='text-text text-base font-normal leading-8 pl-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <br></br> consequat nunc id purus pretium sagittis. Nulla <br></br> 
        ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam <br></br>dignissim duis purus. </text>
        <button className=' border-2 border-text rounded-full h-14 w-32 mr-32 ml-9 mt-10 mb-20'>  <text className='text-text py-2.5'>Read More</text></button>
    </div>
</span>
<span className='bg-servicesback rounded-bl-3xl flex items-start justify-start ml-32 '>
    <div className='flex flex-col'>
        <img src='brand.png' className='w-14 h-14 ml-10 mt-24'/>
        <text className='text-text text-3xl font-semibold leading-9 pl-9 py-9'>Branding</text>
        <text className='text-text text-base font-normal leading-8 pl-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <br></br> consequat nunc id purus pretium sagittis. Nulla <br></br> 
        ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam <br></br>dignissim duis purus. </text>
        <button className=' border-2 border-text rounded-full h-14 w-32 mr-32 ml-9 mt-10 mb-20'>  <text className='text-text py-2.5'>Read More</text></button>
    </div>
</span>
<span className='bg-servicesback rounded-br-3xl flex items-start justify-start mr-32  translate-y-16 '>
    <div className='flex flex-col'>
        <img src='web.png'className='w-14 h-14 ml-10 mt-24'/>
        <text className='text-text text-3xl font-semibold leading-9 pl-9 py-9'>Web Design</text>
        <text className='text-text text-base font-normal leading-8 pl-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <br></br> consequat nunc id purus pretium sagittis. Nulla <br></br> 
        ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam <br></br>dignissim duis purus. </text>
        <button className=' border-2 border-text rounded-full h-14 w-32 mr-32 ml-9 mt-10 mb-20'>  <text className='text-text py-2.5'>Read More</text></button>
    </div>
</span>
        </div>
    )
}
export default Services;