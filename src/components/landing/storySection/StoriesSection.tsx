"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { destinations } from "@/utils/destinations";
import DestinationCard from "../destination/DestinationCard";
import { JungleBookDesktop } from "./JungleBookDesktop";
import { JungleBookMobile } from "./JungleBookMobile";
import { DestinationCardMobile } from "../destination/DestinationCardMobile";

export default function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      duration: 0.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Detect mobile viewport
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
    };
  }, []);

  const handleStoryClick = (index: number) => {
    setActiveIndex(index);
    const storyCard = scrollRef.current?.children[index] as HTMLElement;
    if (storyCard && scrollRef.current) {
      const scrollLeft =
        storyCard.offsetLeft -
        scrollRef.current.offsetLeft -
        scrollRef.current.clientWidth / 2 +
        storyCard.clientWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="pt-5 md:pt-10 flex flex-col gap-5 md:gap-10 overflow-hidden relative"
      style={{
        background: `linear-gradient(180deg, #001644 0%, #000206 100%)`,
      }}
    >
      {/* 🌍 Horizontal Scroll of Destination Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 sm:px-6 md:px-10 ml-5 sm:ml-10 gap-6 md:gap-10 scroll-smooth"
      >
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className="snap-start shrink-0 w-[80vw] sm:w-[65vw] md:w-[800px] flex justify-center"
          >
            {isMobile ? (
              <DestinationCardMobile
                destination={destination}
                isActive={activeIndex === index}
              />
            ) : (
              <DestinationCard
                destination={destination}
                isActive={activeIndex === index}
              />)}
          </div>
        ))}
      </div>

      {/* 🐾 Jungle Book Component */}
      {isMobile ? (
        <JungleBookMobile
          destinations={destinations}
          activeIndex={activeIndex}
          onStoryClick={handleStoryClick}
        />
      ) : (
        <JungleBookDesktop
          destinations={destinations}
          activeIndex={activeIndex}
          onStoryClick={handleStoryClick}
        />
      )}
    </section>
  );
}
