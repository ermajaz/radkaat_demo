"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ExperienceCollaborationsDesktop from "./ExperienceCollaborationsDesktop";
import ExperienceCollaborationsMobile from "./ExperienceCollaborationsMobile";

export default function ExperienceCollaborations() {
    return useResponsiveComponent(
        <ExperienceCollaborationsMobile />,
        <ExperienceCollaborationsDesktop />,
    );
}
