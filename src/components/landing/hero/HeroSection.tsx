"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const firstLine = heroRef.current!.querySelectorAll<HTMLElement>(
        ".hero-line.first span"
      );
      const secondLine = heroRef.current!.querySelector<HTMLElement>(
        ".hero-line.second"
      );
      const pinTarget = heroRef.current!.querySelector(".pin-wrapper");

      const totalSpans = firstLine.length;

      const staggerTime = 0.08; // must match stagger
      const lastLetterTime = totalSpans * staggerTime; // when last letter finishes

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTarget,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // Animate first line letters upward
      tl.to(firstLine, {
        y: -100,
        opacity: 0,
        stagger: staggerTime,
        ease: "power3.inOut",
      });

      // Hide second line right after the first line finishes
      tl.to(
        secondLine,
        { opacity: 0, ease: "power3.inOut" },
        lastLetterTime - staggerTime // aligns with last letter finishing
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className = "") =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className={`${className} inline-block will-change-transform`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden z-10">
      <div className="pin-wrapper">
        <div className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/images/hero-img.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover absolute inset-0"
            sizes="100vw"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-20 md:-mt-48">
            <h1 className="hero-line first text-5xl md:text-7xl font-extrabold uppercase text-sandstorm !tracking-[15px] mb-6 text-stroke-yellow">
              {splitText("NOTHING BUT NOW", "text-[sandstorm] text-stroke")}
            </h1>
            <span
              className="hero-line second text-xl md:text-3xl !font-extrabold text-white/90 text-stroke-yellow-second !tracking-[2.5px]"
              style={{
                textShadow:
                  "0px 3px 5px rgba(0,0,0,0.5), 0px 0px 4px rgba(0,0,0,0.5)",
              }}
            >
              Every trail. Every peak. Every now.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
