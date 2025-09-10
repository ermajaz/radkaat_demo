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
      const pinTarget = heroRef.current!.querySelector(".pin-wrapper");

      // Timeline only for the first line
      gsap
        .timeline({
          scrollTrigger: {
            trigger: pinTarget,
            start: "top top",
            end: "+=1200",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        })
        .to(firstLine, {
          y: -100,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.inOut",
        });
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
    <section ref={heroRef} className="relative w-full overflow-hidden">
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
            <h1 className="hero-line first text-5xl md:text-7xl font-extrabold uppercase text-sandstorm tracking-widest mb-6 text-stroke-yellow">
              {splitText("#NOTHINGBUTNOW", "text-[sandstorm] text-stroke")}
            </h1>
            <h2 className="hero-line second text-xl md:text-3xl font-medium text-white/90 text-stroke-yellow-second">
              Every trail. Every peak. Every now.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
