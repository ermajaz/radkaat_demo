"use client";

import { Bike } from "../utils/bicycle-showcase";
import { motion } from "framer-motion";

export default function BikesStrip({
  bike,
  showBg,
}: {
  bike: Bike;
  showBg: boolean;
}) {

  return (
    <motion.div
      className="w-full flex items-center justify-center"
      initial={false}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="
          flex items-center gap-5
          px-6
          rounded-full
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        "
        style={{
          // backgroundImage: showBg ? gradient : "none",
          backdropFilter: showBg ? "blur(12px)" : "none",
        }}
      >
        <span
          className={`text-[30px] transition-colors duration-300 ${
            showBg ? "text-superblack" : "text-black"
          }`}
        >
          ★
        </span>

        <span
          className={`text-[30px] font-extrabold uppercase transition-colors duration-300 ${
            showBg ? "text-superblack" : "text-black"
          }`}
        >
          Introducing Goat Series
        </span>

        <span
          className={`text-[30px] transition-colors duration-300 ${
            showBg ? "text-superblack" : "text-black"
          }`}
        >
          ★
        </span>
      </div>
    </motion.div>
  );
}
