"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Bike } from "../../utils/bicycle-showcase";

type Props = {
  bike: Bike;
  onClose: () => void;
};

export default function Mobile360Viewer({ bike, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] bg-black/95 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* header */}
      <div className="h-12 px-4 flex items-center justify-between border-b border-white/10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          {bike.uiName} / 360°
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded-full bg-white/10 text-white/80"
        >
          <X size={18} />
        </button>
      </div>

      {/* viewer area */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md h-[260px]">
          <Image
            src={bike.image}
            alt={bike.uiName}
            fill
            className="object-contain"
          />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/60 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            Drag / rotate — integrate 360 frames here
          </div>
        </div>
      </div>
    </motion.div>
  );
}
