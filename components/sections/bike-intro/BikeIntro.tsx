"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BikeShowcaseMobile from "./BikeIntroMobile";
import BikeShowcaseDesktop from "./BikeIntroDesktop";

export default function BikeIntro() {
  return useResponsiveComponent(<BikeShowcaseMobile />, <BikeShowcaseDesktop />);
}
