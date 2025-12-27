"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollIndicator from "@/components/common/ScrollIndicator";

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
     Background motion
  --------------------------------------------- */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0]);

  /* ---------------------------------------------
     Global fade-out
  --------------------------------------------- */
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 1, 0]
  );

  /* ---------------------------------------------
     Individual parallax (🔥 key upgrade)
  --------------------------------------------- */
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const brandY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const scrollHintY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  /* ---------------------------------------------
     Tagline micro-interactions
  --------------------------------------------- */
  const taglineScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const taglineTracking = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0.12em", "0.32em"]
  );

  /* ---------------------------------------------
     Exit blur (very subtle)
  --------------------------------------------- */
  const contentBlur = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["blur(0px)", "blur(0px)", "blur(4px)"]
  );

  /* ---------------------------------------------
     Vignette
  --------------------------------------------- */
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.15, 0.35, 0.6]
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* ======================
           VIDEO BACKGROUND
      ====================== */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 will-change-transform"
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

      </motion.div>

      {/* ======================
           HERO CONTENT
      ====================== */}
      <motion.div
        style={{
          opacity: contentOpacity,
          filter: contentBlur,
        }}
        className="
          absolute 
          top-[22%]
          left-1/2 
          -translate-x-1/2 
          z-20
          flex flex-col 
          items-center 
          text-center
          will-change-transform
        "
      >
        {/* LOGO */}
        <motion.div
          style={{ y: logoY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="/images/website-logo.png"
            alt="Radkaat Logo"
            width={106}
            height={80}
            priority
          />
        </motion.div>

        {/* BRAND */}
        <motion.span
          style={{ y: brandY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1 }}
          className="mt-1 text-[30px] font-extrabold tracking-wide text-white uppercase"
        >
          RADKAAT
        </motion.span>

        {/* TAGLINE */}
        <motion.h1
          style={{
            y: taglineY,
            scale: taglineScale,
            letterSpacing: taglineTracking,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="
            text-[56px]
            font-bold
            uppercase
            text-sandstorm
            mt-2
            will-change-transform
            [text-shadow:1px_1px_0px_white,1px_-1px_0px_white,-1px_1px_0px_white,-1px_-1px_0px_white]
          "
        >
          #NOTHING BUT NOW
        </motion.h1>
      </motion.div>
      {/* base overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* vignette */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, black 85%)",
          opacity: vignetteOpacity,
        }}
      />

      {/* 🔥 bottom fade */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
          opacity: useTransform(scrollYProgress, [0, 0.6, 1], [0.6, 0.8, 1]),
        }}
      />

      {/* ======================
           SCROLL INDICATOR
      ====================== */}
      <motion.div
        style={{
          y: scrollHintY,
          opacity: contentOpacity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
