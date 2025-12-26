"use client";

import { motion } from "framer-motion";
import { Bike } from "lucide-react";

export default function Button360({ open360 }: { open360: () => void }) {
  return (
    <div className="flex flex-col items-center w-22">
      <motion.button
        onClick={open360}
        whileTap={{
          scale: 0.96,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          relative w-22 h-12 rounded-full cursor-pointer
          flex flex-col items-center justify-center
          overflow-hidden
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.35)]
        "
      >
        {/* =====================
            LIQUID HIGHLIGHT
        ===================== */}
        <div
          className="
            pointer-events-none
            absolute top-0 left-0 w-full h-1/2
            rounded-full
            bg-linear-to-b
            from-white/25
            to-transparent
          "
        />

        {/* =====================
            INNER DEPTH SHADOW
        ===================== */}
        <div
          className="
            pointer-events-none
            absolute inset-0 rounded-full
            shadow-[inset_0_-6px_10px_rgba(0,0,0,0.35)]
          "
        />

        {/* =====================
            CONTENT
        ===================== */}
        <div className="relative z-10 flex flex-col items-center">
          <Bike size={18} className="text-white mb-0.5 opacity-90" />
          <span className="text-[8px] tracking-[0.2em] text-white/90 font-semibold">
            360 VIEW
          </span>
        </div>
      </motion.button>
    </div>
  );
}
