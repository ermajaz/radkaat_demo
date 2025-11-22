"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import AccessoriesMobile from "./AccessoriesMobile";
import AccessoriesDesktop from "./AccessoriesDesktop";


export default function Accessories() {
    return useResponsiveComponent(
        <AccessoriesMobile />,
        <AccessoriesDesktop />,
    );
}
