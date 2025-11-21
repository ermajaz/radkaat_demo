"use client";

import Image from "next/image";

export default function HeroLogoSection() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center text-center">
      <Image
        src="/images/website-logo.png"
        alt="website-logo"
        width={105}
        height={80}
        quality={100}
        className="object-contain"
      />

      <span className="text-white text-3xl font-extrabold">RADKAAT</span>

      <p className="text-gray-300 text-[16px] font-semibold leading-relaxed">
        cycling / trekking / hiking / trail running / paragliding / rafting
      </p>
    </div>
  );
}
