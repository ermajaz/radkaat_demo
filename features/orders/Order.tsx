import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import OrderDesktop from "./OrderDesktop";
import OrderMobile from "./OrderMobile";

export default function Order() {

    return (
        <>{useResponsiveComponent(<OrderMobile />, <OrderDesktop />)}</>
    )

}