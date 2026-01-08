import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import PaymentMobile from "./PaymentMobile";
import PaymentDesktop from "./PaymentDesktop";


export default function Payment() {
  return (
    <> {useResponsiveComponent(<PaymentMobile />, <PaymentDesktop />)}
    </>
  );
}