"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroDesktop() {
  const heroRef = useRef(null);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], 
  });

  // Background zoom increases on scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH ENTRY + SCROLL ZOOM */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: bgScale }}  // <-- scroll-based zoom
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero/hero-img-1.jpg"
          alt="Radkaat Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center saturate-[1.35]"
        />
      </motion.div>

      {/* CONTENT BLOCK WITH SMOOTH APPEAR */}
      <motion.div
        className="
          absolute 
          top-[14%]
          left-1/2 
          -translate-x-1/2 
          flex flex-col 
          items-center 
          text-center
          z-20
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
            src="/images/hero/Radkaat-1.png"
            alt="Radkaat Logo"
            width={106}
            height={80}
            className="mb-1"
          />
        </motion.div>

        {/* RADKAAT TEXT */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="text-[30px] font-extrabold tracking-wide text-black uppercase"
        >
          RADKAAT
        </motion.span>

        {/* HEADLINE */}
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
            [text-shadow:2px_2px_0px_black,2px_-2px_0px_black,-2px_2px_0px_black,-2px_-2px_0px_black]
          "
        >
          #NOTHING BUT NOW
        </motion.h1>

        {/* SUBTEXT */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className="text-[20px] font-medium text-black tracking-wide mt-1"
        >
          cycling/ trekking – hiking– campaign/ trail running/ paragliding/ Rafting
        </motion.span>
      </motion.div>
    </section>
  );
}
