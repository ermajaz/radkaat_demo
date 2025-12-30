"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileHeroPanel() {
  return (
    <div className="absolute top-0 left-0 w-full h-[45%] px-6 pt-20 z-20">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-[40px] leading-tight font-semibold"
      >
        Experience
        <br />
        Collaborations
      </motion.h2>

      {/* ARROW */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute right-6 top-40"
      >
        <Image
          src="/images/experience/collaborations-arrow.png"
          alt="arrow"
          width={120}
          height={120}
          className="rotate-180"
        />
      </motion.div>
    </div>
  );
}
