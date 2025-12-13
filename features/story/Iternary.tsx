import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import IternaryMobile from "./IternaryMobile";
import IternaryDesktop from "./IternaryDesktop";

export default function Iternary() {

    return (
        <>{
            useResponsiveComponent(
                <IternaryMobile />,
                <IternaryDesktop />
            )
        }</>
    )

}