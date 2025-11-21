"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutRadkaatMobileFlag from "./AboutRadkaatMobileFlag";
import AboutMobileContent from "./AboutRadkaatMobileContent";


gsap.registerPlugin(ScrollTrigger);

export default function AboutRadkaatMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef?.current && sectionRef.current.querySelectorAll(".reveal"), {
        y: 50,
        opacity: 0,
        stagger: 0.25,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".flag-mobile-img", {
        yPercent: -15,
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
            className="
        relative w-full min-h-[75vh] max-h-[80vh] 
        flex flex-col justify-end overflow-hidden
        bg-[#090909]
        border-t border-[#E4D27C]/10
        shadow-[0_-3px_25px_rgba(0,0,0,0.5)]
      "
        >
      <AboutRadkaatMobileFlag/>
      <AboutMobileContent />
    </section>
  );
}
