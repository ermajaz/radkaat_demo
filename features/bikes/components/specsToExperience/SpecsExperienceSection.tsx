"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ExperienceHighlights, {
  ExperienceHighlightsHandle,
} from "./ExperienceHighlights";

// register GSAP plugins
if (typeof window !== "undefined" && gsap.core) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function SpecsExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<ExperienceHighlightsHandle>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Kill old triggers for Hot reload (safe in dev)
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars?.id === "experience-master") trigger.kill();
    });

    const ctx = gsap.context(() => {
      const track = expRef.current?.getTrackEl();
      const totalWidth = expRef.current?.getScrollableWidth() ?? 0;
      const viewport = window.innerWidth;

      const maxScrollX = Math.max(0, totalWidth);

      const tl = gsap.timeline({ id: "experience-animation" });

      if (track && maxScrollX > 0) {
        gsap.set(track, { x: 0 });
        tl.to(track, {
          x: -maxScrollX,
          duration: 1,
          ease: "none",
        });
      } else {
        tl.to({}, { duration: 0.2 }); // fallback
      }

      const extra = Math.min(
        200,
        Math.ceil((maxScrollX / Math.max(1, viewport)) * 100)
      );
      const endDistance = `+=${150 + extra}%`;

      ScrollTrigger.create({
        id: "experience-master",
        trigger: section,
        start: "top top+=60",
        end: endDistance,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: tl,
        invalidateOnRefresh: true,
        onRefresh: () => expRef.current?.refreshMetrics(),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-superblack min-h-screen text-stone px-10 pt-10"
    >
      {/* Only Experience Highlights */}
      <div className="relative w-full h-full">
        <ExperienceHighlights
          ref={expRef}
          images={[
            "/images/bikes/bike-highlight-1.jpg",
            "/images/bikes/bike-highlight-2.jpg",
            "/images/bikes/bike-highlight-3.jpg",
          ]}
        />
      </div>
    </section>
  );
}
