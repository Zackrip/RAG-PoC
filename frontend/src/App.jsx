import React from 'react'
import Navbar from './components/layout/Navbar'
import LandingPage from './components/landing/LandingPage'
import Marquee from './components/landing/Marquee'
import About from './components/landing/About'
import Eyes from './components/landing/Eyes'
// import FeaturedPaje from './components/landing/FeaturedPaje'
// import Card from './components/common/Card'
// import Button from './components/common/Button'
import Footer from './components/layout/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from './pages/ChatPage'
import DashboardLayout from './components/layout/DashboardLayout'



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route 
          path="/"
          element={
            <div className="w-full min-h-screen text-white">
              <Navbar />
              <LandingPage />
              <Marquee />
              <About />
              <Eyes />
              <Footer />
            </div>
          }
        />

        {/* Chat Page */}
        <Route
         element={
            
              <DashboardLayout />
            
          }   
        >
          <Route path="/ask-docly" element={<ChatPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;