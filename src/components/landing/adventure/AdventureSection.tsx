"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverButton } from "../testRide/desktop/AnimatedButton";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdventureSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/contour.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black/30 z-5 pointer-events-none"></div> */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bicycle Adventures, Tours, Maps
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
          Cycling adventures and cultural immersions across the Himalaya,
          curated by experts.
        </p>
        <h2>
          <HoverButton className="rounded-none bg-white text-black py-3 px-6 !tracking-[3px] flex items-center gap-2 cursor-pointer">Explore Adventures <MoveRight/></HoverButton>
        </h2>
      </div>
    </section>
  );
}
