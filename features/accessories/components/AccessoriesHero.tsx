"use client";

import ScrollIndicator from "@/components/common/ScrollIndicator";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AccessoriesHero() {
  const ref = useRef<HTMLDivElement>(null);

  // 🔥 Parallax scroll background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-superblack text-white overflow-hidden flex items-center"
    >
      {/* 🌑 Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/accessories-hero.png"
          alt="Radkaat accessories hero"
          fill
          priority
          className="object-cover object-center scale-[1.15]"
        />
      </motion.div>

      {/* 🎯 Cinematic Spotlight */}
      <motion.div
        style={{ opacity: spotlightOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)] mix-blend-overlay pointer-events-none"
      />

      {/* ✅ CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-14 w-full">

        {/* 🔥 Left Text Reveal */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-sandstorm"
          >
            Radkaat Accessories
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="mt-4 text-5xl md:text-7xl font-light leading-tight"
          >
            Precision in every
            <br />
            <span className="font-semibold text-white">detail.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-6 text-neutral-300 text-lg max-w-xl"
          >
            Gear engineered to amplify performance — so seamless, it disappears while you ride.
          </motion.p>
        </motion.div>

        {/* ✅ Static Product */}
        <div className="flex-1 flex justify-center">
          <div
            className="relative w-80 h-80 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
          >
            <Image
              src="/images/accessories.jpg"
              alt="AeroGuard Helmet"
              fill
              className="object-contain rounded-xl"
            />

            {/* Glass Info Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-4 left-6 right-6 h-20 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 px-4 flex items-center justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Featured
                </p>
                <p className="text-sm font-semibold">AeroGuard Helmet</p>
              </div>
              <p className="text-xs text-neutral-300">Aero + Safety</p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* 🖤 Scroll Indicator */}
     <ScrollIndicator />

    </section>
  );
}
