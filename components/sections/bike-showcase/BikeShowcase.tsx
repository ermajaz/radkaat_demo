"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BikeShowcaseMobile from "./BikeShowcaseMobile";
import BikeShowcaseDesktop from "./BikeShowcaseDesktop";

export default function BikeShowcase() {
  return useResponsiveComponent(<BikeShowcaseMobile />, <BikeShowcaseDesktop />);
}
