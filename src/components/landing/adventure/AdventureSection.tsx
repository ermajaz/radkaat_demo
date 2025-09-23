"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverButton } from "../testRide/desktop/AnimatedButton";
import { MoveRight } from "lucide-react";
import DestinationSection from "../destination/DestinationSection";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AdventureSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen pb-16 flex items-center justify-center"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* <div className="absolute inset-0 bg-superblack/30 z-5 pointer-events-none"></div> */}
        <div className="relative px-10 h-[384px] z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-[48px] font-bold text-stone mt-4 drop-shadow-lg">
            Bicycle Adventures, Tours, Maps
          </h1>
          <p className="text-[24px] text-stone drop-shadow-md">
            Cycling adventures and cultural immersions across the Himalaya,
            curated by experts.
          </p>
          <Button className="h-[56px] mt-[14px] bg-stone text-superblack rounded-none !px-4 font-semibold gap-2 cursor-pointer uppercase text-[18px]">
            Explore Adventures <MoveRight />
          </Button>
        </div>
        <DestinationSection />
      </div>
    </section>
  );
}
