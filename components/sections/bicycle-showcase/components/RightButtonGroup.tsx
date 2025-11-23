"use client";

import { motion } from "framer-motion";

export default function RightButtonGroup({
  open360,
}: {
  open360: () => void;
}) {
  return (
    <div className="flex flex-col items-center w-[140px]">
      <motion.button
        onClick={open360}
        whileTap={{ scale: 0.94 }}
        className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center
                   cursor-pointer select-none overflow-hidden bg-[#0A0A0A]/70
                   border border-white/10 backdrop-blur-xl
                   shadow-[0_0_40px_rgba(255,200,80,0.08)]"
      >
        {/* ✅ Soft Pulse Glow */}
        <motion.div
          animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 rounded-full bg-sandstorm/25 blur-2xl"
        />

        {/* ✅ Thin Rotating Light Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent, rgba(255,200,80,0.8), transparent) 1",
          }}
        />

        {/* ✅ Central Spinning Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 w-7 h-7 mb-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12a9 9 0 1 1-2.64-6.36" />
            <polyline points="23 4 21 6 19 4" />
          </svg>
        </motion.div>

        {/* ✅ 360 VIEW Text Inside */}
        <motion.p
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="z-10 text-[10px] tracking-[0.2em] font-semibold text-white/80"
        >
          360 VIEW
        </motion.p>
      </motion.button>
    </div>
  );
}
