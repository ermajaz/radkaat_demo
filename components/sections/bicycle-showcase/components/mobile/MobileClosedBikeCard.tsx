"use client";

import Image from "next/image";

export default function MobileClosedBikeCard({ bike, onSelect }: any) {
  return (
    <button
      onClick={onSelect}
      className="
        w-full 
        h-[70px] 
        bg-[#121212]/95
        border-t border-white/10 
        flex items-center gap-4 px-4
      "
    >
      {/* FRONT BIKE IMAGE */}
      <div className="relative w-[55px] h-[55px]">
        <Image
          src={bike.logo}
          alt={bike.uiName}
          fill
          className="object-contain opacity-90 p-1.5"
        />
      </div>

      {/* LOGO + NAME + DESCRIPTION */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          {/* NAME */}
          <p className="text-white font-semibold text-[18px] leading-none">
            {bike.uiName}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white/60 text-[13px] line-clamp-1 mt-1">
          {bike.description}
        </p>
      </div>

      {/* ARROW */}
      <span className="text-white/60 text-[26px]">›</span>
    </button>
  );
}
