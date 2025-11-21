"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "@/lib/gsap";

import LeftPanel from "./components/LeftPanel";
import RightTilesScroller from "./components/RightTilesScroller";

export default function ExperienceCollaborationsDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesWrapperRef = useRef<HTMLDivElement>(null); // outer wrapper

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = tilesWrapperRef.current;

      if (!container || !wrapper) return;

      // The actual grid inside RightTilesScroller
      const tilesInner = wrapper.querySelector(".tiles-inner") as HTMLDivElement;

      if (!tilesInner) return;

      const tilesHeight = tilesInner.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollDistance = tilesHeight - windowHeight;

      // GSAP ScrollTrigger animation
      gsap.to(tilesInner, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-superblack flex overflow-hidden"
    >
      {/* LEFT */}
      <LeftPanel />

      {/* RIGHT (tiles) */}
      <RightTilesScroller ref={tilesWrapperRef} />
    </section>
  );
}
