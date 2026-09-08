import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed z-[999] py-4 px-8 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 text-[#FF6B35] flex justify-between items-center">
      <Link to="/">
        {" "}
        <div className="logo hover:cursor-pointer">
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="30"
              fill="currentColor"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="32"
              fontWeight="500"
              letterSpacing="-1.5"
            >
              Docly
            </text>
          </svg>
        </div>
      </Link>
      <div className="links flex gap-10 hover:cursor-pointer ">
        {["Features", "How It Works", "Documents", "About", "Contact us"].map(
          (item, index) => (
            <a
              className={`'text-lg text-[#FF6B35] capitalize font-NeueMontreal hover:scale-120 duration-200' ${
                index === 4
              }`}
            >
              {item}
            </a>
          ),
        )}
      </div>
    </div>
  );
}

export default Navbar;
