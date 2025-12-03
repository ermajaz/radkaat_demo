"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BikesIntroCinematic() {
  const { scrollYProgress } = useScroll();

  // Cinematic transitions
  const fadeOut = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const moveUp = useTransform(scrollYProgress, [0, 0.25], [0, -150]);
  const blur = useTransform(scrollYProgress, [0, 0.25], ["0px", "12px"]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.15]);

  return (
    <motion.section 
      style={{ opacity: fadeOut }}
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f0f_0%,#000_70%)] opacity-80" />

      {/* Subtle atmospheric noise */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-soft-light"></div>

      {/* Cinematic text */}
      <motion.h1
        style={{ y: moveUp, filter: blur, scale }}
        className="
          text-center font-black uppercase tracking-[0.12em]
          text-white leading-[0.9] select-none pointer-events-none
        "
      >
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="block text-[10vw]"
        >
          Introducing
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="block text-[18vw] text-sandstorm"
        >
          GOAT
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="block text-[10vw]"
        >
          Series
        </motion.span>
      </motion.h1>
    </motion.section>
  );
}
