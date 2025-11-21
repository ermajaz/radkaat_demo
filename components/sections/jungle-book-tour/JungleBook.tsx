"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import JungleBookMobile from "./JungleBookMobile";
import JungleBookDesktop from "./JungleBookDesktop";

export default function JungleBook() {
  return useResponsiveComponent(<JungleBookMobile />, <JungleBookDesktop />);
}
