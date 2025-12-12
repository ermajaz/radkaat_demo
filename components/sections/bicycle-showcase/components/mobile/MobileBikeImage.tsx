"use client";

import Image from "next/image";

export default function MobileBikeImage({ image }: any) {
  return (
    <div className="relative w-full h-full mx-4 bottom-18">
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
