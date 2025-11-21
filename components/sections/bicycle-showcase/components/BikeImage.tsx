"use client";

import Image from "next/image";
import { Hotspot } from "../utils/bicycle-showcase";
import CustomHotspot from "./CustomHotspot";

export default function BikeImage({
  bike,
  activeSpec,
}: {
  bike: any;
  activeSpec: any;
}) {
  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-visible">
      {/* Bike Image Wrapper */}
      <div className="relative w-full max-w-[1200px] h-[650px] z-0">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[260px] z-1
    pointer-events-none 
    bg-[radial-gradient(ellipse_at_center,rgba(255,220,120,0.05)_0%,rgba(255,180,60,0.03)_35%,rgba(0,0,0,0)_100%)]
    blur-2xl
" />


        <Image
          src={bike.image}
          alt={bike.uiName}
          fill
          quality={100}
          className="object-contain z-0 pointer-events-none"
          priority
        />

        {/* Hotspots */}
        {(activeSpec.hotspots ?? []).map((hp: Hotspot) => (
          <CustomHotspot key={hp.id} hotspot={hp} />
        ))}
      </div>
    </div>
  );
}
