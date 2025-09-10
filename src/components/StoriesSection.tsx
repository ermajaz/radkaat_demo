"use client";

import { useEffect, useRef } from "react";
import { stories } from "@/utils/data";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

export default function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
    });

    // Sync RAF
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section className="py-16 px-6 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-white text-xl md:text-3xl font-display font-semibold uppercase tracking-wide mb-8">
        <span className="relative inline-block leading-tight">
          Our Stories
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 -bottom-3 h-4.5 w-full bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('https://yeticycles.com/textHighlights/word-underline.png')",
              filter: "brightness(0) invert(1)",
            }}
          />
        </span>
      </h2>

      {/* Horizontal Scroll with native overflow + Lenis smoothing */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide flex space-x-8 snap-x snap-mandatory"
      >
        {stories.map((story, index) => (
          <figure
            key={index}
            className="min-w-[500px] max-w-[650px] flex-shrink-0 snap-start"
          >
            {/* Image Wrapper with Hover Zoom */}
            <div className="relative w-full h-[450px] mb-4 overflow-hidden group">
              <Image
                src={story.img}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
                className="object-cover cursor-pointer transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Caption */}
            <figcaption className="p-10">
              <h3 className="text-white text-2xl tracking-[5px] font-bold uppercase mb-2 cursor-pointer">
                {story.title}
              </h3>
              <div className="w-10 h-[2px] bg-white mb-3"></div>
              <p className="text-white/90 pr-20 text-sm leading-relaxed cursor-pointer">
                {story.excerpt}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
