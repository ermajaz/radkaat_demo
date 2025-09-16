"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import WarrenTextBlock from "./WarrenTextBlock";

interface HeroScrollParallaxProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function HeroScrollParallax({
  image,
  title,
  subtitle,
}: HeroScrollParallaxProps) {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { bottom } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const fadePoint = windowHeight / 2;
      let progress = 0;

      if (bottom < windowHeight && bottom > fadePoint) {
        progress = 1 - (bottom - fadePoint) / (windowHeight - fadePoint);
      } else if (bottom <= fadePoint) {
        progress = 1;
      }

      controls.start({
        y: -progress * 120,
        opacity: 1 - progress,
        scale: 1 + progress * 0.08,
        transition: { type: "tween", duration: 0.2 },
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="w-full flex flex-col overflow-hidden">
        <ContainerScroll
         
        >
          <Image
            src={image}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto object-cover h-full object-left-top rounded-xl"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <WarrenTextBlock />
    </section>
  );
}
