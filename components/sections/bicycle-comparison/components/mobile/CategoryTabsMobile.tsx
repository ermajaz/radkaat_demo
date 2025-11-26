"use client";

import { ComparisonCategory } from "@/types/bikeComparison";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function CategoryTabsMobile({
  categories,
  active,
  setActive,
}: {
  categories: ComparisonCategory[];
  active: "Comfort & Ergonomics" | "Performance" | "Durability & Build" | "Utility & Convenience" | "Terrain Adaptability" | "Price";
  setActive: Dispatch<SetStateAction<"Comfort & Ergonomics" | "Performance" | "Durability & Build" | "Utility & Convenience" | "Terrain Adaptability" | "Price">>;
}) {
  return (
    <div className="">
      <div
        className="
          grid grid-cols-3 gap-3
          auto-rows-[42px]
        "
      >
        {categories.map((cat) => {
          const isActive = active === cat;

          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActive(cat)}
              className={`
                relative rounded-3xl text-xs font-semibold
                flex items-center justify-center
                transition-all
                ${isActive
                  ? "text-black"
                  : "text-white/70 border border-[#2a2a2a] bg-[#1a1a1a]"
                }
              `}
              style={{
                borderWidth: isActive ? 0 : 1,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCatMobile"
                  className="absolute inset-0 rounded-3xl bg-white"
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                />
              )}

              <span className="relative px-2">{cat}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
