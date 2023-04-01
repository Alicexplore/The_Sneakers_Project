import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
   return (
        <div className='h-auto w-full bg-[#1b1b1b]'>  
        <Navbar />
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0'>
                <div className='ml-14 mt-14'>
                    <h1 className='text-1xl sm:text-1xl md:text-5xl lg:text-5xl font-league text-[#ff3d16] tracking-widest opacity-90'>LITTLE STORIES ABOUT</h1>
                    <h1 className='text-7xl sm:text-7xl md:text-13xl lg:text-13xl font-league text-[#ff3d16] '>SNEAKERS</h1>
                    <p className='text-sm sm:text-sm sm:mr-10 md:text-lg md:mr-44 lg:text-lg lg:-mr-2 font-worksans text-[#ff3d16] uppercase font-base text-justify tracking-normal opacity-70'>
                    Welcome to our website, where we explore the fascinating stories behind the sneakers, from classic styles to rare finds. Whether you're a 
                    sneakerhead or simply love the way shoes can capture a moment in time, you'll find something to love on our website.</p>
                    <div className='mt-14 -ml-4'>
                        <Link to="/blog"><button className='text-[#ff3d16] text-10xl hover:text-[#ff340c80] duration-500'><ion-icon name="arrow-forward"></ion-icon></button></Link>
                    </div>
                </div>
                <div className='-mt-32 mb-20'>
                  <img className='invisible sm:invisible md:invisible lg:visible w-full max-h-[850px] object-cover' src="./header/sneakers.svg" alt="vegetables" width={550} />
                </div>
            </div>
        </div>
    )
}

export default Hero
