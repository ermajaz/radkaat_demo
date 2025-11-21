"use client";

import Image from "next/image";

export default function FooterImage() {
  return (
    <div className="relative hidden sm:flex w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px]">
      <Image quality={100}
        src="/images/footer-img.jpg"
        alt="Radkaat Riders"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
