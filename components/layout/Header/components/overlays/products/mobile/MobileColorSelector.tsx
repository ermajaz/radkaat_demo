"use client";

import { motion } from "framer-motion";

export default function MobileColorSelector({
  colors,
  active,
  onSelect,
}: {
  colors: string[];
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="mt-6">
      <p className="text-sm text-white/60 uppercase tracking-wide mb-3">
        Available Colors
      </p>

      <div className="flex items-center gap-4">
        {colors.map((c) => {
          const selected = c === active;

          return (
            <motion.button
              key={c}
              whileTap={{ scale: 0.85 }}
              onClick={() => onSelect(c)}
              className="relative w-9 h-9 flex items-center justify-center"
            >
              {selected && (
                <motion.span
                  layoutId="colorGlow"
                  className="absolute w-9 h-9 rounded-full border-2 border-sandstorm"
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              )}
              <span
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: c }}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
