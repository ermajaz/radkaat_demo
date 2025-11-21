"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute right-0 bottom-0 w-[60%] h-full flex items-end justify-end"
    >
      <Image
        src="/images/hero-cycle.png"
        alt="Radkaat Hero Bike"
        width={1100}
        height={700}
        className="object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        priority
      />
    </motion.div>
  );
}
