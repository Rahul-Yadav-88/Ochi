import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center px-32 gap-5'>
        <div className='cont h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute hover:bg-green-950 px-5 py-1 border-2 left-10 rounded-full text-[#CDEA68] border-[#CDEA68] bottom-10'>&copy;2019-2024</button></div></div>
        <div className='cont flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#253734]'><img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-5 py-1 hover:bg-green-700 border-2 left-5 rounded-full text-[#CDEA68] border-[#CDEA68] bottom-10'>RATING5.0 ON CLUTCH</button></div>
        <div className='card rounded-xl w-full h-full relative flex items-center justify-center bg-[#004D43]'><img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-5 py-1  hover:bg-green-950 border-2 left-5 rounded-full text-[#CDEA68] border-[#CDEA68] bottom-5'>BUSINESS BOOTCAMP <br /> ALUMNI</button></div>
        </div>
    </div>
  )
}

export default Cards