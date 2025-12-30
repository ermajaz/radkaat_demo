"use client";

import MobileBrandsScroller from "./components/mobile/MobileBrandsScroller";
import MobileHeroPanel from "./components/mobile/MobileHeroPanel";

export default function ExperienceCollaborationsMobile() {
  return (
    <section className="relative w-full h-[80dvh] overflow-hidden bg-black">
      {/* FULL BG */}
      <div className="absolute inset-0">
        <img
          src="/images/bg/experience-brands-bg.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* HERO */}
      <MobileHeroPanel />

      {/* BRANDS */}
      <MobileBrandsScroller />
    </section>
  );
}
