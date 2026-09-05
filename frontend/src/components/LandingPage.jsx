import { motion } from "framer-motion";
import React from "react";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.38" className=" h-screen w-full bg-white pt-1 ">
      <div className="textStructures mt-40 px-12">
        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker  uppercase">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="w-[9vw] bg-red-600 relative  top-3 h-[5vw] rounded-lg"
                  ></motion.div>
                )}
                <h1 className="text-[7vw] font-Founders_Grotesk tracking-tighter font-bold leading-22 text-zinc-900 ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px]   border-zinc-700 mt-43 flex justify-between items-center px-15 py-3">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => {
          return (
            <p className="text-[2.2vh] text-zinc-900 font-NeueMontreal tracking-tight leading-none ">
              {item}
            </p>
          );
        })}

        <div className="start uppercase py-2 px-4 border-[1px] text-zinc-900 border-zinc-900 text-md font-NeueMontreal leading-none  hover:cursor-pointer hover:bg-zinc-900 hover:text-white duration-300 rounded-full">
          start the project
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
