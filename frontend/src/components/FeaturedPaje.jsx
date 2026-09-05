import React from "react";

function FeaturedPaje() {
  return (
    <div className="w-full py-25 ">
      <div className="w-full text-[#212121] px-15 border-b-2 border-[#C1C1C1] pb-10 ">
        <h1 className="text-6xl tracking-tighter font-NeueMontreal ">
          Featured projects
        </h1>
      </div>
      <div className="cards col w-full flex  gap-5 mt-20 px-15 ">
        {/* <ul className="list-disc text-[#212121] px-5 text-md uppercase font-NeueMontreal tracking-tighter">
              <li>Salience Labs</li>
          </ul> */}
        <div className="cardscontainer relative w-1/2 h-[75vh]">
          <h1 className="absolute uppercase  z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap  ">
            {"Salience Labs".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              alt=""
            />
          </div>
          <div className=" flex mt-5 gap-5 text-[2.5] text-md font-NeueMontreal tracking-tighter ">
            <button className=" uppercase border-[1px] px-[2vh] hover:cursor-pointer rounded-2xl hover:bg-[#212121] hover:text-white py-[2px] text-black ">
              Brand identity
            </button>
            <button className=" uppercase text-black border-[1px] hover:cursor-pointer py-[2px] hover:bg-[#212121] hover:text-white   px-[2vh] rounded-2xl ">
              Pitch Deck
            </button>
          </div>
        </div>

        {/* <ul className="list-disc text-[#212121] px-5 text-md uppercase font-NeueMontreal tracking-tighter">
              <li>Salience Labs</li>
          </ul> */}
        <div className="cardscontainer relative w-1/2 h-[75vh]">
          <h1 className="absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap  ">
            {"meddalia experience".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
              alt=""
            />
          </div>
          <div className=" flex mt-5 gap-5 text-[2.5] text-md font-NeueMontreal tracking-tighter ">
            <button className=" uppercase border-[1px] px-[2vh] hover:cursor-pointer rounded-2xl hover:bg-[#212121] hover:text-white py-[2px] text-black ">
              conference
            </button>
            <button className=" uppercase text-black border-[1px] hover:cursor-pointer py-[2px] hover:bg-[#212121] hover:text-white   px-[2vh] rounded-2xl ">
              executive keynote
            </button>
            <button className=" uppercase text-black border-[1px] hover:cursor-pointer py-[2px] hover:bg-[#212121] hover:text-white   px-[2vh] rounded-2xl ">
              product launch
            </button>
          </div>
        </div>
      </div>

      <div className="cards col w-full flex  gap-5 mt-20 px-15 ">
        {/* <ul className="list-disc text-[#212121] px-5 text-md uppercase font-NeueMontreal tracking-tighter">
              <li>Salience Labs</li>
          </ul> */}
        <div className="cardscontainer relative w-1/2 h-[75vh]">
          <h1 className="absolute uppercase  z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap  ">
            {"AH2 & Math Horn".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
          <div className=" flex mt-5 gap-5 text-[2.5] text-md font-NeueMontreal tracking-tighter ">
            <button className=" uppercase text-black border-[1px] py-[2px] hover:cursor-pointer hover:bg-[#212121] hover:text-white   px-[2vh] rounded-2xl ">
              pitch deck
            </button>
          </div>
        </div>

        {/* <ul className="list-disc text-[#212121] px-5 text-md uppercase font-NeueMontreal tracking-tighter">
              <li>Salience Labs</li>
          </ul> */}
        <div className="cardscontainer relative w-1/2 h-[75vh]">
          <h1 className="absolute uppercase z-[9] text-8xl font-Founders_Grotesk font-semibold tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none whitespace-nowrap  ">
            {"Vise".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
              alt=""
            />
          </div>
          <div className=" flex mt-5 gap-5 text-[2.5] text-md font-NeueMontreal tracking-tighter ">
            <button className=" uppercase border-[1px] px-[2vh] rounded-2xl hover:bg-[#212121] hover:cursor-pointer hover:text-white py-[2px] text-black ">
              agency
            </button>
            <button className=" uppercase text-black border-[1px] py-[2px] hover:bg-[#212121] hover:cursor-pointer hover:text-white   px-[2vh] rounded-2xl ">
              company presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPaje;
