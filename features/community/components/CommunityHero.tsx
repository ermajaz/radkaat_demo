"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CommunityHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black"
    >
      {/* 🌄 Background Parallax Image */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/images/parallex.jpeg"
          alt="Radkaat Riders"
          fill
          quality={100}
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />
      </motion.div>

      {/* 🌌 Ambient Glow Layer */}
      <motion.div
        style={{ y: yGlow }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,160,80,0.2),transparent_70%)] blur-[120px] opacity-60"
      />

      {/* ✨ Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 0.4, 0],
              scale: [0.6, 1, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            className="absolute w-0.5 h-0.5 rounded-full bg-sandstorm/40"
          />
        ))}
      </div>

      {/* 🧭 Hero Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-20 space-y-8 max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-sandstorm via-white to-rust"
        >
          Radkaat Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 drop-shadow-md"
        >
          Unite. Ride. Explore. Share stories with{" "}
          <span className="text-rust font-semibold">Riders Who Live Now.</span>
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,170,100,0.3)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="group relative inline-flex items-center gap-3 overflow-hidden px-8 py-3 font-semibold text-white bg-linear-to-r from-rust to-sandstorm cursor-pointer"
        >
          <span className="relative z-10">Join the Movement</span>
          <ArrowRight
            size={18} 
            className="relative z-10 transition-transform group-hover:translate-x-1"
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "linear",
              delay: 1,
            }}
          />
        </motion.button>
      </motion.div>

      {/* 🕶 Soft edge fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-20" />
    </section>
  );
}
