"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SupportParallax = ({ image }: { image: string }) => {
  const { scrollY } = useScroll();

  // Parallax + subtle zoom
  const y = useTransform(scrollY, [0, 300], [0, -120]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
      {/* Scaled background image (clipped by parent) */}
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          y,
          scale,
        }}
        className="absolute inset-0 bg-center bg-cover will-change-transform"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-transparent" />

      {/* Text */}
      <OverlayText />
    </div>
  );
};

const OverlayText: React.FC = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
    <motion.h1
      className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-xl text-center leading-tight"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Welcome to <span className="text-rust">Radkaat</span> Support
    </motion.h1>
    <motion.p
      className="mt-4 text-base md:text-xl text-gray-200 text-center max-w-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      Find answers, explore resources, and get the help you need.
    </motion.p>
  </div>
);

export default SupportParallax;
