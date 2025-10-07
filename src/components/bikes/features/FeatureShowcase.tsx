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
    <section className="w-full flex bg-superblack text-stone">
      {/* LEFT SIDE (Snap Scroll) */}
      <div
        ref={leftRef}
        className="w-1/2 mt-[70px] px-16 snap-y snap-mandatory"
      >
        {features.map((f, i) => (
          <div
            key={i}
            data-index={i}
            className="feature-block h-[calc(100vh-70px)] flex flex-col justify-start pt-10 relative snap-start"
          >
            {/* Label */}
            <h2 className="text-[35px] tracking-wide font-semibold uppercase text-sandstorm mb-4">
              {f.label}
            </h2>

            {/* Title */}
            <span className="text-[30px] font-extrabold leading-snug mb-4">
              {f.title}
            </span>

            {/* Bullet Points */}
            <ul className="list-disc text-[22px] list-inside space-y-2 leading-relaxed">
              {f.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>

            {/* Large Index Number */}
            <span className="absolute bottom-10 left-0 text-[110px] font-extrabold text-stone opacity-40 leading-none">
              {f.index.toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (Sticky Image) */}
      <div className="w-1/2 h-[calc(100vh-70px)] mt-[70px] sticky top-[70px] flex items-center justify-center">
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
