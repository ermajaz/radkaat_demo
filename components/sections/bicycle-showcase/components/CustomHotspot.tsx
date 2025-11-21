"use client";

import { Hotspot } from "../utils/bicycle-showcase";
import { motion } from "framer-motion";

export default function CustomHotspot({ hotspot }: { hotspot: Hotspot }) {
  return (
    <motion.div
      className="absolute z-30"
      style={{
        left: `${hotspot.leftPct}%`,
        top: `${hotspot.topPct}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">

        {/* PULSING GLOW RING */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            width: 28,
            height: 28,
            margin: "-6px",
            border: "2px solid var(--color-sandstorm-1)",
            background: "radial-gradient(circle, var(--color-sandstorm) 0%, var(--color-sandstorm-1) 45%, var(--color-sandstorm) 70%)",
            filter: "blur(6px)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* MAIN DOT */}
        <motion.div
          className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg relative"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-black text-[14px] font-bold leading-none">+</span>
        </motion.div>

        {/* FIRST ANGLED LINE */}
        <motion.div
          className="absolute bg-white"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 50, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          style={{
            height: "2px",
            top: "-3px",
            left: "18px",
            transform: "rotate(-50deg)",
            transformOrigin: "left center",
          }}
        />

        {/* SECOND STRAIGHT LINE */}
        <motion.div
          className="absolute bg-white"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 170, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          style={{
            height: "2px",
            top: "-41px",
            left: "50px",
            transform: "rotate(0deg)",
            transformOrigin: "left center",
          }}
        />

        {/* TEXT BLOCK */}
        <motion.div
          className="w-[250px] absolute left-60 top-[-75px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
        >
          <span className="w-full text-sm font-extrabold uppercase text-white tracking-wide leading-tight">
            {hotspot.title}
          </span>

          <p className="w-full text-xs text-white/90 mt-1 leading-snug">
            {hotspot.description}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}
