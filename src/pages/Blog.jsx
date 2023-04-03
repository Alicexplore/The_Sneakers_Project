import React from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className='h-auto w-full bg-[#1b1b1b]'>
        <div className='grid grid-cols-1 place-items-center py-14 '>
            <h1 className='font-league text-[#ff3d16] text-3xl'>SNEAKERS</h1>
        </div>
        <div className='grid grid-cols-1 place-items-center -mt-10'>
            <h1 className='font-league text-[#ff3d16] text-13xl'>THE BLOG</h1>
        </div>

        <div className='grid grid-cols-1 px-20 md:grid-cols-2 lg:grid-cols-3 gap-28 pt-6 mt-16'>
            <div>
                <div className='space-y-4'>
                    <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>DOLOR SIT / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/adrian-hernandez-p9qBYkbpKiw-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
            <div>
                <div className='space-y-4'>
                <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>LOREM IPS / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
            <div>
                <div className='space-y-4'>
                <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>SIT AMET / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/leon-skibitzki-NMyuo1hoCAA-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
           


            <div>
                <div className='space-y-4'>
                <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>ELIT LAB / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
            <div>
                <div className='space-y-4'>
                <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>IPSA MINUS / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/xavier-teo-SxAXphIPWeg-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
            <div>
                <div className='space-y-4'>
                <div className='flex items-end'>
                        <h1 className='text-[#ff3d16] font-league text-6xl tracking-wider'>DELENITI / </h1>
                        <div className='flex items-end'>
                            <button className='text-[#ff3d16] text-5xl hover:text-[#ff340c80] duration-500'><ion-icon name="add-outline"></ion-icon></button>
                        </div>
                    </div>
                    <p className='text-[#ff3d16] font-worksans font-normal text-base leading-tight uppercase text-justify tracking-normal opacity-70'>
                    Lorem ipsum dolor sit amet ipsa minus consectetur ipsa adipisicing elit ab. 
                    Voluptatum conseq uuntur deleniti minus ipsa culpa...</p>
                </div>
                <div className='mt-8'>
                    <img className='h-[250px] w-[500px] object-cover' src="./sneakers/christian-lucas-6htTITnUml8-unsplash.jpg" alt="nike classic cortez" />
                </div>
                <div className='bg-[#ff3d16] py-8 text-right'>
                    <button className=' font-league text-3xl tracking-wider text-[#1b1b1b] mr-4 hover:text-[#F2F2F2] duration-500'>READ MORE → </button>
                </div>
            </div>
            
        </div>
      
        <div className='grid grid-cols-1 place-items-center py-28'>
        <button className='bg-transparent text-xl mr-6 ml-5 border border-[#ff3d16] text-[#ff3d16] font-league py-2 px-6 rounded hover:bg-[#ff3d16] hover:text-[#1b1b1b] duration-500'>LOAD MORE</button> 
        </div>

    </div>
  )
}
