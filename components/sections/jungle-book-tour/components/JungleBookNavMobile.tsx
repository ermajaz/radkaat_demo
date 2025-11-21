"use client";

import { motion } from "framer-motion";

export default function JungleBookNavMobile({ destinations, activeIndex, onStoryClick }: any) {
  return (
    <motion.div
      className="px-4 py-6 bg-[#111]/90 backdrop-blur-xl border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-xl font-bold text-white mb-2">THE JUNGLE BOOK</h2>

      <div className="grid grid-cols-3 gap-3">
        {destinations.map((d: any, index: number) => (
          <div
            key={d.id}
            onClick={() => onStoryClick(index)}
            className={`cursor-pointer p-2 text-center rounded-md transition-all ${
              index === activeIndex ? "bg-sandstorm text-black" : "bg-black/40 text-white"
            }`}
          >
            <p className="text-xs font-semibold line-clamp-2">{d.title}</p>
            <p className="text-[10px] mt-1 opacity-80">{d.date}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
