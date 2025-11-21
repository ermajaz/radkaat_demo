"use client";

import Image from "next/image";
import { ExperienceHeroData } from "../types/experience-hero.types";
import { useHeroScrollEffects } from "../hooks/useHeroScrollEffects";

interface Props {
  data: ExperienceHeroData;
}

export default function HeroBackground({ data }: Props) {
  const { zoomScale } = useHeroScrollEffects();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{
          transform: `scale(${zoomScale})`,
        }}
      >
        <Image
          src={data.image}
          alt="Experience Hero Background"
          fill
          priority
          className="object-cover object-[center_10%]"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>
  );
}
