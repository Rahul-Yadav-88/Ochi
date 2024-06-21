import React, { useEffect, useState } from 'react'

function Eyes () {
  const [rotate, setRotate]=useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=> {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX= mouseX - window.innerWidth/2;
      let deltaY= mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI); 
      setRotate(angle-180);
    })
  })
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.8"  className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center relative'>
        <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full  h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>

              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes