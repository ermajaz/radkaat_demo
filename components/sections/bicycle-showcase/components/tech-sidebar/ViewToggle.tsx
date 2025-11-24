"use client";

import { motion } from "framer-motion";

export default function ViewToggle({
  onlyDiff,
  setOnlyDiff,
}: {
  onlyDiff: boolean;
  setOnlyDiff: (v: boolean) => void;
}) {
  return (
    <div className="relative flex w-80 bg-[#121212] rounded-full border border-white/20 p-3 gap-5 cursor-pointer select-none">
      
      {/* Sliding background */}
      <motion.div
        layoutId="viewToggle"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute top-0 bottom-0 w-[50%] bg-sandstorm rounded-full shadow-md"
        style={{
          left: onlyDiff ? "50%" : "0%",
        }}
      />

      {/* ALL */}
      <div
        onClick={() => setOnlyDiff(false)}
        className="flex-1 flex items-center justify-center text-sm font-bold relative z-10"
      >
        <span className={onlyDiff ? "text-white/70" : "text-black"}>
          All
        </span>
      </div>

      {/* ONLY DIFFERENCE */}
      <div
        onClick={() => setOnlyDiff(true)}
        className="flex-1 flex items-center justify-center text-sm font-bold relative z-10"
      >
        <span className={onlyDiff ? "text-black" : "text-white/70"}>
          Only Difference
        </span>
      </div>
    </div>
  );
}
