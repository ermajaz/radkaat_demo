"use client";
import { useEffect, useRef } from "react";
import { CheckCircle, LucideIcon } from "lucide-react";
import gsap from "gsap";

export function RoadmapStepDesktop({
  step,
  index,
  active,
  isLast,
}: {
  step: { title: string; desc: string; icon: LucideIcon };
  index: number;
  active: boolean;
  isLast: boolean;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll("h4, p"),
        { autoAlpha: 0, y: 10 }, // start hidden + slight down
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [active]);

  return (
    <div className="flex flex-col items-center text-center w-56 gap-2 relative z-10">
      {/* Icon */}
      <div
        className={`w-[70px] h-[70px] p-[10px] flex items-center justify-center rounded-full border-2 z-10 transition ${
          active
            ? "bg-sandstorm border-sandstorm text-white"
            : "border-white/40 text-white/40"
        }`}
      >
        {step.icon && <step.icon className="w-[32px] h-[32px]" />}
      </div>

      {/* Connector line (only if not last step) */}
      {!isLast && (
        <div className="absolute top-[35px] left-[calc(50%+14px)] w-[calc(100%)] h-[2px] bg-gray-600 -z-10 overflow-hidden">
          {/* animated progress line */}
          <div
            id={`progress-line-${index}`}
            className="absolute inset-0 bg-sandstorm origin-left scale-x-0"
          />
        </div>
      )}

      {/* Text */}
      <div ref={textRef}>
        <span
          className={`mt-4 text-[19px] font-bold whitespace-nowrap ${
            active ? "text-stone" : "text-stone/40"
          }`}
        >
          {step.title}
        </span>
        <p
          className={`text-[16px] mt-1 font-medium ${
            active ? "text-stone" : "text-stone/40"
          }`}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}
