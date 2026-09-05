import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedPaje from './components/FeaturedPaje'
import Card from './components/Card'
import Button from './components/Button'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen text-white'> 
    < Navbar />
    < LandingPage />
    < Marquee />
    < About />
    <Eyes />
    <FeaturedPaje />
    <Button / >
    <Card />
    <Footer />
    </div>
  )
}

export default App