"use client";

import { motion } from "framer-motion";

export default function BikeDetailsCard({ bike }: any) {
  return (
    <motion.div
      key={bike.id}  // When bike changes → animation triggers automatically
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        bg-[#121212]/95
        backdrop-blur-md 
        p-6
        rounded-[6px]
        w-[300px]
        border border-white/10
      "
    >
      {/* TITLE */}
      <span className="text-[24px] text-white font-semibold tracking-wide">
        {bike.uiName.toUpperCase()} M-10
      </span>

      {/* MODEL CODE */}
      <p className="text-[16px] text-stone mb-2">M10 ZE3 2026</p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-2"></div>

      {/* FRAME GEOMETRY */}
      <div className="mb-2">
        <p className="text-xs text-stone">Frame Geometry</p>
        <p className="text-[16px] text-white font-semibold mt-1">Trail-Optimized</p>
      </div>

      {/* TERRAIN TYPE */}
      <div className="mb-2">
        <p className="text-xs text-stone">Terrain Type</p>
        <p className="text-[16px] text-white font-semibold mt-1">Multi-Mountain</p>
      </div>

      {/* STABILITY */}
      <div className="mb-2">
        <p className="text-xs text-stone">Stability</p>
        <p className="text-[16px] text-white font-semibold mt-1">Rock-Solid</p>
      </div>

      {/* AGILITY */}
      <div>
        <p className="text-xs text-stone">Agility</p>
        <p className="text-[16px] text-white font-semibold mt-1">Cliff-Nimble</p>
      </div>
    </motion.div>
  );
}
