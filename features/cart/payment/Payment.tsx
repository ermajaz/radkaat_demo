import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import PaymentDesktop from "./PaymentDesktop";
import PaymentMobile from "./PaymentMobile";

export default function Payment() {

    return (
        <>{useResponsiveComponent(<PaymentMobile />, <PaymentDesktop />)}</>
    )

}