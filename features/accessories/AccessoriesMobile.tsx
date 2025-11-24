"use client";

import AccessoriesCategoryMobile from "./components/mobile/AccessoriesCategoryMobile";
import AccessoriesHeroMobile from "./components/mobile/AccessoriesHeroMobile";
import AccessoriesShowcaseStripMobile from "./components/mobile/AccessoriesShowcaseStripMobile";
import AccessoriesTechSectionMobile from "./components/mobile/AccessoriesTechSectionMobile";



export default function AccessoriesMobile() {
  return (
    <div className="space-y-12">
      <AccessoriesHeroMobile />
      <AccessoriesCategoryMobile />
      <AccessoriesTechSectionMobile />
      <AccessoriesShowcaseStripMobile />
    </div>
  );
}
