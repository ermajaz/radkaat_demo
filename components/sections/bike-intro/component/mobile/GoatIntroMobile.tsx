"use client";

import Image from "next/image";

export default function GoatIntroMobile() {
  return (
    <div id="bike-showcase" className="relative w-full h-[730px] overflow-hidden flex justify-center md:hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/bg/bike-intro-img.webp"
        alt="GOAT Series Background"
        fill
        priority
        quality={100}
        className="
          object-cover 
          brightness-[0.95]
        "
      />

      {/* BOTTOM DARK FADE (like screenshot) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/85 to-transparent pointer-events-none" />

      {/* TEXT CONTENT */}
      <div
        className="
          absolute 
          top-[20%]
          w-full 
          flex flex-col 
          items-center 
          text-center 
          z-20 
          px-5
        "
      >
        
        {/* HEADING WITH STARS */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-black text-[20px] leading-none drop-shadow-[0_2px_2px_rgba(255,255,255,0.25)]">
            ★
          </span>

          <span className="text-[18px] font-bold text-superblack tracking-wide uppercase drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
            Introducing Goat Series
          </span>

          <span className="text-black text-[20px] leading-none drop-shadow-[0_2px_2px_rgba(255,255,255,0.25)]">
            ★
          </span>
        </div>

        {/* DESCRIPTION TEXT */}
        <p className="
          text-[14px]
          font-medium
          leading-relaxed
          text-black
          max-w-[350px]
          drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)]
        ">
          The GOAT Series draws its essence from the world’s most remarkable
          mountain species — the nimble Serow, the mysterious Saola, and the
          resilient Takin. Each bike inherits their instinct, grace, and power,
          engineered for riders who demand more than performance.
        </p>
      </div>
    </div>
  );
}
