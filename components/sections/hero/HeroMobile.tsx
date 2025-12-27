"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollIndicator from "@/components/common/ScrollIndicator";

export default function HeroMobile() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------------
     Scroll progress (Hero only)
  --------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* ---------------------------------------------
     Background motion (mobile-safe)
  --------------------------------------------- */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  /* ---------------------------------------------
     Content parallax (lighter)
  --------------------------------------------- */
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const brandY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-svh overflow-hidden bg-superblack"
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

        {/* base overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 40%, black 99%)",
          }}
        />

        {/* bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ======================
           HERO CONTENT
      ====================== */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="
          absolute
          top-[26%]
          w-full
          z-20
          flex flex-col
          items-center
          text-center
          px-4
          will-change-transform
        "
      >
        {/* LOGO */}
        <motion.div style={{ y: logoY }}>
          <Image
            src="/images/website-logo.png"
            alt="Radkaat Logo"
            width={78}
            height={38}
            priority
          />
        </motion.div>

        {/* BRAND */}
        <motion.div
          style={{ y: brandY }}
          className="mt-1 text-[22px] font-extrabold tracking-wide text-white uppercase"
        >
          RADKAAT
        </motion.div>

        {/* TAGLINE */}
        <motion.h1
          style={{ y: taglineY }}
          className="
            text-[34px]
            leading-tight
            font-extrabold
            uppercase
            text-sandstorm
            mt-2
            [text-shadow:1px_1px_0px_white,1px_-1px_0px_white,-1px_1px_0px_white,-1px_-1px_0px_white]
          "
        >
          #NOTHING BUT NOW
        </motion.h1>
      </motion.div>
    </section>
  );
}
