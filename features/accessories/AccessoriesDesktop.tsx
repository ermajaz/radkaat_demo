"use client";

import AccessoriesCategoryGrid from "./components/AccessoriesCategoryGrid";
import AccessoriesHero from "./components/AccessoriesHero";
import AccessoriesInAction from "./components/AccessoriesInAction";
import AccessoriesPerformanceStrip from "./components/AccessoriesPerformanceStrip";



export default function AccessoriesDesktop() {
  return (
    <>
      <AccessoriesHero />
      <AccessoriesCategoryGrid />
      <AccessoriesInAction />
      <AccessoriesPerformanceStrip />
    </>
  );
}
