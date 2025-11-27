"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceHighlightsMobileTrack, { ExperienceHighlightsMobileHandle } from "./ExperienceHighlightsMobileTrack";

// Register GSAP plugins (safe)
if (typeof window !== "undefined" && gsap.core) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SpecsExperienceSectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<ExperienceHighlightsMobileHandle>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // cleanup hot reload
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars?.id === "mobile-exp-master") t.kill();
    });

    const ctx = gsap.context(() => {
      const track = mobileRef.current?.getTrackEl();
      const scrollW = mobileRef.current?.getScrollableWidth() ?? 0;
      const viewport = window.innerWidth;

      const maxScrollX = Math.max(0, scrollW);

      // timeline
      const tl = gsap.timeline({ id: "mobile-exp-tl" });

      if (track && maxScrollX > 0) {
        gsap.set(track, { x: 0 });
        tl.to(track, {
          x: -maxScrollX,
          duration: 1,
          ease: "none",
        });
      }

      // scroll distance based on width
      const extra = Math.ceil((maxScrollX / viewport) * 100);
      const endDistance = `+=${120 + extra}%`;

      ScrollTrigger.create({
        id: "mobile-exp-master",
        trigger: section,
        start: "top top+=55",
        end: endDistance,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: tl,
        invalidateOnRefresh: true,
        onRefresh: () => mobileRef.current?.refreshMetrics(),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience-mobile"
      ref={sectionRef}
      className="
        w-full min-h-screen bg-superblack text-white
        px-4 pt-10 overflow-hidden relative
      "
    >
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-center text-[26px] font-bold uppercase tracking-wide text-white">
          Experience Highlights
        </h2>
        <p className="text-center text-[13px] text-white/60 mt-1">
          Scroll to explore premium visuals.
        </p>
      </div>

      {/* Track itself */}
      <ExperienceHighlightsMobileTrack
        ref={mobileRef}
        images={[
          "/images/bikes/bike-highlight-1.jpg",
          "/images/bikes/bike-highlight-2.jpg",
          "/images/bikes/bike-highlight-3.jpg",
        ]}
      />
    </section>
  );
}
