"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AdventureSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="
        relative w-full min-h-[50vh] md:min-h-fit pb-12 md:pb-16 
        flex items-center justify-center 
        px-4 sm:px-6 md:px-10
      "
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Main Content */}
        <div
          className="
            relative z-20 flex flex-col items-center justify-center text-center
            px-3 sm:px-6 md:px-10 
            h-fit md:h-96
          "
        >
          {/* Title */}
          <h1
            className="
              text-[28px] sm:text-[34px] md:text-[48px] 
              font-bold text-stone mt-2 md:mt-4 
              drop-shadow-lg leading-snug
            "
          >
            Bicycle Adventures, Tours, Maps
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-3 text-[15px] sm:text-[18px] md:text-[24px] 
              text-stone/90 max-w-[95%] sm:max-w-[85%] md:max-w-[800px]
              leading-relaxed drop-shadow-md
            "
          >
            Cycling adventures and cultural immersions across the Himalaya,
            curated by experts.
          </p>

          {/* Explore Button */}
          <Button
            className="
              h-12 sm:h-14 mt-6 sm:mt-5 
              bg-stone text-superblack 
              rounded-lg md:rounded-none 
              px-5 sm:px-7 font-semibold gap-2 
              cursor-pointer uppercase text-[15px] sm:text-[17px] md:text-[18px]
              transition-all duration-300 active:scale-[0.97]
              hover:bg-[#D9D6C1] hover:text-black
            "
          >
            Explore Adventures <MoveRight className="size-4 sm:size-5 md:size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
