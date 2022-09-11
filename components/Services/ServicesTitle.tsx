import React from 'react';

type ServicesProps = {
    
};

const ServicesTitle:React.FC<ServicesProps> = () => {
    
    return (
        <div className='flex flex-row items-center justify-between pt-32 pb-10'>
<text className='text-text text-5xl font-bold'>
Service we can <br></br>
help  you
</text>

<button className='bg-bg border-2 border-text rounded-full h-14 w-32 mr-32'>
    <text className='text-text py-2.5'>see all</text>
</button>

        </div>
    )
}
export default ServicesTitle;