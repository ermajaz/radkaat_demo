"use client";

import { motion } from "framer-motion";

export default function MobileSpecAccordion({ specs, onViewMore }: any) {
  return (
    <div className="mt-6">
      {specs.map((s: any) => (
        <motion.div
          key={s.key}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 px-4 py-3"
        >
          <p className="text-xs text-white/50 uppercase">{s.label}</p>
          <p className="text-sm mt-1 text-white">{s.value}</p>
        </motion.div>
      ))}

      <button
        onClick={onViewMore}
        className="w-full text-center py-3 text-xs text-sandstorm"
      >
        View Full Specs →
      </button>
    </div>
  );
}
