"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import BicycleComparisonMobile from "./BicycleComparisonMobile";
import BicycleComparisonDesktop from "./BicycleComparisonDesktop";

export default function BicycleComparison() {
  return useResponsiveComponent(<BicycleComparisonMobile />, <BicycleComparisonDesktop />);
}
