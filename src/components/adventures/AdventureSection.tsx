"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AdventureSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/parallex.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/30 z-5 pointer-events-none"></div>
      {/* Google Gemini Effect Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Bicycle Adventures, Tours, Maps"
          description="Cycling adventures and cultural immersions across the Himalaya, curated by experts."
        />
      </div>
    </section>
  );
}
