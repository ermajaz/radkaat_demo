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

  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: true, // smooth mapping
    onUpdate: (self) => {
      const progress = self.progress; // 0 → 1
      const index = Math.min(
        totalBikes - 1,
        Math.floor(progress * totalBikes)
      );
      setCurrentIndex(index);
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);


  return (
    <div ref={containerRef} className="relative z-10 bg-superblack">
      {/* Sticky showcase below the strip */}
      <div className="sticky w-full top-0 h-screen">
        <BikesStrip bike={bikesData[currentIndex]}/>
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
