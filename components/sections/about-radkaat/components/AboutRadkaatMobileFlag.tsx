"use client";

import Image from "next/image";

export default function AboutRadkaatMobileFlag() {
  return (
    <div className="h-[65%] absolute inset-0 flag-img overflow-hidden">
      <Image
        src="/videos/flag1.gif"
        alt="Waving Indian Flag"
        fill
        priority
        quality={100}
        className="
      object-cover
      object-[70%_center] 
      brightness-[0.9]
      contrast-[1.05]
      scale-[1.05]
      transition-transform duration-700 ease-out
    "
      />
    </div>
  );
}
