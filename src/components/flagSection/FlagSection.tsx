"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlagSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading =
        sectionRef.current!.querySelector<HTMLElement>(".heading");
      const subheading =
        sectionRef.current!.querySelector<HTMLElement>(".subheading");
      const bodyText =
        sectionRef.current!.querySelector<HTMLElement>(".body-text");
      const flagImg =
        sectionRef.current!.querySelector<HTMLElement>(".flag-img");

      // staggered text animation
      gsap.from([heading, subheading, bodyText], {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // parallax effect on flag
      gsap.to(flagImg, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left: Flag image only (half width) */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flag-img overflow-hidden">
        <Image
          src="/images/flag-bg.png"
          alt="The Flag We Carry"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay on right edge */}
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-r from-transparent to-[#0a2440]" />

        <Image
          src="/gif/flag.gif"
          alt="Flag Animation"
          width={600}
          height={600}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none translate-y-16"
        />
      </div>

      {/* Right: Text on solid background */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center px-6 sm:px-12 lg:px-16 bg-[#0a2440]">
        <div className="flex flex-col items-start text-left max-w-2xl space-y-6">
          {/* Heading */}
          <h1 className="heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
              THE FLAG
            </span>{" "}
            WE CARRY
          </h1>

          {/* Subheading */}
          <h2 className="subheading text-xl sm:text-2xl lg:text-3xl text-yellow-400 font-medium tracking-wide">
            They call us different; we call it making a difference.
          </h2>

          {/* Divider / Accent Line */}
          <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>

          {/* Body */}
          <p className="body-text text-white/80 text-lg lg:text-xl leading-relaxed">
            The Himalayas are our playground, the world our canvas, Mother
            Nature our compass.
            <br />
            We don’t stand still. We move forward. We move together.
            <br />
            We are{" "}
            <span className="text-yellow-400 font-semibold">Radkaat</span> – a
            fierce community of homegrown athletes, adventurers, seekers, and
            believers from the Indian Himalaya, crafting world-class products
            and experiences.
            <br />
            <span className="text-white font-bold">
              Every trail. Every peak. Every now.
            </span>
          </p>
        </div>
        <div className="absolute -right-40 -bottom-40 w-[400px] h-[400px] bg-yellow-500/20 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
