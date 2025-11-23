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

  // ✅ Fade-in only (no movement)
  useEffect(() => {
    if (active && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [active]);

  return (
    <div className="flex flex-col items-center text-center w-[220px] relative z-10 gap-3">

      {/* ✅ Icon */}
      <div
        className={`w-[60px] h-[60px] rounded-full p-2.5 flex items-center justify-center border-2 transition ${active
            ? "bg-sandstorm border-sandstorm text-superblack"
            : "border-white/40 text-white/40"
          }`}
      >
        <step.icon className="w-6 h-6" />
      </div>

      {/* ✅ Short Centered Line */}
      {!isLast && (
        <div className="absolute top-[30px] left-[45%] translate-x-[35px] w-[230px] h-0.5 bg-gray-700 overflow-hidden -z-10">
          <div
            id={`ride-line-${index}`}
            className="absolute inset-0 bg-sandstorm origin-left scale-x-0"
          />
        </div>
      )}

      {/* ✅ Text — hidden until active */}
      <div className="text-center">
        {/* ✅ Title always visible */}
        <h4 className="text-[18px] font-bold text-stone">
          {step.title}
        </h4>

        {/* ✅ Description fades ONLY when active */}
        <p
          className={`text-xs font-medium text-stone mt-1 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"
            }`}
        >
          {step.desc}
        </p>
      </div>


    </div>
  );
}
