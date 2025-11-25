"use client";

import { steps } from "@/utils/ride";
import RideStepMobile from "./RideStepMobile";
import { motion } from "framer-motion";

export default function RideStepsMobile() {
  return (
    <div className="relative w-full px-6 mt-6 h-[38vh] max-h-[340px]">
      {/* Center glowing vertical line */}
      <div className="absolute left-1/2 top-5 bottom-0 -translate-x-1/2 pointer-events-none">
        <motion.div
          className="w-[3px] h-full rounded-full bg-linear-to-b from-sandstorm/80 via-sandstorm/40 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* Steps – spaced vertically, all visible without scroll */}
      <div className="relative h-full flex flex-col justify-between">
        {steps.slice(0, 4).map((step, index) => (
          <RideStepMobile key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
