"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import CategoryDesktop from "./CategoryDesktop";
import CategoryMobile from "./CategoryMobile";

export default function Category() {
  return useResponsiveComponent(<CategoryMobile />, <CategoryDesktop />);
}
