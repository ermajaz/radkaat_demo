"use client";

import Image from "next/image";

export default function FooterHeadingMobile() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-20 h-20">
        <Image
          src="/images/born-in-shimla.png"
          alt="Born in Shimla"
          fill
          className="object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold uppercase leading-tight">
        Radkaat. <br /> Here to Help
      </h2>
    </div>
  );
}
