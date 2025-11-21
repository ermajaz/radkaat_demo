"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  contents: { title: string }[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const StorySidebar: React.FC<Props> = ({
  contents,
  activeIndex,
  onSelect,
}) => {
  return (
    <aside className="w-full lg:w-[340px] min-h-screen border-r border-neutral-800/70 bg-linear-to-b from-[#141414] to-[#0B0B0B] p-6 flex flex-col gap-4 shadow-[inset_-4px_0_12px_rgba(0,0,0,0.3)]">
      {/* Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[18px] font-bold text-[#E4D27C] tracking-wide mb-2"
      >
        Contents
      </motion.h3>

      <div className="relative flex flex-col gap-1 mt-2">
        {contents.map((c, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.button
              key={i}
              onClick={() => onSelect(i)}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative flex items-center justify-between w-full text-left px-4 py-3 cursor-pointer text-[15px] font-medium tracking-wide transition-all duration-300",
                isActive
                  ? "bg-linear-to-r from-[#1A1A1A] to-[#222]/60 text-white"
                  : "text-stone-400 hover:text-white hover:bg-[#1A1A1A]/60"
              )}
            >
              {/* Left accent bar */}
              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute left-0 top-0 h-full w-[3px] bg-[#E4D27C] rounded-r-md"
                />
              )}

              {/* Title text */}
              <span
                className={cn(
                  "relative z-10 transition-colors",
                  isActive ? "text-white font-semibold" : "text-stone-300"
                )}
              >
                {c.title}
              </span>

              {/* Active glow */}
              {isActive && (
                <motion.div
                  layoutId={`glow-${i}`}
                  className="absolute inset-0 bg-[#E4D27C]/5 blur-xl rounded-md"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Decorative bottom gradient */}
      <div className="mt-auto h-px w-full bg-linear-to-r from-transparent via-[#E4D27C]/40 to-transparent opacity-60" />
    </aside>
  );
};
