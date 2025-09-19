"use client";

import { useEffect, useRef } from "react";
import { ourProducts } from "@/utils/data";
import type gsapType from "gsap";
import Link from "next/link";
import Image from "next/image";
import { HoverButton } from "../testRide/desktop/AnimatedButton";

export default function GridProduct() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    import("gsap").then((gsapModule) =>
      import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
        const gsap = gsapModule.default as typeof gsapType;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 100, rotateY: -15, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.25,
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
    <section className="relative w-full min-h-screen py-16 px-6 text-white">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="w-full text-start text-xl md:text-4xl font-display font-bold uppercase tracking-wider mb-14">
          <span className="relative inline-block leading-tight">
            Our Products
            <span
              aria-hidden
              className="absolute left-0 -bottom-2 h-[10px] w-full bg-no-repeat bg-[length:100%_100%]"
              style={{
                backgroundImage:
                  "url('https://yeticycles.com/textHighlights/word-underline.png')",
                filter: "brightness(0) invert(1)",
              }}
            />
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {ourProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative group perspective"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-[22rem] h-[28rem] md:w-[28rem] md:h-[32rem] transform transition-transform duration-700 group-hover:scale-[1.07] group-hover:rotate-[-2deg]">
                {/* Background Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

                {/* Title */}
                <div className="absolute bottom-8 left-6 z-20">
                  <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider drop-shadow-lg">
                    {product.title}
                  </h3>
                </div>

                {/* CTA on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <Link href={product.link}>
                    <HoverButton>Explore {product.title}</HoverButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
