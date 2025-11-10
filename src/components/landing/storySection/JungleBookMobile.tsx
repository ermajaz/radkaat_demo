"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JungleBookMobileProps {
  destinations: any[];
  activeIndex: number;
  onStoryClick: (index: number) => void;
}

export const JungleBookMobile: React.FC<JungleBookMobileProps> = ({
  destinations,
  activeIndex,
  onStoryClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative flex flex-col items-center justify-center
        px-4 py-4
        bg-gradient-to-b from-[#111111]/95 via-[#0B0B0B]/95 to-[#080808]
        backdrop-blur-xl
        border-t border-[#E4D27C]/10
        shadow-[0_-4px_20px_rgba(0,0,0,0.22)]
      "
      style={{
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Title & Description — reduced vertical spacing, title limited to 2 lines */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-center text-center mb-3 w-full"
      >
        <motion.h2
          className="text-white text-[22px] sm:text-[24px] font-bold leading-tight tracking-wide w-full"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          THE JUNGLE BOOK
        </motion.h2>

        <motion.p
          className="text-[#CFCFCF] text-[12.5px] sm:text-[13px] font-light leading-snug mt-1 max-w-[95%]"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          A timeless tale of adventure and discovery, following Mowgli’s journey
          through the wild jungle with his loyal companions.
        </motion.p>
      </motion.div>

      {/* Selectable Story Buttons (No Scroll) - compact grid, smaller gaps */}
      <div
        className="
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
          gap-2 sm:gap-3 w-full place-items-center 
          px-1
        "
      >
        {destinations.map((story, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => onStoryClick(index)}
              layout
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className={`
                relative cursor-pointer select-none flex flex-col items-center justify-center 
                text-center px-2 py-2 rounded-lg
                transition-all duration-350 ease-out
                ${isActive ? "z-20 scale-105" : "opacity-85 hover:opacity-100"}
              `}
            >
              {/* Active Glow */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 rounded-lg bg-[#E4D27C]/10 shadow-[0_0_18px_rgba(228,210,124,0.12)]"
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  />
                )}
              </AnimatePresence>

              {/* Title */}
              <motion.span
                layout
                className={`
                  uppercase font-semibold tracking-wide z-10
                  transition-all duration-300 text-[11px] sm:text-[12px]
                  ${isActive ? "text-[#E4D27C]" : "text-gray-300"}
                `}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  maxWidth: 90,
                }}
              >
                {story.title}
              </motion.span>

              {/* Date */}
              <motion.span
                layout
                className={`
                  z-10 mt-1 transition-all duration-300 text-[9.5px] sm:text-[10.5px]
                  ${isActive ? "text-[#E4D27C]/90" : "text-gray-500"}
                `}
              >
                {story.date}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
