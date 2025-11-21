"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  return useResponsiveComponent(<FooterMobile />, <FooterDesktop />);
}
