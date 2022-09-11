import Link from 'next/link';
import React from 'react';

const HeaderLinks : Array<{
    name:string
    path:string
}> = [

    {
        name:"About us",
        path: "/"
    },
    {
        name: "What We Do",
        path:"/"

    },
    {
        name:"Our Work",
        path:"/"
    },
    {
        name:"Blog",
        path:"/"
    },
    {

        name:"Say Hi",
        path:"/"
    }
    
]


const Header:React.FC = () => {
    
    return(
    
        <div className='px-40 h-65 flex justify-around items-center fixed py-8 flex-row z-50  '>
            
<div className='w-auto'>
    <img src='Dalio.png' className='pr-44 '/>
    
</div>



<div className=' flex items-center  ' >
{HeaderLinks.map((val,index)=> {
    return (
<a href={val.path.toString()} key={index} className="text-text text-lg px-14  " >
 {val.name}
</a>
  ) })}
</div>

<img src='Vector.png' className='pl-80'/>
        </div>
        
        
    )
}
export default Header;