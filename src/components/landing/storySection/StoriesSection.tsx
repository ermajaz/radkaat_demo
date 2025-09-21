"use client";

import { useEffect, useRef, useState } from "react";
import { stories } from "@/utils/data";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      className="pt-10 px-0 flex flex-col gap-10 overflow-hidden relative"
      style={{
        background: `linear-gradient(180deg, #001644 0%, #000206 100%)`,
      }}
    >
      {/* Horizontal Scroll of Stories */}
      <div
        ref={scrollRef}
        className="overflow-x-auto mx-10 scrollbar-hide flex space-x-8 snap-x snap-mandatory hide-scrollbar"
      >
        {stories.map((story, index) => (
          <figure
            key={index}
            className={`w-[590px] h-[560px] flex-shrink-0 snap-start bg-[#1A1A1A] text-white rounded-b-[8px] shadow-2xl`}
          >
            <div className="relative w-full h-[426px] overflow-hidden group">
              <Image
                src={story.img}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw"
                className="object-cover cursor-pointer transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-2 right-2 flex items-center justify-center w-[106px] h-[37px] border-[0.5px] border-white/50 rounded-[3px] bg-[#090909]/60 backdrop-blur-sm transition-all duration-300 hover:bg-[#090909]/80 hover:scale-105">
                <Button
                  onClick={() => router.push(`/stories/${story.title}`)}
                  className="text-[16px] font-semibold text-stone cursor-pointer"
                >
                  View Story
                </Button>
              </div>
            </div>
            <figcaption className="h-[122px] p-[10px] flex flex-col gap-2">
              <span className="text-white text-[24px] tracking-[1px] font-bold uppercase cursor-pointer">
                {story.title}
              </span>
              <span className="text-white text-[12px] font-normal">
                {story.date}
              </span>
              <p className="text-white text-[16px]">{story.excerpt}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/*  Bottom Strip */}
      <div className="flex justify-between items-center h-[110px] p-10 bg-[#1A1A1A]">
        <h2 className="text-white text-[48px] font-bold tracking-wide">
          THE JUNGLE BOOK
        </h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {stories.map((story, index) => (
            <div
              key={index}
              onClick={() => handleStoryClick(index)}
              className={`cursor-pointer flex flex-col items-center gap-1 text-center transition-all duration-300
                `}
            >
              <span
                className={`uppercase text-[12px] ${
                  activeIndex === index
                    ? "text-sandstorm font-bold"
                    : "text-white"
                }`}
              >
                {story.title}
              </span>
              <span
                className={`text-[10px] mt-1 text-white/70 ${
                  activeIndex === index
                    ? "text-sandstorm font-bold"
                    : "text-white"
                }`}
              >
                {story.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
