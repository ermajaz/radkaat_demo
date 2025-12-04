"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import StoryScroller from "./components/StoryScroller";
import JungleBookNavDesktop from "./components/JungleBookNavDesktop";
import { stories } from "@/features/story/utils/story-data";

export default function JungleBookDesktop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lenis Smooth Scroll
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
        left: card.offsetLeft - scrollRef.current.clientWidth / 2 + card.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-linear-to-b from-[#001644] to-black">
      <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory scroll-smooth">
        <StoryScroller destinations={stories} activeIndex={activeIndex} />
      </div>

      <JungleBookNavDesktop
        destinations={stories}
        activeIndex={activeIndex}
        onStoryClick={onStoryClick}
      />
    </section>
  );
}
