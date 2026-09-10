import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";



const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout