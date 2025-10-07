"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpecsExperienceToggle from "./SpecsExperienceToggle";
import SpecsShowcase from "./SpecsShowcase";
import ExperienceHighlights from "./ExperienceHighlights";

gsap.registerPlugin(ScrollTrigger);

export default function SpecsExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<"specs" | "experience">("specs");

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=70",
          end: "+=300%", // total scroll length for both specs + experience
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1️⃣ SpecsShowcase plays for first half
      tl.to({}, { duration: 1, onStart: () => setActive("specs") });

      // 2️⃣ Switch to Experience for second half
      tl.to({}, { duration: 1, onStart: () => setActive("experience") });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-superblack !pt-10 text-stone px-10">
      <SpecsExperienceToggle active={active} />

      {active === "specs" ? (
        <SpecsShowcase
          images={[
            { src: "/images/frame/frame-1.png", label: "Frame" },
            { src: "/images/frame/frame-2.png", label: "Frame" },
            { src: "/images/frame/frame-2.png", label: "Frame" },
            { src: "/images/frame/frame-2.png", label: "Frame" },
            { src: "/images/frame/frame-2.png", label: "Frame" },
            { src: "/images/frame/frame-3.png", label: "Frame" },
          ]}
        />
      ) : (
        <ExperienceHighlights />
      )}
    </section>
  );
}
