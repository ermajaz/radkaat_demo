"use client";

import ShowcaseBg from "../ShowcaseBg";
import MobileBikeImage from "./MobileBikeImage";
import MobileBikeNameGradient from "./MobileBikeNameGradient";
import MobileBikeSpecsCard from "./MobileBikeSpecsCard";
import MobileRadarChart from "./MobileRadarChart";
import MobileViewProductButton from "./MobileViewProductButton";


export default function MobileOpenBikeCard({ bike }: any) {
  return (
    <div className="w-full h-[82.5%] relative overflow-hidden">
      {/* background */}
      <ShowcaseBg />

      {/* Background Word */}
      <div className="absolute w-full top-[10%] text-center">
        <MobileBikeNameGradient
          name={bike.bgWord}
          gradient={bike.colors.bgGradient}
        />
      </div>

      {/* Bike Image */}
      <div className="absolute inset-0 flex items-center justify-center mt-6">
        <MobileBikeImage image={bike.image} />
      </div>

      {/* Radar + Specs */}
      <div className="absolute bottom-20 w-full px-4 flex justify-between items-end">
        <MobileRadarChart stats={bike.stats} color={bike.colors.gradient.split(",")[0]} />
        <MobileBikeSpecsCard bike={bike} />
      </div>

      {/* View Product */}
      <div className="absolute bottom-5 w-full flex justify-center">
        <MobileViewProductButton link="/bikes/serow/model-1" />
      </div>

    </div>
  );
}
