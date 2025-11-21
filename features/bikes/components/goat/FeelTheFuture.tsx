// components/FeelTheFuture.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeelTheFuture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animate left text
        gsap.from(textRef.current, {
          x: -150,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // animation starts when section enters viewport
          },
        });

        // Animate right image
        gsap.from(imgRef.current, {
          x: 150,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }, sectionRef);

      return () => ctx.revert(); // cleanup on unmount
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-superblack text-white py-20 pl-10 overflow-hidden"
    >
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left Section - Text */}
        <div
          ref={textRef}
          className="max-w-[42%] flex flex-col items-start space-y-3"
        >
          <span className="text-5xl md:text-7xl font-extrabold mb-8 leading-18">
            FEEL THE <br /> FUTURE
          </span>
          <p className="text-[24px] leading-relaxed font-medium text-stone">
            The Serow is a mountain goat found across the rocky mid-range
            mountains of East India, Taiwan, and the Philippines. Known for
            their sure-footedness, agility, and strength, Serows thrive in tough
            terrains where balance and endurance matter most. Inspired by this
            remarkable creature, the Serow bike is built with a high-end alloy
            frame, combining lightweight agility with rugged durability. Just
            like its namesake, it’s designed to handle steep climbs, sharp
            descents, and unpredictable trails with absolute confidence. Whether
            you’re chasing speed, control, or resilience on challenging tracks,
            the Serow is your nimble partner for the mountains.
          </p>
        </div>

        {/* Right Section - Image */}
        <div
          ref={imgRef}
          className="relative w-[685px] h-[400px] md:h-[500px] lg:h-[641px]"
        >
          <Image
            quality={100}
            src="/images/bikes/goat-img.png"
            alt="Serow Bike with Mountain Goat"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
