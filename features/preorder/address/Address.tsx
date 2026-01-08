import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import AddressMobile from "./AddressMobile";
import AddressDesktop from "./AddressDesktop";

export default function Address() {
  return (
    <> {useResponsiveComponent(<AddressMobile />, <AddressDesktop />)}
    </>
  );
}