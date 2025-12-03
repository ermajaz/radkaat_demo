"use client";

import { Bikee } from "@/types/bikeComparison";
// import { useRef } from "react";
import RadarChartComp from "./RadarChart";

interface Props {
  bike: Bikee; // selected bike
  allBikes: Bikee[]; // all bikes
}

export default function BikeDetails({ bike, allBikes }: Props) {
  // const textRef = useRef<HTMLDivElement>(null);

  // Convert stats into display-friendly array
  // const statData = [
  //   { label: "Suspension", value: bike.stats.suspension },
  //   { label: "Braking Power", value: bike.stats.braking },
  //   { label: "Frame Strength", value: bike.stats.frame },
  //   { label: "Tire Grip", value: bike.stats.tire },
  //   { label: "Weight", value: bike.stats.weight },
  //   { label: "Comfort", value: bike.stats.comfort },
  // ];

  // return plain label (no color classes) — container controls color
  // const getBadgeLabel = (value: number) => {
  //   if (value >= 8) return "Excellent";
  //   if (value >= 6) return "Good";
  //   return "Average";
  // };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {/* Radar Chart */}
      <div className="w-full h-[400px]">
        <RadarChartComp allBikes={allBikes} selectedBike={bike} />
      </div>

      {/* Advanced Info Card */}
      {/* <div
        ref={textRef}
        className="flex flex-col items-start gap-4 w-full max-w-[400px] py-5 px-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex-1 flex flex-col gap-3 w-full">
          {statData.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 w-full">
              <span className="text-white font-medium w-28 text-sm">
                {stat.label}
              </span>

              <div className="flex-1 h-1.5 rounded-full bg-gray-700/30 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    stat.value >= 8
                      ? "bg-gradient-to-r from-army/80 to-army"
                      : stat.value >= 6
                      ? "bg-gradient-to-r from-sandstorm/80 to-sandstorm"
                      : "bg-gradient-to-r from-rust/80 to-rust"
                  }`}
                  style={{ width: `${(stat.value / 10) * 100}%` }}
                ></div>
              </div>

              <div
                className={`px-2 py-0.5 rounded-md text-xs font-semibold text-white shadow-sm ${
                  stat.value >= 8
                    ? "bg-army border border-army"
                    : stat.value >= 6
                    ? "bg-sandstorm border border-sandstorm"
                    : "bg-rust border border-rust"
                }`}
              >
                {getBadgeLabel(stat.value)}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
