"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface HeroToutProps {
  subtitle?: string;
  title: string;
}

export default function HeroTout({
  subtitle = "stories",
  title,
}: HeroToutProps) {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { bottom } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const fadePoint = windowHeight / 2;
      let progress = 0;

      if (bottom < windowHeight && bottom > fadePoint) {
        progress = 1 - (bottom - fadePoint) / (windowHeight - fadePoint);
      } else if (bottom <= fadePoint) {
        progress = 1;
      }

      controls.start({
        y: -progress * 120,
        opacity: 1 - progress,
        transition: { type: "tween", duration: 0.25, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center md:justify-end"
    >
      {/* Hero Content */}
      <motion.div
        className="
          relative z-10 
          flex flex-col items-center md:items-start justify-center md:justify-end 
          text-center md:text-left 
          px-6 sm:px-10 md:px-20 py-16 md:py-40
        "
        animate={controls}
        initial={{ y: 0, opacity: 1, scale: 1 }}
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              uppercase tracking-[6px] text-[#E4D27C] 
              text-sm sm:text-base md:text-lg font-semibold mb-4
            "
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold leading-snug max-w-3xl 
            tracking-[4px] md:tracking-[15px]
            text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
          "
        >
          {title}
        </motion.h1>
      </motion.div>

      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
