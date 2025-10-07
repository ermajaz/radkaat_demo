"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SpecsShowcaseProps = {
  images: { src: string; label: string }[];
};

gsap.registerPlugin(ScrollTrigger);

export default function SpecsShowcase({ images }: SpecsShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // final positions for each image (adjust values as needed)
      const positions = [
        { x: -180, y: -40 }, // top-left
        { x: 60, y: -60 },   // top-center
        { x: 220, y: -20 },  // top-right
        { x: -120, y: 120 }, // bottom-left
        { x: 100, y: 140 },  // bottom-center
      ];

      images.forEach((_, i) => {
        const el = containerRef.current?.querySelectorAll(".specs-image")[i] as HTMLElement;
        if (!el) return;

        gsap.fromTo(
          el,
          { scale: 0.3, opacity: 0, x: 0, y: 60 },
          {
            scale: 1,
            opacity: 1,
            x: positions[i]?.x || 0,
            y: positions[i]?.y || 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=70 top+=${i * 20}%`, // stagger entrance across scroll
              end: `top+=70 top+=${(i + 1) * 20}%`,
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top+=70 top",
        end: `+=${images.length * 100}%`, // total scroll length based on image count
        pin: true,
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100vh-70px)] flex items-center justify-center"
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center opacity-0 scale-50 specs-image"
        >
          <span className="mb-2 uppercase text-sm">{img.label}</span>
          <Image
            src={img.src}
            alt={img.label}
            width={200}
            height={200}
            className="object-contain rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
