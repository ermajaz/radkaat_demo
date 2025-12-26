"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroDesktop() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------------
     Scroll progress (Hero only)
  --------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* ---------------------------------------------
     Parallax zoom on background
  --------------------------------------------- */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* ======================
           VIDEO BACKGROUND
      ====================== */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: bgScale }}
        className="absolute inset-0"
      >
        <video
          playsInline
          muted
          autoPlay
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/5.mp4" type="video/mp4" />
        </video>

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* ======================
           HERO CONTENT
      ====================== */}
      <motion.div
        className="
          absolute 
          top-[20%]
          left-1/2 
          -translate-x-1/2 
          z-20
          flex flex-col 
          items-center 
          text-center
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Image
            src="/images/website-logo.png"
            alt="Radkaat Logo"
            width={106}
            height={80}
            className="mb-1"
            priority
          />
        </motion.div>

        {/* BRAND NAME */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="text-[30px] font-extrabold tracking-wide text-white uppercase"
        >
          RADKAAT
        </motion.span>

        {/* TAGLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="
            text-[56px]
            font-bold
            uppercase
            text-sandstorm
            mt-1
            [text-shadow:1px_1px_0px_white,1px_-1px_0px_white,-1px_1px_0px_white,-1px_-1px_0px_white]
          "
        >
          #NOTHING BUT NOW
        </motion.h1>
      </motion.div>
    </section>
  );
}
