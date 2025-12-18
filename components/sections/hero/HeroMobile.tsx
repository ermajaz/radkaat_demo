"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroMobile() {
  const heroRef = useRef(null);

  // Track scroll progress for zoom effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // zoom ends before leaving viewport
  });

  // Smooth zoom from 1 → 1.25
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden md:hidden" // mobile only
    >
      {/* BACKGROUND IMAGE WITH ZOOM ON SCROLL */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: bgScale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero/hero-img-1.jpg"
          alt="Radkaat Hero Background"
          fill
          priority
          quality={100}
          className="
            object-cover 
            object-[30%]
            saturate-[1.3] 
            brightness-[0.95]
          "
        />
      </motion.div>

      {/* OVERLAY CONTENT */}
      <motion.div
        className="
          absolute 
          top-[22%]
          w-full 
          flex flex-col 
          items-center 
          text-center 
          z-20 px-4
        "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image
            src="/images/hero/Radkaat-1.png"
            alt="Radkaat Logo"
            width={80}
            height={40}
            className="mb-1"
          />
        </motion.div>

        {/* RADKAAT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-[22px] font-extrabold tracking-wide text-black uppercase"
        >
          RADKAAT
        </motion.div>

        {/* MAIN TAGLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="
            text-[38px]
            leading-tight
            font-extrabold
            uppercase 
            text-sandstorm
            mt-2
            [text-shadow:2px_2px_0px_black,2px_-2px_0px_black,-2px_2px_0px_black,-2px_-2px_0px_black]
          "
        >
          #NOTHING BUT NOW
        </motion.h1>

        {/* SUBTEXT */}
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="
            text-[14px] 
            font-medium 
            text-black 
            tracking-wide 
            mt-3
            leading-relaxed
          "
        >
          cycling / trekking / hiking / campaign / trail running / paragliding / rafting
        </motion.div> */}
      </motion.div>

      {/* BLACK GRADIENT FADE AT THE BOTTOM FOR BETTER TEXT VISIBILITY */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-linear-to-t from-black/70 to-transparent z-10" />
    </section>
  );
}
