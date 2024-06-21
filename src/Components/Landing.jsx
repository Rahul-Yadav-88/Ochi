import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import Logo from'../assets/Logo.png'
const Landing = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen text-white pt-1'>
            <div className='textstructure mt-48 px-20'>
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div key={index} className='masker'>
                            <div className='w-fit flex overflow-hidden'>
                                {index === 1 && (
                                    < motion.div initial={{ width: 0 }} animate={{width: "9vw"}} transition={{ease:[0.76,0,0.24,2], duration:1}} className='w-[9vw] h-[6vw] relative top-3'>
                                        <img src={Logo} alt="" />
                                    </motion.div>)}
                                <h1 className='uppercase text-[9vw] h-full font-["Founders Grotesk"] tracking-tighter font-medium leading-[7vw]'>{item}</h1></div>

                        </div>
                    );
                })}

            </div>
            <div className='border-t-2 border-zinc-600 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>
                    {item}
                </p>)}
                <div className='start flex items-center gap-5'>
                    <button className='px-5 py-2 hover:bg-slate-400 border-2 rounded-full border-zinc-500 font-light text-sm'>Start the Project</button>
                    <button className='w-10 h-10 hover:bg-slate-300 rounded-full border-2 border-zinc-500 flex justify-center items-center'> <span className='rotate-[45deg]'><FaLongArrowAltUp /></span></button>

                </div>
            </div>
        </div>
    )
}

export default Landing