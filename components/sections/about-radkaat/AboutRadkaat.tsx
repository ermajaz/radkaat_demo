"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import AboutRadkaatDesktop from "./AboutRadkaatDesktop";
import AboutRadkaatMobile from "./components/AboutRadkaatMobile";

export default function AboutRadkaat() {
    return useResponsiveComponent(<AboutRadkaatMobile />, <AboutRadkaatDesktop />);
}
