"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroRightOverlay from "./HeroRightOverlay";
import Image from "next/image";
import { Trip } from "../types/story.types";

interface HeroToutProps {
  subtitle?: string;
  title: string;
  tour: Trip;
}

export default function HeroTout({ subtitle = "stories", title, tour }: HeroToutProps) {
  const controls = useAnimation();
  const overlayControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [forceFade, setForceFade] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  // 🔥 FORCE FADE AFTER 6 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceFade(true);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoError = () => setCanPlayVideo(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { bottom } = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      const fadePoint = winH * 0.45;
      let progress = 0;

      if (bottom < winH && bottom > fadePoint) {
        progress = 1 - (bottom - fadePoint) / (winH - fadePoint);
      } else if (bottom <= fadePoint) progress = 1;

      const opacityValue = 1 - progress;
      const translateValue = -progress * 120;

      controls.start({
        y: translateValue,
        opacity: opacityValue,
        transition: { duration: 0.25, ease: "easeOut" },
      });

      overlayControls.start({
        y: translateValue,
        opacity: opacityValue,
        transition: { duration: 0.25, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, overlayControls]);

  const fadeToImage = forceFade || !canPlayVideo;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] md:h-screen overflow-hidden flex flex-col justify-center md:justify-end"
    >
      {/* ------------------------------ */}
      {/* 🎥 DRONE VIDEO BACKGROUND */}
      {/* ------------------------------ */}
      {canPlayVideo && (
        <motion.video
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeToImage ? 0 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onError={handleVideoError}
          playsInline
          muted
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${process.env.NEXT_PUBLIC_AWS_ASSETS_BASE_URL}${tour.id}/${process.env.NEXT_PUBLIC_ITERNARY_VIDEO_URL}${tour.video}`} type="video/mp4" />
        </motion.video>
      )}

      {/* ------------------------------ */}
      {/* 🖼 IMAGE BACKGROUND */}
      {/* ------------------------------ */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeToImage ? 1 : 0 }}
        transition={{ ease: "easeOut" }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_AWS_ASSETS_BASE_URL}${tour.id}/${process.env.NEXT_PUBLIC_ITERNARY_BG_IMAGE_URL}${tour.leftImage}`}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark fade overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent z-1" />

      {/* ------------------------------ */}
      {/* LEFT HERO TITLES */}
      {/* ------------------------------ */}
      <motion.div
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
        className="relative z-5 flex flex-col px-6 sm:px-10 md:px-20 py-16 md:py-40 text-center md:text-left"
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="uppercase tracking-[6px] text-[#E4D27C] text-sm sm:text-base md:text-lg font-semibold mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold leading-snug max-w-3xl tracking-[4px] md:tracking-[15px]
            text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
          "
        >
          {title}
        </motion.h1>
      </motion.div>

      {/* ------------------------------ */}
      {/* RIGHT OVERLAY CONTENT */}
      {/* ------------------------------ */}
      <HeroRightOverlay tour={tour} controls={overlayControls} />
    </section>
  );
}
