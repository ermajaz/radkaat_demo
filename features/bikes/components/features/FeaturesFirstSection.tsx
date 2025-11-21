"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesFirstSection() {
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
        end: "+=200%", // extend scroll distance for animation
        scrub: true,
        pin: true,
      },
    });

    // Phase 1: Left covers full width
    gsap.set(leftRef.current, { width: "100%" });
    gsap.set(rightRef.current, { width: "0%", opacity: 0 });

    // Phase 2: Shrink left, reveal right
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

    // Phase 3: Animate letters upward
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
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex">
        {/* Left Side */}
        <div
          ref={leftRef}
          className="relative flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Image */}
          <Image
            quality={100}
            src="/images/bikes/frameset.png"
            alt="Bike Frame"
            width={600}
            height={600}
            className="w-full h-full object-cover"
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
        <div
          ref={rightRef}
          className="flex items-center justify-center bg-black overflow-hidden"
        >
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
