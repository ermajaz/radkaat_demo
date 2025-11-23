"use client";

import ScrollIndicator from "@/components/common/ScrollIndicator";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ApparelHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-superblack text-white flex items-center"
    >
      {/* ✅ Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/apparel-hero.png"
          alt="Radkaat apparel hero"
          fill
          priority
          className="object-cover object-center scale-[1.15]"
        />
      </motion.div>

      {/* ✅ Cinematic Spotlight */}
      <motion.div
        style={{ opacity: spotlightOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] mix-blend-overlay pointer-events-none"
      />

      {/* ✅ Dark Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/10" />

      {/* ✅ CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-24 flex flex-col md:flex-row items-center gap-14">

        {/* ✅ Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sandstorm">
            Radkaat Apparel
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-4 text-5xl md:text-7xl font-light leading-tight"
          >
            Built for the ride.
            <br />
            <span className="font-semibold text-white">Engineered for movement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-6 text-neutral-300 text-lg max-w-xl"
          >
            Aero-tuned jerseys and all-weather shells crafted to move like a second skin — from race day to night rides.
          </motion.p>
        </motion.div>

        {/* ✅ Static Premium Product Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
            <Image
              src="/images/apparel.jpg"
              alt="Radkaat jersey"
              fill
              className="object-cover rounded-xl"
            />

            {/* ✅ Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 left-6 right-6 h-20 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 px-4 flex items-center justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Featured
                </p>
                <p className="text-sm font-semibold">Radkaat Pro Jersey</p>
              </div>
              <p className="text-xs text-neutral-300">Aero Fit • Race Ready</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
