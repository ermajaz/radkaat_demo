import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import AddressDesktop from "./AddressDesktop";
import AddressMobile from "./AddressMobile";

export default function Address() {

    return (
        <> {useResponsiveComponent(<AddressMobile />, <AddressDesktop />)}
        </>

    )

}