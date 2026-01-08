"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tour } from "../types/tours.types";

export default function JungleBookNavMobile({
  destinations,
  activeIndex,
  onStoryClick,
}: {
  destinations: Tour[];
  activeIndex: number;
  onStoryClick: (index: number) => void;
}) {
  return (
    <div className="w-full bg-[#121212] px-4 py-2.5 flex flex-col gap-4">

      {/* ✅ Mobile title */}
      <h2 className="text-white text-[22px] font-extrabold leading-tight text-center tracking-wide">
        THE JUNGLE BOOK
      </h2>

      {/* ✅ 3-column refined grid */}
      <div className="grid grid-cols-3 gap-3">
        {destinations.map((story, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => onStoryClick(index)}
              className={cn(
                "relative w-full py-2.5 rounded-2xl flex flex-col items-center justify-center",
                "backdrop-blur-md border transition-all active:scale-95",
                isActive
                  ? "border-transparent"
                  : "bg-white/5 border-[#2a2a2a]"
              )}
            >
              {/* ✅ Animated active background */}
              {isActive && (
                <motion.div
                  layoutId="jb-active-bg"
                  className="absolute inset-0 rounded-2xl bg-sandstorm"
                  transition={{ type: "spring", stiffness: 240, damping: 26 }}
                />
              )}

              {/* ✅ Content always above background */}
              <div className="relative z-10 flex flex-col items-center px-1">
                {/* ✅ Title with EXACT 2-line clamp */}
                <span
                  className={cn(
                    "uppercase text-[11px] font-semibold leading-tight text-center line-clamp-2",
                    isActive ? "text-black" : "text-white/90"
                  )}
                >
                  {story.title}
                </span>

                {/* ✅ Metadata */}
                <span
                  className={cn(
                    "text-[9.5px] font-medium mt-1",
                      story?.seat
                      ? "text-rust"
                      : isActive
                      ? "text-black/60"
                      : "text-white/50"
                  )}
                >
                  {story?.seat || story?.date}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
