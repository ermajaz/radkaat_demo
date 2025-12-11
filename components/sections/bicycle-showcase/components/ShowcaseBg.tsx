"use client";

import Image from "next/image";

export default function ShowcaseBg({
  src = "/images/bg/showcase-bg.png",
  alt = "background",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
