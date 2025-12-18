"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function HeroDesktop() {
  const heroRef = useRef(null);
  const [isVideo, setIsVideo] = useState(true); // <-- toggle state

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
      {/* BACKGROUND MEDIA WRAPPER */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: bgScale }}
        className="absolute inset-0 w-full h-full"
      >
        {/* VIDEO MODE */}
        {isVideo && (
          <motion.video
            key="video-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            playsInline
            muted
            autoPlay
            loop
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/5.mp4" type="video/mp4" />
          </motion.video>
        )}

        {/* IMAGE MODE */}
        {!isVideo && (
          <motion.div
            key="image-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero/hero-img-1.jpg"
              alt="Radkaat Hero Background"
              fill
              priority
              quality={100}
              className="
                object-cover 
                object-center 
                saturate-[1.35]
              "
            />
          </motion.div>
        )}
      </motion.div>

      {/* ======================
           CONTENT ON TOP
      ====================== */}
      <motion.div
        className="
          absolute 
          top-[20%]
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
            src={`${isVideo ? "/images/website-logo.png" : "/images/hero/Radkaat-1.png"}`}
            alt="Radkaat Logo"
            width={106}
            height={80}
            className="mb-1"
          />
        </motion.div>

        {/* RADKAAT WORD */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className={`text-[30px] font-extrabold tracking-wide ${isVideo ? "text-white" : "text-black"} uppercase`}
        >
          RADKAAT
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`
            text-[56px] 
            font-bold
            uppercase 
            text-sandstorm
            mt-1
            ${isVideo ? "[text-shadow:1px_1px_0px_white,1px_-1px_0px_white,-1px_1px_0px_white,-1px_-1px_0px_white]":"[text-shadow:2px_2px_0px_black,2px_-2px_0px_black,-2px_2px_0px_black,-2px_-2px_0px_black]"}
            
          `}
        >
          #NOTHING BUT NOW
        </motion.h1>

        {/* SUBTEXT */}
        {/* <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className={`text-[20px] font-medium tracking-wide mt-1 ${isVideo ? "text-white" : "text-black"}`}
        >
          cycling / trekking – hiking – campaign / trail running / paragliding / rafting
        </motion.span> */}
      </motion.div>

      {/* ======================
           TOGGLE SWITCH
      ====================== */}
      <motion.button
        onClick={() => setIsVideo((prev) => !prev)}
        className="
          absolute bottom-10 left-10 
          z-30 
          bg-white/20 backdrop-blur-md cursor-pointer
          px-4 py-2 
          rounded-full 
          flex items-center gap-2
          border border-white/30
          hover:bg-white/30
          transition-all
        "
        whileTap={{ scale: 0.95 }}
      >
        {/* ICON */}
        <span className="text-white text-sm">
          {isVideo ? "Switch to Image" : "Switch to Video"}
        </span>
      </motion.button>
    </section>
  );
}
