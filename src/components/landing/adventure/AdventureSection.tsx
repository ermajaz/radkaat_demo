"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverButton } from "../testRide/desktop/AnimatedButton";
import { MoveRight } from "lucide-react";
import DestinationSection from "../destination/DestinationSection";

gsap.registerPlugin(ScrollTrigger);

export default function AdventureSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative px-10 w-full min-h-screen pb-40 flex items-center justify-center"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* <div className="absolute inset-0 bg-superblack/30 z-5 pointer-events-none"></div> */}
        <div className="relative h-[384px] z-20 flex flex-col items-center justify-center text-center gap-[14px]">
          <h1 className="text-4xl md:text-[48px] font-bold text-stone mb-4 drop-shadow-lg">
            Bicycle Adventures, Tours, Maps
          </h1>
          <p className="text-lg md:text-[24px] text-stone drop-shadow-md">
            Cycling adventures and cultural immersions across the Himalaya,
            curated by experts.
          </p>
            <HoverButton className="rounded-none h-[56px] !flex items-center font-semibold !tracking-[1px] gap-2 cursor-pointer !text-[18px]">
              Explore Adventures <MoveRight />
            </HoverButton>
        </div>
        <DestinationSection />
      </div>
    </section>
  );
}
