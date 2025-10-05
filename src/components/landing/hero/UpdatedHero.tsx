"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftBgRef = useRef<HTMLDivElement>(null);
  const bikeRef = useRef<HTMLDivElement>(null);

  // Bike comes in from right on mount
  useEffect(() => {
    if (bikeRef.current) {
      gsap.fromTo(
        bikeRef.current,
        { x: 400, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Scroll effect for text letters
  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLSpanElement>(".hero-title span");

      // Ensure all letters visible initially
      gsap.set(letters, { y: 0, opacity: 1 });

      // Animate letters OUT on scroll
      gsap.to(letters, {
        y: -100,
        opacity: 0,
        stagger: 0.15, // each letter leaves one by one
        ease: "power3.in",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });

      // Paragraph + button fade out smoothly
      gsap.to(".hero-fade", {
        opacity: 0,
        y: -40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=80%",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll effect for left background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (leftBgRef.current) {
        const shift = Math.min(scrollTop / 3, window.innerWidth * 0.4);
        leftBgRef.current.style.transform = `translateX(${shift}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex overflow-hidden bg-neutral-950 z-20"
    >

      {/* Right Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-10 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900"></div>
      </div>

      {/* Bike */}
      <div
        ref={bikeRef}
        className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none"
      >
        <div className="relative w-[60vw] h-[60vh] left-[15%]">
          <Image quality={100}
            src="/images/new-hero-img.png"
            alt="Bike"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="w-1/2 flex flex-col justify-center px-10 md:px-20 relative z-30 text-white hero-content">
        {/* Animated title letters */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight hero-title">
          {"Nothing".split("").map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}{" "}
          <span className="text-sandstorm">
            {"But".split("").map((l, i) => (
              <span key={`but-${i}`} className="inline-block">
                {l}
              </span>
            ))}
          </span>{" "}
          <span className="text-sandstorm">
            {"Now".split("").map((l, i) => (
              <span key={`now-${i}`} className="inline-block">
                {l}
              </span>
            ))}
          </span>
        </h1>

        {/* Paragraph + Button (fade out) */}
        <div className="mt-6 max-w-lg hero-fade">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Every trail. Every peak. Every moment counts. Gear up for the
            ultimate cycling experience with GoreWear Essentials.
          </p>
        </div>

        <div className="mt-6 flex gap-4 hero-fade">
          <a
            href="#"
            className="bg-sandstorm text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            Shop Collection <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
