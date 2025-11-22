"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ApparelMobile from "./ApparelMobile";
import ApparelDesktop from "./ApparelDesktop";



export default function Apparel() {
    return useResponsiveComponent(
        <ApparelMobile />,
        <ApparelDesktop />,
    );
}
