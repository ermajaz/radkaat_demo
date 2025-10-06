"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesFirstSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lettersRef.current) return;

    const letters = lettersRef.current.querySelectorAll("span");

    // Animate only the text letters
    gsap.fromTo(
      letters,
      { y: 0, opacity: 1 },
      {
        y: -80,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=70 top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      {/* Sticky container */}
      <div className="sticky top-[70px] h-[calc(100vh-70px)] w-full flex items-center justify-between">
        {/* Left Side */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* Background Image */}
          <Image
            quality={100}
            src="/images/bikes/frameset.png"
            alt="Bike Frame"
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />

          {/* Overlay Text */}
          <div
            ref={lettersRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-sandstorm font-extrabold text-6xl md:text-[112px] leading-[150px] tracking-[35px] text-center">
              {/* Row 1: FEA */}
              <div className="flex justify-center space-x-6">
                <span>F</span>
                <span>E</span>
                <span>A</span>
              </div>
              {/* Row 2: TUR */}
              <div className="flex justify-center space-x-6">
                <span>T</span>
                <span>U</span>
                <span>R</span>
              </div>
              {/* Row 3: ES */}
              <div className="flex justify-center space-x-6">
                <span>E</span>
                <span>S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            quality={100}
            src="/images/bikes/feature-right.png"
            alt="Bike"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
