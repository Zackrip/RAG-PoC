import React from "react";

function Footer() {
  return (
    <div  className="w-full h-screen px-10 flex -py-20">
        <div className="w-1/2 relative text-[#1F2937] text-8xl font-bold tracking-tighter leading-none uppercase">
            <h1>READ.</h1>
            <h1>UNDERSTAND.</h1>
            <h1>ANSWER.</h1>
            <svg className="absolute top-[90vh] text-[#FF6B35]"
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

        <div className="w-1/2">
            <h1 className="text-[#1F2937] text-8xl font-bold tracking-tighter leading-none uppercase">INTELLIGENCE</h1>
        </div>
    </div>
  );
}

export default Footer;
