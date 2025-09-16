"use client";

import Image from "next/image";
import React from "react";

interface SimpleGalleryProps {
  src: { src: string; alt?: string };
}

export default function SimpleGallery({ src }: SimpleGalleryProps) {
  return (
    <section className="w-full py-12">
      <div className="w-full mx-auto px-10">
        <div className="relative w-full aspect-[1/1]">
          <Image
            src={src.src}
            alt={src.alt || "Gallery image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}