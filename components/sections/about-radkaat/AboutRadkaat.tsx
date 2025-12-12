"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import AboutRadkaatDesktop from "./AboutRadkaatDesktop";
import AboutRadkaatMobile from "./AboutRadkaatMobile";

export default function AboutRadkaat() {
    return useResponsiveComponent(<AboutRadkaatMobile />, <AboutRadkaatDesktop />);
}
