"use client";

import Image from "next/image";
import BackgroundName from "./BackgroundName";
import BikeImage from "./BikeImage";
import ViewProductButton from "../ViewProductButton";
import RadarChart from "./RadarChart";
import BikeDetailsCard from "./BikeDetailsCard";
import { Bike } from "../utils/bicycle-showcase";

export default function BicycleOpenCard({ bike }: { bike: Bike }) {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* BG Image */}
      <Image
        src="/images/bg/showcase-bg.png"
        alt="background"
        fill
        className="object-cover"
      />

      <div className="relative h-full grid grid-cols-20 gap-1 items-center">

        {/* BACKGROUND NAME */}
        <BackgroundName name={bike.bgWord} gradient={bike.colors.gradient} />

        {/* MAIN BIKE IMAGE */}
        <div className="col-span-14 h-[80%] mt-30 flex items-center justify-center">
          <BikeImage image={bike.image} />
        </div>

        {/* RIGHT CONTENT (Chart + Details + Button) */}
        <div className="col-span-6 flex flex-col gap-10">

          <RadarChart stats={bike.stats} color={bike.colors.cta} />

          <BikeDetailsCard bike={bike} />

        </div>
      </div>
    </div>
  );
}
