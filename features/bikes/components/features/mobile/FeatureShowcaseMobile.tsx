"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  index: number;
  label: string;
  title: string;
  points: string[];
  image: string;
};

export default function FeatureShowcaseMobile({
  features,
}: {
  features: Feature[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* -------------------------------------------------------------
    🔥 SCROLL-BASED FEATURE SWITCHING
  ------------------------------------------------------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const total = features.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 180}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to({}, {
        duration: total,
        onUpdate: () => {
          const p = tl.progress();
          const index = Math.round(p * (total - 1));
          setActiveIndex(index);
        }
      });
    });

    return () => ctx.revert();
  }, [features.length]);

  const active = features[activeIndex];

  /* -------------------------------------------------------------
    🎨 PARALLAX VARIANTS
  ------------------------------------------------------------- */
  const imgVariants: Variants = {
    initial: { scale: 1.08, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    },
    exit: {
      scale: 0.96,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };


  return (
    <section
      ref={sectionRef}
      className="
        relative h-[90vh] w-full overflow-hidden
        bg-superblack text-white touch-none
      "
    >
      {/* -------------------------------------------------------------
          🖼️ FULLSCREEN BACKGROUND IMAGE (CINEMATIC LAYER)
      ------------------------------------------------------------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.image}
          variants={imgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover object-center"
            quality={100}
          />

          {/* Subtle spotlight toward bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[200px] bg-black/50 blur-[80px]" />
        </motion.div>
      </AnimatePresence>

      {/* -------------------------------------------------------------
          🌕 AMBIENT GLOW (changes slightly every slide)
      ------------------------------------------------------------- */}
      <motion.div
        key={`glow-${active.index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.4 }}
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2
          w-[260px] h-[260px]
          bg-sandstorm/30 blur-[100px] rounded-full z-0
        "
      />

      {/* -------------------------------------------------------------
          ✨ FEATURE CONTENT (Glass panel)
      ------------------------------------------------------------- */}
      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="
          absolute bottom-38 left-1/2 -translate-x-1/2
          w-[90%]
          text-center z-20
        "
      >
        {/* Label */}
        <span className="text-sandstorm text-[13px] uppercase tracking-widest font-semibold block mb-1">
          {active.label}
        </span>

        {/* Title */}
        <h2 className="text-[26px] font-bold leading-tight mb-3">
          {active.title}
        </h2>

        {/* Feature Points */}
        <ul className="text-[14px] text-gray-200 space-y-1 leading-relaxed">
          {active.points.map((p, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              {p}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* -------------------------------------------------------------
          📍 SLIDE INDEX + PROGRESS DOTS
      ------------------------------------------------------------- */}
      <div className="absolute bottom-18 left-6 flex flex-col items-start gap-3 z-30">
        {/* Current index big */}
        <span className="text-[44px] text-sandstorm/40 font-extrabold leading-none">
          {String(active.index).padStart(2, "0")}
        </span>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {features.map((_, i) => (
            <div
              key={i}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${activeIndex === i ? "bg-sandstorm" : "bg-white/20"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
