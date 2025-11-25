"use client";

import { motion } from "framer-motion";

export default function CategoryTabsDesktop({
  categories,
  active,
  setActive,
}: {
  categories: string[];
  active: string;
  setActive: (c: string) => void;
}) {
  return (
    <div className="relative w-full bg-[#292929] rounded-t-md p-4 flex gap-2">
      {categories.map((cat) => {
        const isActive = active === cat;

        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="relative flex-1 p-2.5 text-xs cursor-pointer font-bold rounded-full text-center"
          >
            {/* Sliding background */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute inset-0 bg-superblack border border-white/20 rounded-full shadow-md"
              />
            )}

            {/* Text */}
            <span className={isActive ? "relative text-white " : "relative text-white/70"}>
              {cat}
            </span>
          </button>
        );
      })}
    </div>
  );
}
