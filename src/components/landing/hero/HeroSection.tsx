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
      const secondLine =
        heroRef.current!.querySelector<HTMLElement>(".hero-line.second");
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
    <div ref={heroRef} className="relative overflow-hidden z-10">
      <div className="pin-wrapper">
        <div className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <Image
            quality={100}
            src="/images/hero-img.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover absolute inset-0"
            // sizes="100vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-20 md:-mt-48">
            <h1
              className="hero-line first text-5xl md:text-7xl font-extrabold uppercase text-sandstorm !tracking-[15px] mb-6 text-stroke-yellow"
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {splitText("NOTHING BUT NOW", "text-[sandstorm] text-stroke")}
            </h1>
            <span
              className="hero-line second text-xl md:text-[32px] !font-extrabold leading-[46px] text-white"
              style={{
                textShadow: "4px 4px 4px 0px #00000026",
                WebkitTextStroke: "1px #00000080",
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
