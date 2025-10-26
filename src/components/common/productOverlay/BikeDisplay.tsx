"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BikeOverlayDetails from "./BikeOverlayDetails";
import { OverlayBike } from "@/types";

export default function BikeDisplay({ bike }: { bike: OverlayBike }) {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 🔥 Cinematic Ambient Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_80%)]"
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/95" />

      {/* Glowing ambient light (animated) */}
      <motion.div
        className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle,rgba(255,180,80,0.12),transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🏍️ Full-Width Bike Image */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-contain object-center transition-transform duration-700 hover:scale-105"
          priority
          quality={100}
        />
      </motion.div>

      {/* 🧠 Overlayed Bike Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-0 left-0 w-full z-20"
      >
        {/* Glass overlay for contrast */}

        <div className="max-w-6xl mx-auto">
          <BikeOverlayDetails details={bike.details} />
        </div>
      </motion.div>
    </section>
  );
}
