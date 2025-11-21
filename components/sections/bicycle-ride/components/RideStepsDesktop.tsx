"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "@/utils/ride";
import RideStepDesktop from "./RideStepDesktop";

gsap.registerPlugin(ScrollTrigger);

export default function RideStepsDesktop() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!stepsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stepsRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    steps?.forEach((_, i) => {
      if (i < steps?.length - 1) {
        tl.to(`#ride-line-${i}`, {
          scaleX: 1,
          duration: 1.2,
          onStart: () => setActiveIndex(i),
        });
      }

      tl.call(() => setActiveIndex(i), [], "+=0.2");
    });

    tl.call(() => setActiveIndex(steps?.length - 1));

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={stepsRef}
      className="w-full flex flex-wrap justify-center gap-16"
    >
      {steps?.map((step, i) => (
        <RideStepDesktop
          key={i}
          step={step}
          index={i}
          active={i <= activeIndex}
          isLast={i === steps?.length - 1}
        />
      ))}
    </div>
  );
}
