"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BikeShowcaseDesktop from "./BicycleShowcaseDesktop";
import BikeShowcaseMobile from "./BicycleShowcaseMobile";

export default function BicycleShowcase() {
  return useResponsiveComponent(<BikeShowcaseMobile />, <BikeShowcaseDesktop />);
}
