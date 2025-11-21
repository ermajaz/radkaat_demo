"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RideStepDesktop({
  step,
  index,
  active,
  isLast,
}: {
  step: { title: string; desc: string; icon: any };
  index: number;
  active: boolean;
  isLast: boolean;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll("h4, p"),
        { autoAlpha: 0, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        }
      );
    }
  }, [active]);

  return (
    <div className="flex flex-col items-center text-center w-[250px] relative z-10 gap-3">
      {/* Icon */}
      <div
        className={`w-[70px] h-[70px] rounded-full p-2.5 flex items-center justify-center border-2 transition ${
          active
            ? "bg-sandstorm border-sandstorm text-superblack"
            : "border-white/40 text-white/40"
        }`}
      >
        <step.icon className="w-7 h-7" />
      </div>

      {/* Line */}
      {!isLast && (
        <div className="absolute left-[calc(50%+14px)] top-[35px] w-full h-0.5 bg-gray-700 overflow-hidden -z-10">
          <div
            id={`ride-line-${index}`}
            className="absolute inset-0 bg-sandstorm origin-left scale-x-0"
          />
        </div>
      )}

      {/* Text */}
      <div ref={textRef}>
        <h4 className={`text-[18px] font-bold ${active ? "text-stone" : "text-stone/40"}`}>
          {step.title}
        </h4>

        <p className={`text-[14px] font-medium ${active ? "text-stone" : "text-stone/40"}`}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}
