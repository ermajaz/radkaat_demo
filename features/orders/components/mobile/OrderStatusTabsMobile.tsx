"use client";

import { motion } from "framer-motion";

export default function OrderStatusTabsMobile({
  active,
  setActive,
  statuses,
}: {
  active: string;
  setActive: (s: any) => void;
  statuses: string[];
}) {
  return (
    <div className="flex gap-2 overflow-x-auto mt-4 pb-1 hide-scrollbar">
      {statuses.map((status) => {
        const isActive = active === status;
        return (
          <motion.button
            key={status}
            onClick={() => setActive(status)}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-1.5 rounded-full text-xs whitespace-nowrap
              border transition-all duration-300
              ${
                isActive
                  ? "bg-sandstorm text-black font-semibold border-sandstorm"
                  : "text-white/60 border-[#2a2a2a]"
              }
            `}
          >
            {status}
          </motion.button>
        );
      })}
    </div>
  );
}
