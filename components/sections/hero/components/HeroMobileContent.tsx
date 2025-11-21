"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMobileContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center gap-6">
      {/* Logo */}
      <Image
        src="/images/website-logo.png"
        alt="Radkaat Logo"
        width={80}
        height={60}
        className="object-contain"
        priority
      />

      {/* Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[34px] font-extrabold text-sandstorm uppercase leading-tight"
      >
        #Nothing But Now
      </motion.h1>

      {/* Mobile Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center mt-4"
      >
        <Image
          src="/images/hero-cycle.png"
          alt="Radkaat Hero"
          width={600}
          height={400}
          className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
        />
      </motion.div>
    </div>
  );
}
