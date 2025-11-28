"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  index: number;
  label: string;
  title: string;
  points: string[];
  image: string;
};

export default function FeaturesSectionMobile({ features }: { features: Feature[] }) {
  const introRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* -------------------------------------------------------------
      🔥 INTRO ANIMATION — “FEATURES” letters rising
  ------------------------------------------------------------- */
  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;

    const letters = intro.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: intro,
          start: "top 85%",
        },
      }
    );
  }, []);

  /* -------------------------------------------------------------
      🔥 FEATURE ANIMATION — scroll-triggered card transitions
  ------------------------------------------------------------- */
  useEffect(() => {
    if (!featureRef.current) return;

    const total = features.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top top",
          end: `+=${total * 120}%`,
          scrub: true,
          pin: true,
        },
      });

      tl.to({}, {
        duration: total,
        onUpdate: () => {
          const p = tl.progress();
          const index = Math.min(total - 1, Math.floor(p * total));
          setActiveIndex(index);
        },
      });
    });

    return () => ctx.revert();
  }, [features.length]);

  const activeFeature = features[activeIndex];

  return (
    <section id="features" className="w-full bg-black text-white relative">

      {/* --------------------------------------------------
          📌 INTRO BLOCK — ONE SCREEN
      -------------------------------------------------- */}
      <div
        ref={introRef}
        className="
          w-full h-[85vh]
          flex flex-col items-center justify-center
          bg-superblack relative overflow-hidden px-6
        "
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 w-[300px] h-[300px] 
                        bg-sandstorm/10 blur-[100px]" />

        {/* Letter animation: "FEATURES" */}
        <div className="text-center">
          <div className="text-[52px] font-extrabold tracking-[14px] text-sandstorm drop-shadow-md">
            {"FEATURES".split("").map((ch, i) => (
              <span key={i} className="inline-block mr-1">
                {ch}
              </span>
            ))}
          </div>

          <p className="text-white/60 text-[14px] mt-4 tracking-wide">
            Dive into the technology behind your ride.
          </p>
        </div>
      </div>

      {/* --------------------------------------------------
          📌 FEATURE EXPERIENCE — FULL SCROLL STORY
      -------------------------------------------------- */}
      <section
        ref={featureRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={activeFeature.image}
              alt={activeFeature.title}
              fill
              className="object-cover brightness-[0.85]"
            />

            {/* Top-To-Bottom fade so text stays visible */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Foreground Content */}
        <motion.div
          key={activeFeature.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            absolute bottom-12 left-1/2 -translate-x-1/2
            z-20 w-[90%] text-center
            px-4
          "
        >
          {/* Label */}
          <span className="text-sandstorm text-[14px] uppercase font-semibold tracking-widest">
            {activeFeature.label}
          </span>

          {/* Title */}
          <h2 className="text-[28px] font-bold mt-1 leading-snug">
            {activeFeature.title}
          </h2>

          {/* Points */}
          <ul className="mt-3 text-[14px] text-gray-200 space-y-1 leading-relaxed">
            {activeFeature.points.map((p, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: j * 0.12 }}
              >
                {p}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Large background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          key={`glow-${activeFeature.index}`}
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[280px] h-[280px]
            bg-sandstorm/20 blur-[100px] rounded-full
          "
        />

        {/* Right side index indicator */}
        <div className="absolute bottom-5 right-5 text-right">
          <span className="text-[50px] font-extrabold text-sandstorm/40 leading-none">
            {activeFeature.index.toString().padStart(2, "0")}
          </span>
          <div className="text-[11px] text-sandstorm/80 mt-1 tracking-wide">
            {activeIndex + 1} / {features.length}
          </div>
        </div>
      </section>
    </section>
  );
}
