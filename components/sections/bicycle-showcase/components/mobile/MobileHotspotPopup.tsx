"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  hotspot: {
    title: string;
    description: string;
  };
  onClose: () => void;
};

export default function MobileHotspotPopup({ hotspot, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-end justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md mx-auto rounded-t-2xl bg-[#121212] border-t border-white/10 p-4"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            Tech Detail
          </p>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/5 text-white/70"
          >
            <X size={18} />
          </button>
        </div>

        <h3 className="text-sm font-semibold text-white mb-1">
          {hotspot.title}
        </h3>
        <p className="text-xs text-white/70 leading-relaxed">
          {hotspot.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
