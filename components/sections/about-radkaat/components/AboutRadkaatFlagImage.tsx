"use client";

import Image from "next/image";

export default function AboutRadkaatFlagImage() {
  return (
    <div className="relative w-full lg:w-[44%] h-1/2 lg:h-full flag-img overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image quality={100}
          src="/videos/flag1.gif"
          alt="Flag"
          fill
          className="w-full h-full object-cover object-[88%_12%]"
        />
      </div>
    </div>
  );
}
