"use client";

import { motion } from "framer-motion";
import { Bike } from "lucide-react";

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
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center
                   cursor-pointer select-none overflow-hidden bg-[#0A0A0A]/70
                   border border-[#2a2a2a] backdrop-blur-xl
                   shadow-[0_0_40px_rgba(255,200,80,0.08)]"
      >
        {/* ✅ Soft Pulse Glow */}
        <motion.div
          animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-25 h-25 rounded-full bg-sandstorm/25 blur-2xl"
        />

        {/* ✅ Thin Rotating Light Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent, rgba(255,200,80,0.8), transparent) 1",
          }}
        />

        {/* ✅ Central Spinning Icon */}
        <motion.div
          className="z-10 w-5 h-5 mb-1 text-white"
        >
          <Bike size={20} />
        </motion.div>

        {/* ✅ 360 VIEW Text Inside */}
        <motion.p
          className="z-10 text-[8px] tracking-[0.2em] text-white font-semibold"
        >
          360 VIEW
        </motion.p>
      </motion.button>
    </div>
  );
}
