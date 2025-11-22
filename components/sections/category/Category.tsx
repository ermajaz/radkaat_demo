"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import CategoryDesktop from "./CategoryDesktop";
import CategoryMobile from "./CategoryMobile";

export default function Category({onClose}: {onClose?: () => void}) {
  console.log(onClose);
  return useResponsiveComponent(<CategoryMobile />, <CategoryDesktop onClose={onClose} />);
}
