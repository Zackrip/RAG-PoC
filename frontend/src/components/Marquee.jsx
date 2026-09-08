import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".006"  className="w-full py-30 bg-[#FF6B35] rounded-t-xl">
      <div className="text border-t-1 border-b-1 border-[#F9FAFB]  flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[22vw] font-Founders_Grotesk  uppercase font-bold leading-none tracking-tighter -mb-5 pr-10 -mt-15"
        >
          We are Docly
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[22vw] font-Founders_Grotesk uppercase font-bold leading-none tracking-tighter -mb-5 pr-10 -mt-15"
        >
          We are Docly
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[22vw] font-Founders_Grotesk uppercase font-bold leading-none tracking-tighter -mb-5 -mt-15"
        >
          We are Docly
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
