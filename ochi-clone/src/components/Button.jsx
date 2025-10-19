import React from "react";

function Button() {
  return (
    <div className="w-full  mt-[10vh] relative ">
      <button className="absolute flex items-center left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 gap-10 px-6 py-4 -mt-4 bg-zinc-800 uppercase text-white rounded-full hover:bg-zinc-950 hover:cursor-pointer hover:duration-300 tracking-tighter">
        view all case studies
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </button>
    </div>
  );
}

export default Button;
