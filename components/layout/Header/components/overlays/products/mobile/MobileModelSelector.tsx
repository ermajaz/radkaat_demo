"use client";

import { motion } from "framer-motion";

export default function MobileModelSelector({
  models = [],
  activeModel,
}: {
  models: string[];
  activeModel: string;
}) {
  return (
    <div className="mt-4">
      <p className="text-sm text-white/60 uppercase tracking-wide mb-2">
        Models
      </p>

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {models.map((m) => {
          const active = activeModel === m;

          return (
            <motion.button
              key={m}
              whileTap={{ scale: 0.9 }}
              className={`
                px-5 py-2 rounded-full transition-all text-sm font-medium
                ${active
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/60 border border-white/10"
                }
              `}
            >
              {m}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
