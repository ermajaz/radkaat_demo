"use client";

import Image from "next/image";

export default function FooterHeading() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pr-10 w-full">
      
      {/* Left: Heading */}
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0">
          <Image quality={100}
            src="/images/born-in-shimla.png"
            alt="Born in Shimla"
            fill
            className="object-contain -ml-4"
            sizes="80px"
          />
        </div>

        <h2 className="text-left text-[26px] md:text-[34px] lg:text-[40px] font-bold uppercase leading-tight tracking-widest! font-display">
          Radkaat. <br /> Here to Help
        </h2>
      </div>
      
    </div>
  );
}
