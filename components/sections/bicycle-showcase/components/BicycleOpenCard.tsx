"use client";

import ViewProductButton from "../ViewProductButton";
import BikeNameInGradient from "./BikeNameInGradient";
import BikeSpecsCard from "./BikeSpecsCard";
import BikeImage from "./BikeImage";
import RadarChart from "./RadarChart";
import ShowcaseBg from "./ShowcaseBg";



export default function BicycleOpenCard({ bike }: { bike: any }) {
  // color for radar chart from bike.colors.gradient first color
  const radarColor = bike.colors?.gradient?.split(",")?.[0] ?? "#9f7aea";

  return (
    <div className="relative w-full h-full">
      {/* Top strip is handled at section level */}
      {/* Background image */}
      <ShowcaseBg src={bike.image} alt={`${bike.uiName} background`} />

      {/* Large background word */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-start">
        <div className="pl-14 pt-8">
          <BikeNameInGradient
            name={bike.bgWord ?? bike.uiName.toUpperCase()}
            gradient={bike.colors.gradient}
            className="opacity-40"
          />
        </div>
      </div>

      {/* Foreground layout */}
      <div className="relative z-20 h-full px-12 py-10 flex items-center">
        {/* Left: Bike visual */}
        <div className="flex-1 flex items-center justify-start max-w-[60%]">
          <div className="w-full max-w-[900px] max-h-[600px]">
            <BikeImage image={bike.image} bike={bike}/>
          </div>
        </div>

        {/* Right: Radar + Specs */}
        <div className="w-[420px] flex flex-col items-end gap-6">
          <div className="mr-6">
            <RadarChart stats={bike.stats} color={radarColor} />
          </div>

          <div className="mr-6">
            <BikeSpecsCard bike={bike} />
          </div>

          <div className="mr-6 pt-4">
            <ViewProductButton link={`#${bike.id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

