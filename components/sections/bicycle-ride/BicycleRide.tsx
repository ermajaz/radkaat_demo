"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BicycleRideDesktop from "./BicycleRideDesktop";
import BicycleRideMobile from "./BicycleRideMobile";

export default function BicycleRide() {
  return useResponsiveComponent(<BicycleRideMobile />, <BicycleRideDesktop />);
}
