"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='h-14 bg-green-400 flex justify-between items-center text-white px-4 md:px-6'>
      <Link href="/">
        <div className="logo font-bold text-xl flex items-center gap-1">
          <img height={30} width={30} src="/link2.svg" alt="Link" />
          <p>BitLinks</p>
        </div>
      </Link>
      
      {/* Mobile menu button */}
      <button
        className='md:hidden text-white focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav links */}
      <ul className={`md:flex md:items-center md:space-x-4 absolute md:relative top-0 left-0 w-full md:w-auto bg-green-400 md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'flex flex-col items-center space-y-4 py-6' : 'hidden md:flex'}`}>
        <Link className="text-base" href="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link className="text-base" href="/about" onClick={() => setIsOpen(false)}><li>About</li></Link>
        <Link className="text-base" href="/generate" onClick={() => setIsOpen(false)}><li>Shorten</li></Link>
        <Link className="text-base" href="/contact" onClick={() => setIsOpen(false)}><li>Contact Us</li></Link>
        <li className='flex flex-col md:flex-row gap-3 text-base'>
          <Link href="/generate" onClick={() => setIsOpen(false)}>
            <button className='bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg'>Try Now</button>
          </Link>
          <a href='https://github.com/Shivansh235'>
            <button className='bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-1.5 text-base font-bold rounded-lg'>Github</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;