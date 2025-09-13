"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourProducts } from "@/utils/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "../ui/background-beams";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

gsap.registerPlugin(ScrollTrigger);

export default function OurProducts() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Animate cards on scroll
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 150, scale: 0.85, rotateX: 10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0].closest("section"),
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-black text-white px-6 md:px-12 overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {ourProducts.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative will-change-transform cursor-pointer"
          >
            {/* Direction Aware Hover Card */}
            <DirectionAwareHover imageUrl={product.image}>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {product.title}
              </h3>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </section>
  );
}
