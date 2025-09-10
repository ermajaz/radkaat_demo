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
      const imgContainer =
        sectionRef.current!.querySelector<HTMLElement>(".img-container");

      // Animate headings and text on scroll
      gsap.from([heading, subheading, bodyText], {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Parallax effect for main image and GIF
      gsap.to(imgContainer, {
        y: -30,
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
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 overflow-hidden"
    >
      {/* Left: Image + GIF */}
      <div className="relative w-full lg:w-[500px] h-[450px] flex-shrink-0 img-container rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/flag-bg.png"
          alt="The Flag We Carry"
          fill
          className="object-cover main-img"
        />
        <Image
          src="/gif/flag.gif"
          alt="Flag Animation"
          width={300}
          height={300}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      </div>

      {/* Right: Headings + Text */}
      <div className="flex flex-col items-start text-left max-w-2xl">
        <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-sandstorm mb-4">
          The Flag We Carry
        </h1>
        <h2 className="subheading text-xl md:text-2xl lg:text-3xl text-white/80 mb-6">
          They call us different, we call it making a difference.
        </h2>
        <p className="body-text text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
          The Himalayas are our playground, the world our canvas, Mother Nature
          our compass.
          <br />
          We don’t stand still. We move forward. We move together.
          <br />
          We are Radkaat – a fierce community of homegrown athletes,
          adventurers, seekers, and believers from the Indian Himalaya, crafting
          world-class products and experiences.
          <br />
          Every trail. Every peak. Every now.
        </p>
      </div>
    </section>
  );
}
