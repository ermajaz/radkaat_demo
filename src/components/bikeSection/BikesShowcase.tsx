"use client";
import { bikesData } from "@/utils/data";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import BikeText from "./BikeText";
import BikeImage from "./BikeImage";
import BikeSpecs from "./BikeSpecs";
import { Button } from "../ui/button";

export default function BikesShowcase() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [currentBike, setCurrentBike] = useState(0);

  // raw scroll (used for parallax)
  const scrollY = useMotionValue(0);
  // normalized progress within this section [0..1]
  const progress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = rect.top + scrollPosition;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // set raw scroll for parallax
      scrollY.set(scrollPosition);

      // normalized progress inside section (0..1)
      const scrollInside = scrollPosition - sectionTop + windowHeight * 0.5;
      const p = Math.min(Math.max(scrollInside / sectionHeight, 0), 1);
      progress.set(p);

      // current bike (with the threshold behaviour you already had)
      const perBike = sectionHeight / bikesData.length;
      const threshold = perBike * 0.3;
      let index = Math.floor((scrollInside - threshold) / perBike);
      if (index < 0) index = 0;
      if (index >= bikesData.length) index = bikesData.length - 1;
      setCurrentBike(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // run at mount to pick up initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, progress]);

  // parallax offsets (kept)
  const yOffsetImage = useTransform(scrollY, [0, 1000], [0, 50]);
  const yOffsetModel = useTransform(scrollY, [0, 1000], [0, -20]);

  /**
   * SEGMENT FILL LOGIC
   * - We have 3 equal segments (each represents 1/3 of total height)
   * - Each segment's fill percentage is computed from the global progress:
   *     seg1: progress 0.00 -> 0%, 0.33 -> 100%
   *     seg2: progress 0.33 -> 0%, 0.66 -> 100%
   *     seg3: progress 0.66 -> 0%, 1.00 -> 100%
   * - We compute numeric percent [0..100] and then convert to "XX%" string.
   * - useSpring smooths changes.
   */
  const oneThird = 1 / 3;

  const seg1Pct = useTransform(progress, (p) => {
    if (p <= 0) return 0;
    if (p >= oneThird) return 100;
    return (p / oneThird) * 100;
  });

  const seg2Pct = useTransform(progress, (p) => {
    if (p <= oneThird) return 0;
    if (p >= oneThird * 2) return 100;
    return ((p - oneThird) / oneThird) * 100;
  });

  const seg3Pct = useTransform(progress, (p) => {
    if (p <= oneThird * 2) return 0;
    if (p >= 1) return 100;
    return ((p - 2 * oneThird) / oneThird) * 100;
  });

  // smooth the numeric values for nicer animation
  const seg1Spring = useSpring(seg1Pct, { stiffness: 200, damping: 25 });
  const seg2Spring = useSpring(seg2Pct, { stiffness: 200, damping: 25 });
  const seg3Spring = useSpring(seg3Pct, { stiffness: 200, damping: 25 });

  // convert numeric springs to percent strings for CSS height
  const seg1Height = useTransform(seg1Spring, (v) => `${v}%`);
  const seg2Height = useTransform(seg2Spring, (v) => `${v}%`);
  const seg3Height = useTransform(seg3Spring, (v) => `${v}%`);

  return (
    <section
      ref={containerRef}
      className="relative text-white px-6 md:px-16"
      style={{ minHeight: `${bikesData.length * 100}vh` }}
    >
      {/* Vertical progress bar (left) */}
      <div className="absolute top-0 left-0 bottom-0 w-[8px] flex flex-col gap-[2px] z-30">
        {/* Yellow (top third) */}
        <motion.div
          className="absolute left-0 top-0 w-full"
          style={{ height: seg1Height, backgroundColor: "#c6b783" }}
        />
        <motion.div
          className="absolute left-0 top-0 w-full"
          style={{ height: seg2Height, backgroundColor: "#516316" }}
        />
        <motion.div
          className="absolute left-0 top-0 w-full"
          style={{ height: seg3Height, backgroundColor: "#8d363b" }}
        />
      </div>

      <div className="sticky top-0 flex justify-center items-center h-screen z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full -mt-20 gap-10 lg:gap-16">
          <BikeText bike={bikesData[currentBike]} />

          <BikeImage
            bike={bikesData[currentBike]}
            yOffsetImage={yOffsetImage as unknown as MotionValue<number>}
            yOffsetModel={yOffsetModel as unknown as MotionValue<number>}
          />

          <BikeSpecs bike={bikesData[currentBike]} />
        </div>

        {/* Sticky CTA button */}
        <div className="absolute bottom-2 left-0 w-full z-20">
          <Button className="relative w-full py-[30px] text-lg md:text-xl cursor-pointer rounded-none font-bold text-black bg-sandstorm hover:brightness-90 shadow-lg flex items-center justify-center gap-2 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE THE MODEL <ArrowRight className="w-5 h-5" />
            </span>
            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/20 z-0"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
