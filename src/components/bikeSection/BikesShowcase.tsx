"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bikesData } from "@/utils/data"; // your 3 bikes data
import Showcase from "./Showcase";

gsap.registerPlugin(ScrollTrigger);

export default function BikesShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".bike-section");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentIndex(i),
        onEnterBack: () => setCurrentIndex(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky showcase */}
      <div className="sticky w-full top-0 h-screen">
        <Showcase bike={bikesData[currentIndex]} />
      </div>

      {/* Fake sections to trigger scroll */}
      {bikesData.map((_, i) => (
        <div key={i} className="bike-section h-screen w-full" />
      ))}
    </div>
  );
}
