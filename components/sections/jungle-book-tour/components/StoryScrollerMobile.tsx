"use client";

import { useEffect, useRef } from "react";
import StoryCardMobile from "./StoryCardMobile";

export default function StoryScrollerMobile({
  destinations,
  activeIndex,
}: {
  destinations: any[];
  activeIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current?.children[activeIndex] as HTMLElement;

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="flex snap-x snap-mandatory overflow-x-auto w-full gap-4 px-4 hide-scrollbar"
    >
      {destinations.map((item: any, i: number) => (
        <div key={item.id} className="snap-center shrink-0 w-[88%]">
          <StoryCardMobile destination={item} isActive={activeIndex === i} />
        </div>
      ))}
    </div>
  );
}
