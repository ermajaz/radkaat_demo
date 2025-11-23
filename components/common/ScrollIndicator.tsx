"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  let lastY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // ✅ Show on scroll up OR top of page
      if (currentY < lastY || currentY === 0) {
        setVisible(true);
      } else {
        // ✅ Hide on scroll down
        setVisible(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
    >
      {/* Pulse Ring */}
      <motion.div
        className="w-6 h-6 rounded-full border border-sandstorm/60 flex items-center justify-center"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 rounded-full bg-sandstorm" />
      </motion.div>

      {/* Text */}
      <motion.span
        className="text-sandstorm text-[10px] tracking-[0.4em]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        SCROLL
      </motion.span>

      {/* Arrow */}
      <motion.div
        className="text-sandstorm text-lg"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}
