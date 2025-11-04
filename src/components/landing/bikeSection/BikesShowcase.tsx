"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bikesData } from "@/utils/data";
import Showcase from "./Showcase";
import BikesStrip from "./BikesStrip";
// import BikesStrip from "./BikesStrip";

gsap.registerPlugin(ScrollTrigger);

export default function BikesShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalBikes = bikesData.length;

    let smoothIndex = 0; // smoothed value
    let animationFrame: number;

    const updateSmoothIndex = (targetIndex: number) => {
      // Lerp (linear interpolation)
      smoothIndex += (targetIndex - smoothIndex) * 0.08;
      const roundedIndex = Math.round(smoothIndex);
      setCurrentIndex(roundedIndex);
      animationFrame = requestAnimationFrame(() =>
        updateSmoothIndex(targetIndex)
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6, // gives smooth inertia scrolling
      snap: {
        snapTo: (value) => {
          // snap to the nearest section (based on scroll progress)
          const snapPoint =
            Math.round(value * (totalBikes - 1)) / (totalBikes - 1);
          return snapPoint;
        },
        duration: 0.8, // how long snapping takes
        ease: "power2.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress; // 0 → 1
        const index = gsap.utils.clamp(
          0,
          totalBikes - 1,
          progress * (totalBikes - 1)
        );
        cancelAnimationFrame(animationFrame);
        updateSmoothIndex(index);
      },
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-superblack">
      {/* Sticky showcase below the strip */}
      <div className="sticky w-full top-0 h-screen">
        <BikesStrip bike={bikesData[currentIndex]} />
        <Showcase
          bike={bikesData[currentIndex]}
          bikes={bikesData}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      {/* Fake sections to trigger scroll */}
      {bikesData.map((_, i) => (
        <div key={i} className="bike-section h-[130vh] w-full" />
      ))}
    </div>
  );
}
