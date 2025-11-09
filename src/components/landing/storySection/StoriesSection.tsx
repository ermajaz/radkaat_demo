"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { destinations } from "@/utils/destinations";
import DestinationCard from "../destination/DestinationCard";

export default function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    return () => lenis.destroy();
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
      className="pt-10 flex flex-col gap-10 overflow-hidden relative"
      style={{
        background: `linear-gradient(180deg, #001644 0%, #000206 100%)`,
      }}
    >
      {/* 🌍 Horizontal Scroll of Destination Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-10 ml-10 gap-10 scroll-smooth"
      >
        {destinations.map((destination, index) => (
          <div key={destination.id} className="snap-start flex-shrink-0 w-[800px]">
            <DestinationCard
              destination={destination}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>

      {/* 🐾 Bottom Strip */}
      <div className="flex justify-between items-center h-[130px] px-10 bg-[#1A1A1A]">
        <div className="flex flex-col w-[350px]">
          <h2 className="text-white text-[48px] font-bold">THE JUNGLE BOOK</h2>
          <p className="text-[#B3B3B3] text-[12px] font-light max-w-full">
            A timeless tale of adventure and discovery, following Mowgli’s
            journey through the wild jungle with his loyal companions.
          </p>
        </div>

        <div className="flex gap-10 pr-10 overflow-x-auto hide-scrollbar">
          {destinations.map((story, index) => (
            <div
              key={index}
              onClick={() => handleStoryClick(index)}
              className="cursor-pointer max-w-[200px] flex flex-col items-center text-center transition-all duration-300"
            >
              <span
                className={`uppercase text-[12px] font-medium ${
                  activeIndex === index ? "text-stone" : "text-gray-300"
                }`}
              >
                {story.title}
              </span>
              <span
                className={`text-[10.5px] font-normal ${
                  activeIndex === index ? "text-stone" : "text-gray-400"
                }`}
              >
                {story.date}
              </span>

              {activeIndex === index && (
                <span className="block w-full h-[2px] bg-stone mt-2"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
