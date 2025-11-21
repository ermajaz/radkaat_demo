"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BikeShowcaseDesktop from "./BicycleShowcaseDesktop";

export default function BicycleShowcase() {
  return useResponsiveComponent(<BikeShowcaseDesktop />, <BikeShowcaseDesktop />);
}
