"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

export default function FeatureShowcase({ features }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = leftRef.current?.querySelectorAll(".feature-block");
    if (!blocks) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-70px 0px -80% 0px",
        threshold: 0,
      }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen flex bg-superblack text-stone">
      {/* LEFT SIDE (Snap Scroll) */}
      <div
        ref={leftRef}
        className="w-[55%] mt-[70px] px-12.5 snap-y snap-mandatory"
      >
        {features.map((f, i) => (
          <div
            key={i}
            data-index={i}
            className="feature-block h-[calc(100vh-70px)] flex flex-col justify-start pt-10 relative snap-start"
          >
            {/* Gradient Accent Line */}
            <div className="h-[3px] w-20 bg-linear-to-r from-white/90 to-transparent mb-6" />
            {/* Label */}
            <h2 className="text-[32px] tracking-wide font-semibold uppercase text-sandstorm mb-4">
              {f.label}
            </h2>

            {/* Title */}
            <span className="text-[30px] font-extrabold leading-snug mb-4">
              {f.title}
            </span>

            {/* Bullet Points */}
            <ul className="list-disc text-[24px] list-inside space-y-0 leading-relaxed">
              {f.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>

            {/* Large Index Number */}
            <span className="absolute bottom-10 left-0 text-[130px] font-extrabold text-stone opacity-40 leading-none">
              {f.index.toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (Sticky Image) */}
      <div className="w-[45%] h-[calc(100vh-70px)] mt-[70px] sticky top-[70px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={features[activeIndex].image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center items-center w-full h-full"
          >
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              width={600}
              height={600}
              className="object-contain h-full w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
