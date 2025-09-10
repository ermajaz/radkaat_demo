"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourProducts } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

export default function OurProducts() {
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const titlesRef = useRef<HTMLHeadingElement[]>([]);
  const underlineRef = useRef<HTMLSpanElement[]>([]);
  const overlayRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Animate cards sliding from the right
    gsap.fromTo(
      cardsRef.current,
      { opacity: 1, x: 120, rotateY: 10, scale: 0.95 }, // start: right + slight tilt
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsRef.current[0].closest("section"),
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(cardsRef.current[index], {
      scale: 1.05,
      duration: 0.25,
      ease: "power2.out",
    });
    gsap.to(titlesRef.current[index], {
      y: -5,
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(underlineRef.current[index], {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current[index], {
      backgroundColor: "rgba(0,0,0,0.65)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(cardsRef.current[index], {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
    gsap.to(titlesRef.current[index], {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(underlineRef.current[index], {
      width: "0%",
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(overlayRef.current[index], {
      backgroundColor: "rgba(0,0,0,0.4)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="w-full to-black text-white pb-20 px-8 relative overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-white text-xl md:text-3xl font-display font-semibold uppercase tracking-wide mb-8">
        <span className="relative inline-block leading-tight">
          Our Products
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 -bottom-3 h-5 w-full bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('https://yeticycles.com/textHighlights/word-underline.png')",
              filter: "brightness(0) invert(1)",
            }}
          />
        </span>
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ourProducts.map((product, index) => (
          <a
            key={product.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            href={product.link}
            className="relative group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 perspective-1000"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Background Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transform-gpu"
            />

            {/* Overlay */}
            <div
              ref={(el) => {
                if (el) overlayRef.current[index] = el;
              }}
              className="absolute inset-0 bg-black/40"
            ></div>

            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
              <h3
                ref={(el) => {
                  if (el) titlesRef.current[index] = el;
                }}
                className="text-3xl md:text-4xl font-bold relative mb-3"
              >
                {product.title}
                <span
                  ref={(el) => {
                    if (el) underlineRef.current[index] = el;
                  }}
                  className="absolute left-0 bottom-[-6px] h-[3px] bg-sandstorm w-0"
                ></span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                Discover the latest in {product.title.toLowerCase()} — designed
                for performance, style, and durability.
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
