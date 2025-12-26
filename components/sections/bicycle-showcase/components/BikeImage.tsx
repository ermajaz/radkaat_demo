"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Bike, Hotspot } from "../utils/bicycle-showcase";
import CustomHotspot from "./CustomHotspot";

export default function BikeImage({
  image,
  bike,
  hideHotspots = false,
}: {
  image: string;
  bike: Bike;
  hideHotspots?: boolean;
}) {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  // 🔥 Collect ALL hotspots from ALL specs of this bike
  const allHotspots: Hotspot[] = useMemo(() => {
    return bike.specs.flatMap((spec) => spec.hotspots ?? []);
  }, [bike]);

  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt="Bike"
        fill
        className="object-contain"
        quality={100}
        priority
      />

      {!hideHotspots &&
        allHotspots.map((hotspot) => (
          <CustomHotspot
            key={hotspot.id}
            hotspot={hotspot}
            isActive={activeHotspotId === hotspot.id}
            onHover={(id) => setActiveHotspotId(id)}
            onLeave={() => setActiveHotspotId(null)}
          />
        ))}
    </div>
  );
}
