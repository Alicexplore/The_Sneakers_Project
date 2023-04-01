import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='h-auto w-full bg-[#ff3d16]'>
                <div className='grid grid-cols-3 place-items-center py-10'>
                        <div className='grid grid-cols-1 place-items-center'>
                            <h1 className='font-league text-4xl text-[#151515]'>LITTLE STORIES THAT WILL<br />BLOW YOUR FEET.</h1>
                        </div>
                        <div className='grid grid-cols-1 place-items-center'>
                            <h1 className='font-league text-10xl text-[#151515] tracking-wide'>SNEAKERS</h1>
                        </div>
                        <div className='grid grid-cols-6 place-items-center gap-3'>
                            <img src="./socialmedias/social_b-01.svg" alt="/" width={35}/>
                            <img src="./socialmedias/social_b-05.svg" alt="/" width={35}/>
                            <img src="./socialmedias/social_b-06.svg" alt="/" width={35}/>
                            <img src="./socialmedias/social_b-04.svg" alt="/" width={35}/> 
                            <img src="./socialmedias/social_b-02.svg" alt="/" width={35}/>
                            <img src="./socialmedias/social_b-03.svg" alt="/" width={35}/>    
                        </div>
                </div>
                
                <div className='grid grid-cols-5 py-10'>
                <div className='grid grid-cols-1 place-items-center'>
                    <ul>
                        <h1 className='font-league text-3xl text-[#151515] tracking-wide'>ABOUT US</h1>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 place-items-center'>
                    <ul>
                        <h1 className='font-league text-3xl text-[#151515] tracking-wide'>THE BLOG</h1>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 place-items-center'>
                    <ul>
                        <h1 className='font-league text-3xl text-[#151515] tracking-wide'>SNEAKERS</h1>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 place-items-center'>
                    <ul>
                        <h1 className='font-league text-3xl text-[#151515] tracking-wide'>COLLABS</h1>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 place-items-center'>
                    <ul>
                        <h1 className='font-league text-3xl text-[#151515] tracking-wide'>COMMUNITY</h1>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                        <li className='font-worksans text-sm font-normal tracking-tight'>→ LOREM IPSUM</li>
                    </ul>
                </div>
                </div>
        </div>
    </div>
  )
}
