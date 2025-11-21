"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutRadkaatFlagImage from "./components/AboutRadkaatFlagImage";
import AboutRadkaatContent from "./components/AboutRadkaatContent";
import AboutRadkaatFlagImageOverlay from "./components/AboutRadkaatFlagImageOverlay";


gsap.registerPlugin(ScrollTrigger);

export default function AboutRadkaatDesktop() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading = sectionRef.current!.querySelector(".heading");
      const subheading = sectionRef.current!.querySelector(".subheading");
      const bodyText = sectionRef.current!.querySelector(".body-text");
      const flagImg = sectionRef.current!.querySelector(".flag-img");

      // Staggered text animation
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

      // Flag parallax effect
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
      <AboutRadkaatFlagImage />
      <AboutRadkaatFlagImageOverlay />
      <AboutRadkaatContent />
    </section>
  );
}
