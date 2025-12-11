"use client";

import { Star } from "lucide-react";
import { Bike } from "../utils/bicycle-showcase";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BikesStrip({ bike }: { bike: Bike }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // determine gradient background based on bike colors or uiName
  const gradient = bike?.colors?.gradient
    ? `linear-gradient(90deg, ${bike.colors.gradient})`
    : bike.uiName.toLowerCase() === "serow"
    ? "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
    : bike.uiName.toLowerCase() === "saola"
    ? "linear-gradient(90deg, var(--color-airforce), var(--color-petrol))"
    : bike.uiName.toLowerCase() === "takin"
    ? "linear-gradient(90deg, #75911c, var(--color-army))"
    : "linear-gradient(90deg,#ccc,#999)";

  return (
    <motion.div
      ref={ref}
      className="w-full h-9 flex items-center justify-center z-40"
      style={{ backgroundImage: gradient }}
      
      // Animation
      initial={{ x: 200, opacity: 0 }}            // start off-screen to the right
      animate={isInView ? { x: 0, opacity: 1 } : {}} 
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]  // smooth "Apple style" easing
      }}
    >
      <div className="flex items-center gap-2">
        <Star className="text-superblack w-4 h-4 fill-superblack" strokeWidth={0} />
        <span className="font-bold text-[13px] uppercase tracking-[1.5px] mt-px text-superblack">
          Introducing Goat Series
        </span>
        <Star className="text-superblack w-4 h-4 fill-superblack" strokeWidth={0} />
      </div>
    </motion.div>
  );
}
