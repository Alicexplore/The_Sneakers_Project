import React from 'react'
import { useState, useEffect } from 'react';

export default function Navbar() {

    let Links = [
        {name:"HOME",link:'/'},
        {name:"ABOUT",link:'/'},
        {name:"BLOG",link:'/'},
        {name:"CONTACT",link:'/'},
    ];

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  return (
    <div
    className={`w-full h-[70px] fixed ${
      scrollPosition > 0 ? 'bg-[#ff3d16] duration-500' : 'bg-transparent'
    }`}
  >
    <div
      className={`md:flex items-center justify-between py-3 md:px-10 px-7 ${
        scrollPosition > 0 ? 'md:shadow-sm' : ''
      }`}
    >
      <div className='font-bold text-2xl cursor-pointer flex items-center font-league text-[#ff3d16]'>
        <span className='text-3xl text-[#ff3d16] mr-1 pt-2'></span>
      </div>
      <div>
        <ul className='md:flex md:items-center mb:pb-0 pb-12 absolute md:static bg-red md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all durration-500  ease-in'>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className={`${
                  scrollPosition > 1 ? 'text-black hover:text-white' : 'text-[#ff3d16]'
                } font-league tracking-widest hover:text-[#ff340c80] duration-500`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className={`bg-transparent mr-6 ml-5 border ${
              scrollPosition > 0
                ? 'border-black text-black'
                : 'border-[#ff3d16] text-[#ff3d16]'
            } font-league py-2 px-6 rounded hover:bg-[#ff3d16] hover:text-[#1b1b1b] duration-500`}
          >
            GET STARTED
          </button>
        </ul>
      </div>
    </div>
  </div>   
  )
}
