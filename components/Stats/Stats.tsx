import React from 'react';



const Stats:React.FC = () => {
    
    return (
        <div className='flex flex-row items-center justify-around pt-36 px-28 '>
            <div className='flex flex-col items-center'>
<text  className='text-5xl text-text'>4.8K</text>
<text className='text-xl text-text '>Job Completed</text>
            </div>
            <div className='flex flex-col items-center'>
            <text className='text-5xl text-text'>12+</text>
            <text className='text-xl text-text '>Industry Experience</text>
                </div>
                <div className='flex flex-col items-center'>
                <text  className='text-5xl text-text'>2.5k+</text>
                <text className='text-xl text-text '>World wide clients</text>
                </div>
                <div className='flex flex-col items-center'>
                <text  className='text-5xl text-text'>120+</text>
                <text className='text-xl text-text '>Won Awards</text>
                </div>

        </div>
    )
}
export default Stats;