"use client";

import { motion } from "framer-motion";

type ToggleProps = {
  active: "specs" | "experience";
};

export default function SpecsExperienceToggle({ active }: ToggleProps) {
  return (
    <div className="flex items-center justify-center mb-10">
      <h2 className="text-3xl font-bold mr-4">From Specs To</h2>
      <div className="relative flex w-[80px] h-[36px] rounded-full bg-stone-800 mx-4">
        <motion.div
          className="absolute top-1 left-1 h-[28px] w-[28px] rounded-full bg-sandstorm"
          animate={{ x: active === "experience" ? 44 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </div>
      <h2 className="text-3xl font-bold ml-4">Experience</h2>
    </div>
  );
}
