import React from 'react'
import Link  from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-14 bg-green-400 flex justify-between items-center text-white px-4'>
        <Link href ={"/"}> <div className="logo font-bold text-xl flex gap-1">
          <img height={30} width={30} src="/link2.svg" alt="Link" />
       <p>BitLinks</p> 
          
        </div></Link>
          
        <ul className='flex space-x-4 justify-center items-center'>
            <Link className="text-base" href ={"/"}><li>Home</li></Link>
            <Link className="text-base" href ={"/about"}><li>About</li></Link>
            <Link className="text-base" href ={"/generate"}><li>Shorten</li></Link>
            <Link className="text-base" href ={"/contact"}><li>Contact Us</li></Link>
           <li className='flex gap-3 text-base'>
              <Link href={"/generate"}><button className='bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg'>Try Now</button></Link>
              <a href='https://github.com/Shivansh235'><button className='bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg'>Github</button></a>
           </li>
        </ul>
    </nav>
  )
}

export default Navbar
