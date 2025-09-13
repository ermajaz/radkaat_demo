"use client";

import { steps } from "@/utils/data";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TestRideRoadmapMobile({
  runAnimation,
}: {
  runAnimation: boolean;
}) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const pathLengthRef = useRef(0);

  // Wait until path is rendered
  useEffect(() => {
    if (!pathRef.current) return;

    // Sometimes DOM takes time to render, use requestAnimationFrame
    const handle = requestAnimationFrame(() => {
      pathLengthRef.current = pathRef.current!.getTotalLength();
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  // Measure path length once
  useEffect(() => {
    if (pathRef.current)
      pathLengthRef.current = pathRef.current.getTotalLength();
  }, []);

  // Animate only when runAnimation becomes true
  useEffect(() => {
    if (!runAnimation) return;

    let start = 0;
    const duration = 3000; // total animation duration
    const interval = 16; // ~60fps
    const timer = setInterval(() => {
      start += interval;
      const t = Math.min(start / duration, 1);
      setProgress(t);

      const stepIndex = Math.floor(t * (steps.length - 1) + 0.5);
      setActiveStep(stepIndex);

      if (t >= 1) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [runAnimation]);

  const getIndicatorPos = () => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const len = pathLengthRef.current * progress;
    const point = pathRef.current.getPointAtLength(len);
    return { x: point.x, y: point.y };
  };

  const { x, y } = getIndicatorPos();

  return (
    <div className="w-full h-[450px] relative overflow-visible bg-black/20">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffffff15"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <svg className="w-full py-5 h-full relative" viewBox="0 0 400 450">
        <path
          d="M30 400 C80 300, 120 350, 160 250
             C200 150, 240 200, 280 100
             C320 0, 360 50, 390 0"
          stroke="#ffffff40"
          strokeWidth={6}
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          d="M30 400 C80 300, 120 350, 160 250
             C200 150, 240 200, 280 100
             C320 0, 360 50, 390 0"
          stroke="#F3C25F"
          strokeWidth={6}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={pathLengthRef.current}
          strokeDashoffset={pathLengthRef.current * (1 - progress)}
        />

        {steps.map((step, i) => {
          const stepLen = (i / (steps.length - 1)) * pathLengthRef.current;
          const point = pathRef.current?.getPointAtLength(stepLen);
          if (!point) return null;

          const isFirst = i === 0;
          const offsetX = isFirst ? 16 : -16;
          const offsetY = 4;

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: i <= activeStep ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r={6}
                fill="#F3C25F"
                stroke="#fff"
                strokeWidth={1.5}
              />
              <text
                x={point.x + offsetX}
                y={point.y + offsetY}
                fill="#F3C25F"
                fontSize={12}
                fontWeight="bold"
                textAnchor={isFirst ? "start" : "end"}
              >
                {step.title}
              </text>
            </motion.g>
          );
        })}

        <circle
          cx={x}
          cy={y}
          r={12}
          fill="#F3C25F"
          stroke="#fff"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}
