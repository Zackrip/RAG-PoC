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