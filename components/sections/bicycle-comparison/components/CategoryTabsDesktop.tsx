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
    <div className="relative w-full bg-[#121212] rounded-t-lg p-1.5 flex gap-2">
      {categories.map((cat) => {
        const isActive = active === cat;

        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="relative flex-1 p-4 text-xs cursor-pointer font-bold rounded-md text-center"
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
                className="absolute inset-0 bg-white rounded-md shadow-md"
              />
            )}

            {/* Text */}
            <span className={isActive ? "text-black relative" : "text-white/80 relative"}>
              {cat}
            </span>
          </button>
        );
      })}
    </div>
  );
}
