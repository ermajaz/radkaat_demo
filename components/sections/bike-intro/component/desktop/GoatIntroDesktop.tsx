"use client";

import Image from "next/image";

export default function GoatIntroDesktop() {
  return (
    <section
      id="bike-showcase"
      className="relative w-full h-[785px]"
    >
      {/* Background */}
      <Image
        src="/images/bikes/goat-intro.jpg"
        alt="GOAT Series Background"
        fill
        priority
        quality={100}
        className="object-contain object-center"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

      {/* CONTENT FLOW */}
      <div className="relative flex flex-col items-center pt-[20vh] px-6">


        {/* ❌ NORMAL SCROLLING DESCRIPTION */}
        <p className="text-[18px] font-medium text-black max-w-[980px] text-center">
          The GOAT Series draws its essence from the world’s most remarkable
          mountain species – the nimble Serow, the mysterious Saola, and the
          resilient Takin.
        </p>

      </div>
    </section>
  );
}
