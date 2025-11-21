"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesFirstSectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !leftRef.current ||
      !rightRef.current ||
      !lettersRef.current
    )
      return;

    const letters = lettersRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // ✅ Phase 1: Start - Full bike (left) visible
    gsap.set(leftRef.current, { width: "100%" });
    gsap.set(rightRef.current, { width: "0%", opacity: 0 });

    // ✅ Phase 2: Reveal feature parts from the right → covering the full bike
    tl.to(leftRef.current, {
      width: "50%",
      duration: 1,
      ease: "power2.inOut",
    }).to(
      rightRef.current,
      {
        width: "50%",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    // ✅ Phase 3: Animate each letter upwards & fade out
    tl.to(
      letters,
      {
        y: -80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden touch-none"
    >
      {/* Sticky Scroll Container */}
      <div className="sticky top-0 h-screen w-full flex flex-row-reverse">
        {/* 🔹 Left Side (Now: Feature Parts — comes from right) */}
        <div
          ref={rightRef}
          className="relative flex items-center justify-center bg-black overflow-hidden"
        >
          <Image
            quality={100}
            src="/images/bikes/frameset.png"
            alt="Feature Parts"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔸 Right Side (Now: Full Bike Image — initial) */}
        <div
          ref={leftRef}
          className="relative flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Full Bike */}
          <Image
            quality={100}
            src="/images/bikes/feature-right.png"
            alt="Full Bike"
            width={700}
            height={600}
            className="w-full h-full object-cover"
          />

          {/* Animated "FEATURES" Text */}
          <div
            ref={lettersRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-sandstorm font-extrabold text-[64px] leading-[70px] sm:text-[88px] sm:leading-[100px] tracking-[20px] text-center drop-shadow-[0_0_15px_rgba(228,210,124,0.25)]">
              <div className="flex justify-center space-x-4">
                <span>F</span>
                <span>E</span>
                <span>A</span>
              </div>
              <div className="flex justify-center space-x-4">
                <span>T</span>
                <span>U</span>
                <span>R</span>
              </div>
              <div className="flex justify-center space-x-4">
                <span>E</span>
                <span>S</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
