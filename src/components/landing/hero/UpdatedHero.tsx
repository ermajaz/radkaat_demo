"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bikeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        bikeRef.current,
        { x: 200, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black z-20"
    >
      {/* Right half gradient panel */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f1f1f_0%,#242424_60%,#2c2c2c_100%)]" />
      </div>

      {/* Glow accent behind bike */}
      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sandstorm/10 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto h-full max-w-[1536px] px-6 md:px-12 flex items-center">
        {/* Left column: text */}
        <div ref={textRef} className="flex-1 flex flex-col justify-center">
          <h1 className="leading-tight font-extrabold">
            <span className="block text-white text-[48px] md:text-[72px] tracking-tight">
              Nothing
            </span>
            <span className="block text-sandstorm text-[56px] md:text-[88px] tracking-wide relative">
              but Now
              <span className="absolute bottom-[-8px] left-0 w-2/3 h-[3px] bg-sandstorm animate-pulse" />
            </span>
          </h1>

          <p className="mt-8 max-w-[600px] text-gray-300 text-[24px] leading-relaxed tracking-wide">
            Every trail. Every peak. Every now.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-7 py-3 font-semibold rounded-none shadow-lg transition hover:scale-105 bg-sandstorm text-black"
            >
              Shop Collection <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-sandstorm transition-colors"
            >
              Discover More →
            </a>
          </div>
        </div>

        {/* Right column: bike */}
        <div className="flex justify-center items-center relative">
          <div
            ref={bikeRef}
            className="relative w-[90%] max-w-[880px]"
          >
            <Image
              quality={100}
              src="/images/hero-bike-new.png"
              alt="Bike"
              width={1100}
              height={800}
              priority
              className="object-contain drop-shadow-[0_20px_60px_rgba(215,255,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
