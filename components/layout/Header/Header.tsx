"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return useResponsiveComponent(<HeaderMobile />, <HeaderDesktop />);
}
