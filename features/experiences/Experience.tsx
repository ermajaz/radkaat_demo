import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ExperienceMobile from "./ExperienceMobile";
import ExperienceDesktop from "./ExperienceDesktop";

export default function Experience() {


    return (
        <>{
            useResponsiveComponent(
                <ExperienceMobile />,
                <ExperienceDesktop />
            )
        }</>
    )
}