import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../layout/Navbar";



const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout