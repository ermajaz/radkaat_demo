"use client";

import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
import JungleBookNavMobile from "./components/JungleBookNavMobile";
import StoryScrollerMobile from "./components/StoryScrollerMobile";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { fetchTours } from "@/features/story";

export default function JungleBookMobile() {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { tours } = useAppSelector((state: RootState) => state.story);

  useEffect(() => {
      if (tours.length === 0) {
        dispatch(fetchTours());
      }
    }, [dispatch, tours.length]);

  useEffect(() => {
  window.scrollTo(0, 0); // ✅ lock scroll at top on load

  const lenis = new Lenis({
    duration: 0.7,
    autoRaf: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

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
    <section className="relative w-full bg-linear-to-b from-[#001644] to-black">
      <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 py-4">
        <StoryScrollerMobile destinations={tours} activeIndex={activeIndex} />
      </div>

      <JungleBookNavMobile
        destinations={tours}
        activeIndex={activeIndex}
        onStoryClick={onStoryClick}
      />
    </section>
  );
}
