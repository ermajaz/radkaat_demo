"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

type Props = {
  features: Feature[];
};

export default function FeatureShowcaseMobile({ features }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const total = features.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 130}%`, // scroll distance for all features
          scrub: true,
          pin: true,
        },
      });

      // progress → change index dynamically
      tl.to({}, {
        duration: total,
        onUpdate: () => {
          const progress = tl.progress();
          const index = Math.min(
            total - 1,
            Math.floor(progress * total)
          );
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [features.length]);

  const activeFeature = features[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full h-screen overflow-hidden
        flex items-center justify-center
        bg-linear-to-b from-black via-[#0B0B0B] to-[#111]
        text-white
      "
    >
      {/* 🖼️ Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeFeature.image}
            alt={activeFeature.title}
            fill
            quality={100}
            className="object-cover brightness-[0.85] transition-all duration-700"
          />
          {/* Gradient overlays for text contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ✨ Overlay Content */}
      <motion.div
        key={activeFeature.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-20 px-6 text-center
          flex flex-col items-center justify-center
        "
      >
        {/* Label */}
        <span className="text-sandstorm text-[14px] uppercase font-semibold tracking-widest mb-1">
          {activeFeature.label}
        </span>

        {/* Title */}
        <h2 className="text-[28px] font-bold text-white mb-3 leading-tight">
          {activeFeature.title}
        </h2>

        {/* Points */}
        <ul className="text-[14px] text-gray-300 space-y-1 leading-relaxed max-w-[90%]">
          {activeFeature.points.map((p, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: j * 0.15 }}
            >
              {p}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 🌕 Background Glow */}
      <motion.div
        key={activeFeature.index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[300px] h-[300px] bg-[#E4D27C]/30 blur-[100px] rounded-full
        "
      />

      {/* 🔢 Corner Index */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end text-sandstorm/40 font-bold select-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeFeature.index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-[64px] leading-none font-extrabold"
          >
            {activeFeature.index.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        {/* Small counter like pagination */}
        <span className="text-[12px] mt-1 tracking-widest font-medium text-sandstorm/70">
          {activeIndex + 1} / {features.length}
        </span>
      </div>
    </section>
  );
}
