"use client";

import Image from "next/image";

export default function GeometryImage({
  hoveredImage,
}: {
  hoveredImage: string | null;
}) {
  const src = hoveredImage ?? "/images/bikes/frame-wheel.jpg";

  return (
    <div className="relative w-full flex items-center justify-center">
      <Image
        src={src}
        alt="Spec Diagram"
        width={600}
        height={500}
        className="w-full object-contain transition-opacity duration-300"
      />
    </div>
  );
}
