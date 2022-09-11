import React from 'react';



const Solution:React.FC = () => {
    
    return (
        <div className='flex flex-row pt-32'>
            <div className='bg-solback1 w-2/5  flex pt-24 items-center justify-around'>
                <img src='solimg.png' className='z-30 ml-96' />
            </div>
            <div className='bg-solback2 w-3/5 pb-32'>
             <div className='flex flex-col'>

                <text className='text-text text-5xl flex items-center justify-around pt-40 font-bold leading-10'>
                Our Solution Approach
                </text>

                <div className='flex flex-col items-center'>

                    <div className='flex flex-row items-center justify-center pt-12 mr-10'>
<img src='ok.png'/>
<text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
Data Analysis with problem factor
</text>
                    </div>
                    <text className='text-soldesc text-left text-base font-normal leading-8'>
                    Delivering the spatial expertise of the largest, most <br></br> sophisticated performance marketing agencies, while <br></br> providing intimate, boutique-like support.
                    </text>
                    <div className='flex flex-row items-center justify-center pt-12 mr-20'>
<img src='ok.png'/>
<text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
Functionality solution for users
</text>
                    </div>
                    <text className='text-soldesc text-left text-base font-normal leading-8'>
                    Delivering the spatial expertise of the largest, most <br></br> sophisticated performance marketing agencies, while <br></br> providing intimate, boutique-like support.
                    </text>

                    <div className='flex flex-row items-center justify-center pt-12 mr-32'>
<img src='ok.png'/>
<text className='text-text text-2xl leading-7 font-bold text-left pl-6'>
Latest technology enabled
</text>
                    </div>
                    <text className='text-soldesc text-left text-base font-normal leading-8'>
                    Delivering the spatial expertise of the largest, most <br></br> sophisticated performance marketing agencies, while <br></br> providing intimate, boutique-like support.
                    </text>
                </div>

             </div>
            </div>
        </div>
    )
}
export default Solution;