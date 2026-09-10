import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.38" className=" h-screen w-full pt-1 ">
      <div className="textStructures mt-40 px-12">
        {["We Create", "WE UNDERSTAND.", "WE ANSWER."].map((item, index) => {
          return (
            <div className="masker  uppercase">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="w-[9vw] bg-[#FF6B35] relative  top-1.5 h-[5vw] rounded-lg"
                  ></motion.div>
                )}
                <h1 className="text-[6vw] font-Founders_Grotesk tracking-tighter font-bold leading-22 text-[#1F2937]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px]   border-[#F9FAFB] mt-43 flex justify-between items-center px-15 py-3">
        {[
          "AI document reader & knowledge assistant",
          "Turn PDFs and documents into instant answers",
        ].map((item, index) => {
          return (
            <p className="text-[2.2vh] text-[#FF6B35] font-NeueMontreal tracking-tight leading-none ">
              {item}
            </p>
          );
        })}

        <Link to="/ask-docly" className="flex justify-end">
          <div className="start uppercase py-2 px-4 border-[1px] text-[#FF6B35] border-[#FF6B35] text-md font-NeueMontreal leading-none  hover:cursor-pointer hover:bg-[#FF6B35] hover:text-white duration-300 rounded-full">
            TRY DOCLY →
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
