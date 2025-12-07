"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundName({
  name,
  gradient,
}: {
  name: string;
  gradient: string;
}) {
  const [from, to] = gradient.split(",");

  const variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 0.45, y: 0 },
    exit: { opacity: 0, y: 60 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={name} // IMPORTANT → triggers animation on bike switch
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          absolute top-20 left-14
          text-[180px] font-extrabold 
          tracking-[45px] 
          select-none pointer-events-none 
          whitespace-nowrap
        "
        style={{
          backgroundImage: `linear-gradient(${from.trim()}, ${to.trim()})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {name}
      </motion.h1>
    </AnimatePresence>
  );
}
