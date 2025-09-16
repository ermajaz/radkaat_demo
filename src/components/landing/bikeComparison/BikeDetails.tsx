"use client";

import { useRef } from "react";
import RadarChartComp from "./RadarChart";
import { Bikee } from "@/types";
import Image from "next/image";
import { Check, ArrowUp, ArrowDown } from "lucide-react";

interface Props {
  bike: Bikee; // selected bike
  allBikes: Bikee[]; // all bikes
}

export default function BikeDetails({ bike, allBikes }: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  // Convert stats into display-friendly array
  const statData = [
    { label: "Suspension", value: bike.stats.suspension },
    { label: "Braking Power", value: bike.stats.braking },
    { label: "Frame Strength", value: bike.stats.frame },
    { label: "Tire Grip", value: bike.stats.tire },
    { label: "Weight", value: bike.stats.weight },
    { label: "Comfort", value: bike.stats.comfort },
  ];

  const getBadge = (value: number) => {
    if (value >= 8)
      return <span className="text-green-400 font-semibold">Excellent</span>;
    if (value >= 6)
      return <span className="text-yellow-400 font-semibold">Good</span>;
    return <span className="text-red-400 font-semibold">Average</span>;
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Radar Chart */}
      <div className="w-full h-[400px]">
        <RadarChartComp allBikes={allBikes} selectedBike={bike} />
      </div>

      {/* Advanced Info Card */}
      <div
  ref={textRef}
  className="flex flex-col items-start gap-4 w-full max-w-[400px] py-5 px-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
>
  {/* Right: Stats & Highlights */}
  <div className="flex-1 flex flex-col gap-3 w-full">
    {statData.map((stat, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between gap-3 w-full"
      >
        {/* Stat Name */}
        <span className="text-white font-medium w-28 text-sm">
          {stat.label}
        </span>

        {/* Progress Bar */}
        <div className="flex-1 h-1.5 rounded-full bg-gray-700/30 overflow-hidden relative">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              stat.value >= 8
                ? "bg-gradient-to-r from-green-400 to-emerald-500"
                : stat.value >= 6
                ? "bg-gradient-to-r from-yellow-400 to-amber-500"
                : "bg-gradient-to-r from-red-400 to-pink-500"
            }`}
            style={{ width: `${(stat.value / 10) * 100}%` }}
          ></div>
        </div>

        {/* Value Badge */}
        <div
          className={`px-2 py-0.5 rounded-md text-xs font-semibold text-white shadow-sm ${
            stat.value >= 8
              ? "bg-green-500/30 border border-green-400/50"
              : stat.value >= 6
              ? "bg-yellow-500/30 border border-yellow-400/50"
              : "bg-red-500/30 border border-red-400/50"
          }`}
        >
          {getBadge(stat.value)}
        </div>
      </div>
    ))}

  </div>
</div>

    </div>
  );
}
