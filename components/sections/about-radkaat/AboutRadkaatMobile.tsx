"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutRadkaatMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current!.querySelectorAll(".fade-mobile");

      gsap.from(elements, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full 
        bg-superblack 
        py-5 px-5
        flex flex-col items-center justify-center 
        md:hidden
      "
    >
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute -top-10 left-0 w-full h-[60px] bg-linear-to-t from-superblack via-superblack/70 to-transparent z-20" />

      {/* FLAG IMAGE */}
      <div className="fade-mobile w-full max-w-[380px] h-[300px] rounded-[18px] overflow-hidden shadow-xl mb-10 relative">
        <Image
          src="/videos/flag1.gif"
          alt="Flag"
          fill
          quality={100}
          className="object-cover object-[70%_30%]"
        />
      </div>

      {/* TITLE */}
      <h1 className="fade-mobile text-[30px] text-center font-extrabold leading-[1.15] tracking-wide uppercase text-white mb-2">
        THE FLAG WE CARRY
      </h1>

      {/* SUBTITLE */}
      <p className="fade-mobile text-[14px] font-semibold text-sandstorm text-center leading-snug mb-3">
        They call us different; we call it making a difference.
      </p>

      {/* BODY CONTENT */}
      <div className="fade-mobile text-[15px] text-white leading-5.5 text-center space-y-1 max-w-[90%]">
        <p>
          The Himalayas are our playground, the world our canvas, Mother Nature our compass.
          We don’t stand still. We move forward. We move together.
        </p>

        <p>
          We are{" "}
          <span className="text-sandstorm font-bold">Radkaat</span> — a fierce
          community of homegrown athletes, adventurers, seekers, and believers from
          the Indian Himalaya, crafting world-class products and experiences.
        </p>

        <p className="text-[20px] text-white font-bold mt-1 leading-tight">
          Every trail. Every peak. Every now.
        </p>
      </div>
    </section>
  );
}
