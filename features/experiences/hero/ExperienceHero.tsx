"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ExperienceHeroDesktop from "./ExperienceHeroDesktop";
import ExperienceHeroMobile from "./ExperienceHeroMobile";

export default function ExperienceHero() {
    return useResponsiveComponent(
        <ExperienceHeroMobile />,
        <ExperienceHeroDesktop />
    );
}
