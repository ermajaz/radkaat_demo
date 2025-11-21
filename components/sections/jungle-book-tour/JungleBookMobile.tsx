"use client";

import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
import StoryScroller from "./components/StoryScroller";
import JungleBookNavMobile from "./components/JungleBookNavMobile";
import { destinations } from "@/utils/destination";

export default function JungleBookMobile() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.7 });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const onStoryClick = (index: number) => {
    setActiveIndex(index);
    const card = scrollRef.current?.children[index] as HTMLElement;
    if (card) {
      scrollRef.current?.scrollTo({
        left: card.offsetLeft - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-linear-to-b from-[#001644] to-black pb-10">
      <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 px-3">
        <StoryScroller destinations={destinations} activeIndex={activeIndex} />
      </div>

      <JungleBookNavMobile
        destinations={destinations}
        activeIndex={activeIndex}
        onStoryClick={onStoryClick}
      />
    </section>
  );
}
