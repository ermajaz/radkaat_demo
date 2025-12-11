"use client";

import Image from "next/image";

export default function BikeImage({ image }: { image: string }) {
  return (
    <div className="relative w-full h-full">
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
