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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative flex items-center justify-center">

        {/* ✅ OUTER BREATHING RING */}
        <motion.div
          className="absolute rounded-full border border-white/40 bg-sandstorm/25"
          style={{
            width: 28,
            height: 28,
          }}
          animate={{
            scale: [1, 1.1, 1],   // smooth radius change
            opacity: [0.7, 1, 0.7] // optional realistic fade
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />


        {/* ✅ SOFT GLOW BETWEEN RINGS */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 40,
            height: 40,
            background:
              "radial-gradient(circle, rgba(255,230,140,0.4) 0%, rgba(255,200,90,0.15) 45%, rgba(0,0,0,0) 80%)",
            filter: "blur(6px)",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ✅ INNER SOLID CIRCLE (NO SCALE) */}
        <div
          className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md relative z-10"
        >
          {/* ✅ FIXED PLUS */}
          <span className="text-black text-[13px] font-bold leading-none">+</span>
        </div>

        {/* ✅ WHITE ANGLED LINE */}
        <motion.div
          className="absolute bg-white"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 50, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          style={{
            height: "2px",
            top: "-3px",
            left: "18px",
            transform: "rotate(-50deg)",
            transformOrigin: "left center",
          }}
        />

        {/* ✅ WHITE STRAIGHT LINE */}
        <motion.div
          className="absolute bg-white"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 170, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            height: "2px",
            top: "-41px",
            left: "50px",
            transformOrigin: "left center",
          }}
        />

        {/* ✅ TEXT */}
        <motion.div
          className="w-[250px] absolute left-60 top-[-75px]"
          initial={{ opacity: 0, y: 6 }}
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
