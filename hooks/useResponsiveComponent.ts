import { ReactNode } from "react";
import { useIsMobile } from "./useIsMobile";

/**
 * Automatically selects the correct component
 * based on device size (mobile/desktop).
 *
 * @param mobile - JSX for the mobile version
 * @param desktop - JSX for the desktop version
 * @returns ReactNode
 */
export function useResponsiveComponent(
  mobile: ReactNode,
  desktop: ReactNode
): ReactNode {
  const isMobile = useIsMobile();
  return isMobile ? mobile : desktop;
}
