import React from "react";

function Card() {
  return (
    <div>
      <div className="w-full h-screen flex items-center px-12 gap-5">
        <div className="cardContainer w-1/2 h-[50vh] ">
          <div className="cards relative rounded-xl bg-[#004D43] w-full h-full flex items-center justify-center ">
            <img className="w-38" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className="absolute text-[#CDEA68] left-8 tracking-tighter bottom-6 border-2 px-3 rounded-2xl " >&copy;2019-2025</div>
          </div>
        </div>
        <div className="cardContainer w-1/2 flex gap-5 h-[50vh] ">
          <div className="cards relative rounded-xl bg-[#212121] w-1/2 h-full flex items-center justify-center ">
              <img className="w-40" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className="absolute text-[#cbcec2] hover:cursor-pointer font-NeueMontreal py-1 left-8 bottom-6 border-2 px-3 rounded-2xl uppercase tracking-tighter " >rating 5.0 on clutch</button>  
          </div>
          <div className="cards relative rounded-xl bg-[#212121] w-1/2 h-full flex items-center justify-center ">
              <img className="w-26" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className="absolute text-[#cbcec2] hover:cursor-pointer font-NeueMontreal py-1 left-8 bottom-6 border-2 px-3 rounded-2xl uppercase tracking-tighter " >busniess bootcamp alumni</button>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
