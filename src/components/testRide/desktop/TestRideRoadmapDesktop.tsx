"use client";
import { steps } from "@/utils/data";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoadmapStepDesktop } from "./RoadmapStepDesktop";

gsap.registerPlugin(ScrollTrigger);

export function TestRideRoadmapDesktop() {
    const roadmapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!roadmapRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: roadmapRef.current,
        start: "top 80%", // when the top of the roadmap hits 80% of viewport height
        toggleActions: "play none none none",
      },
      defaults: { ease: "power2.inOut" },
    });

    steps.forEach((_, i) => {
      // Animate progress line (except last step)
      if (i < steps.length - 1) {
        tl.to(`#progress-line-${i}`, {
          scaleX: 1,
          duration: 1.2,
          onStart: () => setActiveIndex(i),
        });
      }

      // Highlight the step
      tl.call(() => setActiveIndex(i), [], "+=0.2");
    });

    // Ensure last step is highlighted at the end
    tl.call(() => setActiveIndex(steps.length - 1), []);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // cleanup
    };
  }, []);

  return (
    <div
      ref={roadmapRef}
      className="w-full absolute bottom-0 left-0 py-16 flex flex-wrap justify-center gap-12"
    >
      {steps.map((step, i) => (
        <RoadmapStepDesktop
          key={i}
          step={step}
          index={i}
          active={i <= activeIndex}
          isLast={i === steps.length - 1}
        />
      ))}
    </div>
  );
}
