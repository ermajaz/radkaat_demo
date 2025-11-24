"use client";

import ApparelHeroMobile from "./components/mobile/ApparelHeroMobile";
import ApparelCategoryMobile from "./components/mobile/product-showcase/ApparelCategoryMobile";
import ApparelShowcaseStripMobile from "./components/mobile/product-showcase/ApparelShowcaseStripMobile";
import ApparelTechSectionMobile from "./components/mobile/product-showcase/ApparelTechSectionMobile";


export default function ApparelMobile() {
  return (
    <div className="space-y-12">
      <ApparelHeroMobile />
      <ApparelCategoryMobile />
      <ApparelTechSectionMobile />
      <ApparelShowcaseStripMobile />
    </div>
  );
}
