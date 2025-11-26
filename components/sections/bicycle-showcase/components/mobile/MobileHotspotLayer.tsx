"use client";

import type { Bike, Hotspot } from "../../utils/bicycle-showcase";
import CustomHotspotMobile from "./CustomHotspotMobile";

type Props = {
  bike: Bike;
  activeSpec: any;
  onHotspotClick: (hp: Hotspot) => void;
};

export default function MobileHotspotLayer({
  bike,
  activeSpec,
  onHotspotClick,
}: Props) {
  const hotspots: Hotspot[] = activeSpec?.hotspots ?? [];

  // This component is meant to be absolutely positioned in the same
  // stacking context as the bike image. If needed you can wrap both
  // inside a relative container in MobileBikeSwiper.
  return (
    <div className="pointer-events-none">
      {hotspots.map((hp) => (
        <CustomHotspotMobile key={hp.id} hotspot={hp} />
      ))}
    </div>
  );
}
