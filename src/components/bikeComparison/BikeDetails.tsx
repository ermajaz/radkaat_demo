"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import RadarChartComp from "./RadarChart";
import { Bike } from "@/types";
import Image from "next/image";
import { Check } from "lucide-react";

interface Props {
  bike: Bike;
}

export default function BikeDetails({ bike }: Props) {
  const textRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      chartRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [bike]);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Radar Chart */}
      <div ref={chartRef} className="w-full h-[400px]">
        <RadarChartComp stats={bike.stats} />
      </div>

      {/* Single Description Card */}
      <div
        ref={textRef}
        className="flex items-center gap-6 w-fit py-6 px-8 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-400"
      >
        {/* Logo left */}
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={bike.logo}
              alt={`${bike.name} logo`}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          {/* Name */}
          <h2 className="text-xl font-bold">{bike.name}</h2>
        </div>

        {/* All Descriptions stacked right */}
        <div className="flex flex-col gap-3 flex-1">
          {bike.description.map((desc, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="text-white w-5 h-5 flex-shrink-0" />
              <span className="text-white text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
