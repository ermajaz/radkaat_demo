"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  blueLine,
  whiteLine,
  pedalingZone,
  inflectionPoint,
  xMax,
  yMax,
} from "@/utils/antiSquatData";

export default function AntiSquatGraph() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -70% 0px" }); // reveal at 30% of screen

  // Convert (travel,value) → SVG coords
  const toX = (t: number) => (t / xMax) * 1000;
  const toY = (v: number) => 650 - (v / yMax) * 500;

  const makePath = (line: any[]) =>
    line.map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.travel)},${toY(p.value)}`).join(" ");

  const bluePath = makePath(blueLine);
  const whitePath = makePath(whiteLine);

  const blueFillPath = `
    ${bluePath}
    L ${toX(blueLine[blueLine.length - 1].travel)},650
    L ${toX(blueLine[0].travel)},650 Z
  `;

  return (
    <div className="w-full bg-black py-20 flex justify-center">
      <svg
        ref={ref}
        viewBox="0 0 1000 720"
        className="w-full max-w-5xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* BACK LINES */}
        <line x1="100" y1="150" x2="900" y2="150" stroke="#666" strokeDasharray="6 6" opacity=".3" />
        <line x1="100" y1="320" x2="900" y2="320" stroke="#666" strokeDasharray="6 6" opacity=".3" />
        <line x1="100" y1="500" x2="900" y2="500" stroke="#666" strokeDasharray="6 6" opacity=".3" />

        {/* PEDALING ZONE */}
        <rect
          x={toX(pedalingZone.start)}
          y={150}
          width={toX(pedalingZone.end - pedalingZone.start)}
          height={500}
          fill="#ffffff15"
        />

        {/* INFLECTION LINE */}
        <line
          x1={toX(inflectionPoint)}
          y1="150"
          x2={toX(inflectionPoint)}
          y2="650"
          stroke="#ffffff20"
          strokeDasharray="4 4"
        />

        {/* BLUE AREA FILL */}
        <motion.path
          d={blueFillPath}
          fill="#2aa8bd40"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* BLUE LINE */}
        <motion.path
          d={bluePath}
          stroke="#2AA8BD"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* WHITE LINE */}
        <motion.path
          d={whitePath}
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
        />

        {/* LABELS */}
        <text x="350" y="80" fill="white" fontSize="28" letterSpacing="3">
          MTe ANTI-SQUAT (32T)
        </text>

        {/* Right labels */}
        <text x={toX(145) + 10} y={toY(60)} fill="white" fontSize="20">32-52</text>
        <text x={toX(145) + 10} y={toY(32)} fill="#2AA8BD" fontSize="20">32-10</text>

        {/* Top labels */}
        <text x={toX(0)} y={toY(132) - 15} fill="#2AA8BD" fontSize="20">132%</text>
        <text x={toX(0)} y={toY(105) - 15} fill="white" fontSize="20">105%</text>
      </svg>
    </div>
  );
}
