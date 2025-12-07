"use client";

import Image from "next/image";

export default function AboutRadkaatFlagImage() {
  return (
    <div className="fade-in w-[414px] h-[366px] rounded-[20px] overflow-hidden shadow-xl relative">
      <Image
        src="/videos/flag1.gif"
        alt="Flag"
        fill
        quality={100}
        className="object-cover object-[75%_25%]"
      />
    </div>
  );
}
