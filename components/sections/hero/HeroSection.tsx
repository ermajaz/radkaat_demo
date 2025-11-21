"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function HeroSection() {
  return useResponsiveComponent(<HeroMobile />, <HeroDesktop />);
}
