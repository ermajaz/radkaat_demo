"use client";

import ShowcaseBg from "../ShowcaseBg";
import MobileBikeImage from "./MobileBikeImage";
import MobileBikeNameGradient from "./MobileBikeNameGradient";
import MobileBikeSpecsCard from "./MobileBikeSpecsCard";
import MobileRadarChart from "./MobileRadarChart";
import MobileViewProductButton from "./MobileViewProductButton";


export default function MobileOpenBikeCard({ bike }: any) {
  return (
    <div className="w-full h-full relative overflow-hidden">
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
      <div className="absolute w-full top-[20%]">
        <MobileBikeImage image={bike.image} />
      </div>

      {/* Radar + Specs */}
      <div className="absolute bottom-2.5 w-full flex justify-between items-center">
        <MobileRadarChart stats={bike.stats} color={bike.colors.gradient.split(",")[0]} />
        {/* <MobileBikeSpecsCard bike={bike} /> */}
      </div>

      {/* View Product */}
      <div className="absolute bottom-2.5 right-5">
        <MobileViewProductButton link="/bikes/serow/model-1" />
      </div>

    </div>
  );
}
