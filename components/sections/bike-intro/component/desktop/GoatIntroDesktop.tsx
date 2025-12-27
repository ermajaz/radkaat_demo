"use client";

import Image from "next/image";

export default function GoatIntroDesktop() {
  return (
    <div id="bike-showcase" className="relative w-full h-[785px] overflow-hidden flex justify-center">

      {/* Background Image */}
      <Image
        src="/images/bikes/goat-intro.jpg"
        alt="GOAT Series Background"
        fill
        priority
        quality={100}
        className="object-contain object-center"
      />

      {/* Bottom Dark Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

      {/* TEXT WRAPPER – Positioned EXACTLY like screenshot */}
      <div
        className="
          absolute 
          top-[10%] 
          w-full 
          flex flex-col 
          items-center 
          justify-start 
          z-20 
          text-center 
          px-6
        "
      >

        {/* HEADING WITH SHARP STARS */}
        <div className="flex items-center gap-5 mb-4">
          <span className="text-black text-[32px] leading-none drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
            ★
          </span>
          <span className="text-[33px] font-extrabold tracking-wide uppercase text-superblack drop-shadow-[0_2px_2px_rgba(255,255,255,0.35)]">
            Introducing Goat Series
          </span>
          <span className="text-black text-[32px] leading-none drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
            ★
          </span>
        </div>

        {/* DESCRIPTION TEXT */}
        <p className="
          text-[18px] 
          font-medium
          text-black 
          leading-relaxed 
          max-w-[980px] 
          drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)]
        ">
          The GOAT Series draws its essence from the world’s most remarkable
          mountain species – the nimble Serow, the mysterious Saola, and the
          resilient Takin. Each bike captures their raw instinct, uncommon
          grace, and unstoppable power, engineered for riders who demand more
          than just performance.
        </p>

      </div>
    </div>
  );
}
