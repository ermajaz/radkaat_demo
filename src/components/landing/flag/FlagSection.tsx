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
      className="relative w-full h-[522px] flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left: Flag image only (half width) */}
      <div className="relative w-full lg:w-[46%] h-1/2 lg:h-full flag-img overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/videos/flag1.gif"
            alt="Flag"
            fill
            className="w-full h-full object-cover object-[88%_12%]"
          />
        </div>
      </div>

      {/* Overlay above separation */}
      <div className="absolute inset-y-0 left-[46%] -translate-x-[100%] w-[18vw] bg-gradient-to-r from-transparent via-petrol/60 to-petrol z-20 pointer-events-none" />

      {/* Right: Text on solid background */}
      <div className="relative w-full lg:w-[54%] h-1/2 lg:h-full flex items-center bg-petrol hover:bg-petrol z-10 transition-none">
        <div className="flex flex-col items-start text-left max-w-2xl space-y-[5px]">
          {/* Heading */}
          <h1
            className="heading text-4xl sm:text-5xl lg:text-[48px] font-bold text-white leading-tight uppercase tracking-wide"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // heading shadow
            }}
          >
            THE FLAG WE CARRY
          </h1>

          {/* Subheading */}
          <span className="subheading text-lg sm:text-xl lg:text-[24px] mt-2 text-sandstorm font-semibold tracking-wide">
            They call us different; we call it making a difference.
          </span>

          {/* Body */}
          <div className="body-text text-white text-base sm:text-lg lg:text-[20px] leading-[36px] font-semibold space-y-4">
            The Himalayas are our playground, the world our canvas, Mother
            Nature our compass.
            <br />
            We don’t stand still. We move forward. We move together.
            <br />
            We are <span className="text-sandstorm font-semibold">
              Radkaat
            </span>{" "}
            – a fierce community of homegrown athletes, adventurers, seekers,
            and believers from the Indian Himalaya, crafting world-class
            products and experiences.
            <br />
            <p className="text-stone font-bold tracking-[1px] leading-[46px] text-[32px] mt-3">
              Every trail. Every peak. Every now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
