import React from 'react'
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marqui from './Components/Marqui';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Feat from './Components/Feat';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  

  

  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <>
    <div className='w-full min-h-screen bg-zinc-800 text-white'>
      <Navbar/>
      <Landing/>
      <Marqui/>
      <About/>
      <Eyes/>
      <Feat/>
      <Cards/>
      <Footer/>
    </div>
    </>
  )
}

export default App