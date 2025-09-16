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

      // Parallax effect: move faster as it scrolls out, fade out as bottom reaches middle
      const fadePoint = windowHeight / 2;
      let progress = 0;

      if (bottom < windowHeight && bottom > fadePoint) {
        progress = 1 - (bottom - fadePoint) / (windowHeight - fadePoint);
      } else if (bottom <= fadePoint) {
        progress = 1;
      }

      // Parallax: move up to 120px instead of 60px for stronger effect
      controls.start({
        y: -progress * 120, // Parallax move up
        opacity: 1 - progress, // Fade out
        transition: { type: "tween", duration: 0.2 },
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-20 md:py-40">
        <motion.div
          className="text-white space-y-10"
          animate={controls}
          initial={{ y: 0, opacity: 1, scale: 1 }}
        >
          {subtitle && (
            <p className="uppercase tracking-widest text-base md:text-lg font-semibold">
              {subtitle}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-3xl font-bold leading-snug !tracking-[15px]">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}