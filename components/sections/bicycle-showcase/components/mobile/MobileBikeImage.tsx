"use client";

import Image from "next/image";

export default function MobileBikeImage({ image }: any) {
  return (
    <div className="relative w-full h-[250px] mx-auto">
      <Image 
        src={image}
        alt="Bike"
        fill
        className="object-contain"
        quality={100}
      />
    </div>
  );
}
