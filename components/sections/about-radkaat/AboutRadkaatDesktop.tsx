"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutRadkaatFlagImage from "./components/AboutRadkaatFlagImage";
import AboutRadkaatContent from "./components/AboutRadkaatContent";
import SectionTopFade from "./components/SectionTopFade";

gsap.registerPlugin(ScrollTrigger);

export default function AboutRadkaatDesktop() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current!.querySelectorAll(".fade-in");

      gsap.from(elements, {
        opacity: 0,
        y: 40,
        stagger: 0.25,
        duration: 1,
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
    <section id="about-radkaat" className="relative bg-superblack py-20">

      {/* Top fade transition */}
      {/* <SectionTopFade /> */}

      {/* Your content */}
      <div className="max-w-[1440px] mx-auto pl-25 pr-10 flex items-center justify-between">
        <AboutRadkaatFlagImage />
        <AboutRadkaatContent />
      </div>

    </section>


  );
}
