import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ConfirmationMobile from "./ConfirmationMobile";
import ConfirmationDesktop from "./ConfirmationDesktop";

export default function Confirmation() {
  return (
    <> {useResponsiveComponent(<ConfirmationMobile />, <ConfirmationDesktop />)}
    </>
  );
}