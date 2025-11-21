"use client";

import HeroBackground from "./components/HeroBackground";
import HeroQuotes from "./components/HeroQuotes";
import { experienceHeroData } from "./utils/experience-hero-data";

export default function ExperienceHeroMobile() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
      <HeroBackground data={experienceHeroData} />

      <HeroQuotes text={experienceHeroData.quote} />
    </section>
  );
}
