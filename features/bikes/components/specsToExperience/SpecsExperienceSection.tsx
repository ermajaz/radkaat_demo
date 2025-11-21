"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SpecsExperienceToggle from "./SpecsExperienceToggle";
import SpecsShowcase, { SpecsShowcaseHandle } from "./SpecsShowcase";
import ExperienceHighlights, {
  ExperienceHighlightsHandle,
} from "./ExperienceHighlights";

// Register once (safe-guarded)
if (typeof window !== "undefined" && gsap.core) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

type Mode = "specs" | "experience";

export default function SpecsExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<SpecsShowcaseHandle>(null);
  const expRef = useRef<ExperienceHighlightsHandle>(null);
  const [active, setActive] = useState<Mode>("specs");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Kill any existing triggers tied to this section on hot reload
    ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => {
      if (trigger.vars && trigger.vars.id === "specs-exp-master") {
        trigger.kill();
      }
    });

    const ctx = gsap.context(() => {
      // Ensure child DOM is laid out
      const specsEls = specsRef.current?.getImageEls() ?? [];
      const positions = specsRef.current?.getPositions() ?? [];
      const highlightsTrack = expRef.current?.getTrackEl();
      const highlightsWidth = expRef.current?.getScrollableWidth() ?? 0;

      const viewport = window.innerWidth;
      const maxScrollX = Math.max(0, highlightsWidth);

      // Build SPECs timeline (images fly in from screen edges to target positions)
      const specsTl = gsap.timeline({ id: "specs-tl" });
      specsEls.forEach((el, i) => {
        const p = positions[i] ?? { x: 0, y: 0 };
        // pick entry direction based on index (alternating corners)
        const fromVars = (() => {
          const dir = i % 5; // cycle some directions
          if (dir === 0) return { xPercent: -120, yPercent: -40 };
          if (dir === 1) return { xPercent: 0, yPercent: -120 };
          if (dir === 2) return { xPercent: 120, yPercent: -20 };
          if (dir === 3) return { xPercent: -100, yPercent: 100 };
          return { xPercent: 40, yPercent: 120 };
        })();
        specsTl.fromTo(
          el,
          { autoAlpha: 0, scale: 0.6, ...fromVars },
          {
            autoAlpha: 1,
            scale: 1,
            x: p.x,
            y: p.y,
            ease: "power2.out",
            duration: 0.6,
          },
          i * 0.25 // slight overlap
        );
      });

      // EXPERIENCE (horizontal gallery) timeline
      const experienceTl = gsap.timeline({ id: "exp-tl" });
      if (highlightsTrack && maxScrollX > 0) {
        // Reset track before animating
        gsap.set(highlightsTrack, { x: 0 });
        experienceTl.to(highlightsTrack, {
          x: -maxScrollX,
          ease: "none",
          duration: 1, // treated as a segment; scrub controls speed
        });
      } else {
        // Nothing to scroll, keep short segment so timeline still flows
        experienceTl.to({}, { duration: 0.2 });
      }

      // MASTER timeline with pinning + scrub
      const master = gsap.timeline({ id: "specs-exp-master" });

      // Toggle state at start
      master.add(() => setActive("specs"));
      master.add(specsTl);
      // Crossfade to Experience
      master.add(() => setActive("experience"));
      master.add(() => {
        // Ensure highlights track metrics in case of resize
        expRef.current?.refreshMetrics();
      });
      master.add(experienceTl);

      // Total scroll distance: tune based on content size
      const baseVH = 200; // 200vh for specs + experience by default
      const extra = Math.min(
        200,
        Math.ceil((maxScrollX / Math.max(1, viewport)) * 100)
      );
      const endDistance = `+=${baseVH + extra}%`;

      ScrollTrigger.create({
        id: "specs-exp-master",
        trigger: section,
        start: "top top+=70", // start only when section is more visible
        end: endDistance,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: master,
        invalidateOnRefresh: true,
        onRefresh: () => {
          expRef.current?.refreshMetrics();
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-superblack min-h-screen text-stone px-10 pt-10"
    >
      <SpecsExperienceToggle active={active} />

      {/* Render both and switch via state; this avoids timeline null refs on mount */}
      <div className="relative min-h-[calc(100vh-70px)]">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            active === "specs"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <SpecsShowcase
            ref={specsRef}
            images={[
              { src: "/images/frame/frame-1.png", label: "Frame" },
              { src: "/images/frame/frame-1.png", label: "Fork" },
              { src: "/images/frame/frame-2.png", label: "Stem" },
              { src: "/images/frame/frame-2.png", label: "Handlebar" },
              { src: "/images/frame/frame-3.png", label: "Seatpost" },
            ]}
          />
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            active === "experience"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ExperienceHighlights
            ref={expRef}
            images={[
              "/images/bikes/bike-highlight-1.jpg",
              "/images/bikes/bike-highlight-2.jpg",
              "/images/bikes/bike-highlight-3.jpg",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
