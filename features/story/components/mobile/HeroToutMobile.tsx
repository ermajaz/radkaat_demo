"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Tour } from "@/features/story/types/story.types";

interface HeroToutMobileProps {
  subtitle?: string;
  title: string;
  tour: Tour;
}

export default function HeroToutMobile({
  subtitle = "stories",
  title,
  tour,
}: HeroToutMobileProps) {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [forceFade, setForceFade] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  /* ---------------------------------------------
     Force image after 6s (video → image)
  --------------------------------------------- */
  useEffect(() => {
    const t = setTimeout(() => setForceFade(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const handleVideoError = () => setCanPlayVideo(false);
  const fadeToImage = forceFade || !canPlayVideo;

  /* ---------------------------------------------
     Scroll animation — FOREGROUND ONLY
  --------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(
        Math.max((vh - rect.bottom) / (vh * 0.5), 0),
        1
      );

      controls.start({
        y: -progress * 60,
        opacity: 1 - progress,
        transition: { duration: 0.2, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <div
      ref={sectionRef}
      className="
        relative w-full
        h-[700px]
        overflow-hidden
        flex flex-col justify-end
        bg-black
      "
    >
      {/* ------------------------------
         🎥 VIDEO (PLAYS FIRST)
      ------------------------------ */}
      {canPlayVideo && (
        <motion.video
          playsInline
          muted
          autoPlay
          loop
          onError={handleVideoError}
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeToImage ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            absolute inset-0 w-full h-full
            object-cover z-0
            will-change-transform transform-none
          "
          style={{ transform: "none" }}
        >
          <source src={tour.video} type="video/webm" />
        </motion.video>
      )}

      {/* ------------------------------
         🖼 IMAGE (ONLY AFTER VIDEO)
      ------------------------------ */}
      <motion.div
        className="
          absolute inset-0 z-0
          will-change-transform transform-none
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeToImage ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transform: "none" }}
      >
        <Image
          src={tour.leftImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ------------------------------
         🌑 GRADIENT OVERLAY
      ------------------------------ */}
      <div
        className="
          absolute inset-0 z-10
          bg-linear-to-t
          from-black/80 via-black/40 to-transparent
        "
      />

      {/* ------------------------------
         📱 CONTENT (ONLY THIS MOVES)
      ------------------------------ */}
      <motion.div
        animate={controls}
        initial={{ y: 0, opacity: 1 }}
        className="
          relative z-20
          px-5 pb-[max(8rem,env(safe-area-inset-bottom))]
          flex flex-col gap-4
        "
      >
        {subtitle && (
          <p className="uppercase tracking-[0.4em] text-[#E4D27C] text-[11px] font-semibold">
            {subtitle}
          </p>
        )}

        <h1
          className="
            text-[clamp(28px,8vw,44px)]
            font-bold leading-tight
            tracking-[0.18em]
            text-white
            drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]
          "
        >
          {title}
        </h1>
      </motion.div>
    </div>
  );
}
