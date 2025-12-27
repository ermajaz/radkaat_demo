"use client";

import { motion } from "framer-motion";

export default function StickyGoatIntroHeader({
  active,
}: {
  active: boolean;
}) {
  return (
    <motion.div
      className="sticky top-0 z-50 w-full h-16 flex items-center justify-center backdrop-blur-xl"
      animate={{
        backgroundColor: active
          ? "rgba(255,255,255,0.85)"
          : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          color: active ? "#000000" : "#ffffff",
          scale: active ? 1 : 0.98,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-center gap-5"
      >
        {/* STAR */}
        <span className="text-[32px] leading-none">★</span>

        {/* TEXT */}
        <span className="text-[33px] font-extrabold tracking-wide uppercase">
          Introducing Goat Series
        </span>

        {/* STAR */}
        <span className="text-[32px] leading-none">★</span>
      </motion.div>
    </motion.div>
  );
}
