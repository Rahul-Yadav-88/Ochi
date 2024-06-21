import { motion } from 'framer-motion'
import React from 'react'

const Marqui = () => {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2"  className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]'>
      <div className='text-white flex border-t-2 border-b-2 overflow-hidden whitespace-nowrap border-zinc-300 '>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[15vw] leading-none font-["Founders Grotexk"] pr-20 font-semibold'>We are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[15vw] leading-none font-["Founders Grotexk"] pr-20font-semibold'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marqui