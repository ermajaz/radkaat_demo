"use client";

import { Hotspot } from "../utils/bicycle-showcase";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomHotspot({
  hotspot,
  isActive,
  onHover,
  onLeave,
}: {
  hotspot: Hotspot;
  isActive: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="absolute z-30"
      style={{
        left: `${hotspot.leftPct}%`,
        top: `${hotspot.topPct}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onHover(hotspot.id)}
      onMouseLeave={onLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex items-center justify-center cursor-pointer">

        {/* =====================
            DOT (ALWAYS VISIBLE)
        ===================== */}
        <motion.div
          className="absolute rounded-full border border-white/40 bg-sandstorm/25"
          style={{ width: 28, height: 28 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: 40,
            height: 40,
            background:
              "radial-gradient(circle, rgba(255,230,140,0.4) 0%, rgba(255,200,90,0.15) 45%, rgba(0,0,0,0) 80%)",
            filter: "blur(6px)",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md relative z-10">
          <span className="text-black text-[13px] font-bold leading-none">+</span>
        </div>

        {/* =====================
            DETAILS (HOVER ONLY)
        ===================== */}
        <AnimatePresence>
          {isActive && (
            <>
              {/* angled line */}
              <motion.div
                className="absolute bg-white"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 50, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "2px",
                  top: "-3px",
                  left: "18px",
                  transform: "rotate(-50deg)",
                  transformOrigin: "left center",
                }}
              />

              {/* straight line */}
              <motion.div
                className="absolute bg-white"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                style={{
                  height: "2px",
                  top: "-41px",
                  left: "50px",
                  transformOrigin: "left center",
                }}
              />

              {/* text */}
              <motion.div
                className="w-[250px] absolute left-40 top-[-75px]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.35, delay: 0.15 }}
              >
                <span className="block text-sm font-extrabold uppercase text-white tracking-wide">
                  {hotspot.title}
                </span>
                <p className="text-xs text-white/90 mt-1 leading-snug">
                  {hotspot.description}
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
