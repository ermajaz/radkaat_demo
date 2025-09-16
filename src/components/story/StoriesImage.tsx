"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import { stories } from "@/utils/data";

export default function StoriesImage() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative py-10 sm:py-20 px-6 overflow-hidden">
      <DraggableCardContainer className="relative flex min-h-[90vh] w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-1/2 text-center text-xl sm:text-3xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 z-0">
          Explore our community stories
        </p>

        {stories.map((story, index) => (
          <DraggableCardBody key={index} className={story.className}>
            <div className="relative z-10 w-full h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover  pointer-events-none"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                {story.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300 px-4 leading-relaxed line-clamp-2">
                {story.excerpt}
              </p>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
