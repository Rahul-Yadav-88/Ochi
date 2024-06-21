import React from 'react';
import Toy from "../assets/Toy.png"
const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='font-[Neue Montreal] text-[3vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' flex gap-5 w-full border-t-[2px] border-[#a1b562] pt-10 mt-20'>
        <div className='w-1/2'>
          <h1 className='text-7xl'>Our Approach:</h1>
          <button className='flex px-10 hover:bg-slate-300 hover:text-black py-6 bg-zinc-900 gap-10 items-center rounded-full text-white uppercase mt-10'>Read More
            <div className='w-2 h-2 bg-zinc-500 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] overflow-hidden bg-cover rounded-3xl   '>
        <img className='h-[70vh]' src={Toy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About