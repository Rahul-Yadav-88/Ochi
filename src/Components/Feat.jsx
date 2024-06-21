import React, { useState } from 'react';
import Card1 from "../assets/Card1.png"
import Card2 from "../assets/Card2.png"
import Card3 from "../assets/Card3.png"
import Card4 from "../assets/Card4.png"
import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap';

const Feat = () => {
    const cards = [useAnimation(), useAnimation()]
    const handleHover = (index) => {
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index) => {
        cards[index].start({y:"100%"})
    }
    return (
        <div data-scroll data-scroll-section className='relative w-full py-20'>
            <div className='w-full border-b-[2px] pb-20 border-zinc-700 px-20'><h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>Featured projects</h1>

            </div>

            <div className='px-20'>
                <div className='Card mt-20 flex gap-10 w-full'>

                    <motion.div onHoverStart={() => handleHover(0)} 
                    onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer w-1/2 h-[75vh] relative '>

                        <h1 className='absolute flex z-[9] tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] right-0  text-8xl -pb-20 font-semibold overflow-hidden leading-none font-[Founders Grotesk]'>
                            {"FYDE".split('').map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block'>{item}</motion.span>))}</h1>

                        <div className='c1  rounded-xl w-full h-full overflow-hidden '>
                            <img src={Card1} alt="" className='h-full w-full bg-cover' />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} 
                    onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer  w-1/2 h-[75vh] relative '>
                        <h1 className='absolute flex z-[9] tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] right-full  text-8xl -pb-20 font-semibold overflow-hidden leading-none font-[Founders Grotesk]'>
                            {"VISE".split('').map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='c2  rounded-xl w-full h-full overflow-hidden'>
                            <img className='h-full w-full bg-cover' src={Card2} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='px-20'>
                <div className='Card mt-20 flex gap-10 w-full'>

                    <motion.div onHoverStart={() => handleHover(0)} 
                    onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer w-1/2 h-[75vh] relative '>

                        <h1 className='absolute flex z-[9] tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] right-0  text-8xl -pb-20 font-semibold overflow-hidden leading-none font-[Founders Grotesk]'>
                            {"TRAWA".split('').map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block'>{item}</motion.span>))}</h1>

                        <div className='c1  rounded-xl w-full h-full overflow-hidden '>
                            <img src={Card3} alt="" className='h-full w-full bg-cover' />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} 
                    onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer  w-1/2 h-[75vh] relative '>
                        <h1 className='absolute flex z-[9] tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] right-full  text-8xl -pb-20 font-semibold overflow-hidden leading-none font-[Founders Grotesk]'>
                            {"PREMIUMBLEND".split('').map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block'>{item}</motion.span>))}</h1>
                        <div className='c2  rounded-xl w-full h-full overflow-hidden'>
                            <img className='h-full w-full bg-cover' src={Card4} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Feat