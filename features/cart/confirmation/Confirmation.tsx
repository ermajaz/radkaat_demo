import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ConfirmationDesktop from "./ConfirmationDesktop";
import ConfirmationMobile from "./ConfirmationMobile";

export default function Confirmation() {

    return (
        <>{useResponsiveComponent(<ConfirmationMobile />, <ConfirmationDesktop />)}</>
    )

}