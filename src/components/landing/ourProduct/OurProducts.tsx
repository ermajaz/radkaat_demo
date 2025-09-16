"use client";

import { useEffect, useRef } from "react";
import { ourProducts } from "@/utils/data";

import type gsapType from "gsap";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function OurProducts() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Dynamically import GSAP + ScrollTrigger
    import("gsap").then((gsapModule) =>
      import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
        const gsap = gsapModule.default as typeof gsapType;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 150, scale: 0.9, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current[0]?.closest("section"),
              start: "top 80%",
            },
          }
        );
      })
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black text-white px-6 md:px-8 py-10">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full place-items-center">
          {ourProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative will-change-transform cursor-pointer group"
            >
              {/* Card with hover glow */}
              <div className="relative overflow-hidden ">
                <DirectionAwareHover
                  imageUrl={product.image}
                  title={product.title}
                  className="h-[32rem] md:h-[36rem] w-[24rem] md:w-[26rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
