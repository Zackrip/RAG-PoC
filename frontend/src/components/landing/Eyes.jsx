import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0); 
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=> {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    
    
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.6" className='relative w-full h-full bg-center bg-cover bg-[url("")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[8vw] h-[8vw] rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%]-translate-y-[50%] w-full h-8 '>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'></div>
                        </div>   
                    </div>
                </div>

                <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                    <div className='relative w-[8vw] h-[8vw] rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%]-translate-y-[50%] w-full h-8 '>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'></div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes