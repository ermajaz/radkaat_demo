"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Bike } from "../../utils/bicycle-showcase";

type Props = {
  bike: Bike;
  onClose: () => void;
};

export default function MobileTechSheet({ bike, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[75] bg-black/90 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* header */}
      <div className="h-12 px-4 flex items-center justify-between border-b border-white/10 bg-[#111]">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
          {bike.uiName} / Full specs
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded-full bg-white/10 text-white/80"
        >
          <X size={18} />
        </button>
      </div>

      {/* content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {bike.specs.map((s: any) => (
          <div
            key={s.key}
            className="rounded-xl bg-[#141414] border border-white/10 p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-1">
              {s.label}
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
