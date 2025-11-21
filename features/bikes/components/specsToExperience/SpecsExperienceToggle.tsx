"use client";

import { motion } from "framer-motion";

type ToggleProps = {
  active: "specs" | "experience";
};

export default function SpecsExperienceToggle({ active }: ToggleProps) {
  return (
    <div className="flex items-center justify-center mb-6 select-none">
      <h2 className="text-2xl md:text-3xl font-bold mr-3">From Specs To</h2>
      <div className="relative flex w-20 h-9 rounded-full bg-stone-800 mx-3">
        <motion.div
          className="absolute top-1 left-1 h-7 w-7 rounded-full bg-sandstorm"
          animate={{ x: active === "experience" ? 44 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold ml-3">Experience</h2>
    </div>
  );
}
