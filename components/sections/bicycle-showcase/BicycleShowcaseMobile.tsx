"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { BIKES } from "./utils/bicycle-showcase";

import MobileBikesStrip from "./components/mobile/MobileBikesStrip";
import MobileOpenBikeCard from "./components/mobile/MobileOpenBikeCard";
import MobileClosedBikeCard from "./components/mobile/MobileClosedBikeCard";
import GoatIntroMobile from "../bike-intro/component/mobile/GoatIntroMobile";

export default function BicycleShowcaseMobile() {
  const [active, setActive] = useState(0);
  const isProgrammatic = useRef(false);
  const zoneRef = useRef<HTMLDivElement>(null);

  const VIEW_HEIGHT =
    typeof window !== "undefined" ? window.innerHeight : 800;

  /* -----------------------------
     Height logic (accordion)
  ----------------------------- */
  function heightFor(idx: number) {
    return idx === active ? "calc(100% - 140px)" : "70px";
  }

  /* -----------------------------
     Scroll → change active
  ----------------------------- */
  useEffect(() => {
    const zone = zoneRef.current;
    if (!zone) return;

    function onScroll() {
      if (isProgrammatic.current) return;

      const rect = zone?.getBoundingClientRect();
      if (!rect) return;
      const isInside =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInside) return;

      const scrollRange = rect.height - window.innerHeight;
      const progress = Math.min(
        Math.max((0 - rect.top) / scrollRange, 0),
        1
      );

      const index = Math.round(progress * (BIKES.length - 1));
      if (index !== active) setActive(index);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  /* -----------------------------
     Tap → scroll to card
  ----------------------------- */
  function scrollToBike(idx: number) {
    const zone = zoneRef.current;
    if (!zone) return;

    isProgrammatic.current = true;

    const zoneRect = zone.getBoundingClientRect();
    const zoneTop = window.scrollY + zoneRect.top;

    const scrollRange = zone.offsetHeight - window.innerHeight;
    const step = scrollRange / (BIKES.length - 1);

    const targetY = zoneTop + step * idx;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammatic.current = false;
    }, 700);
  }


  return (
    <div className="relative">
      {/* Intro section */}
      <GoatIntroMobile />

      {/* Scroll zone */}
      <div
        ref={zoneRef}
        className="relative"
        style={{ height: `calc(100dvh * ${BIKES.length})` }}
      >
        {/* Sticky top strip */}
        <div className="sticky top-16 z-50">
          <MobileBikesStrip bike={BIKES[active]} />
        </div>

        {/* Sticky accordion */}
        <div
          className="
            sticky
            top-24
            h-[calc(100dvh-clamp(96px,7vh,64px))]
            bg-black
            overflow-hidden
          "
        >
          <div className="flex flex-col h-full">
            {BIKES.map((bike, idx) => {
              const isActive = idx === active;

              return (
                <motion.div
                  key={bike.id}
                  layout
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden"
                  style={{ height: heightFor(idx) }}
                >
                  {/* ACTIVE */}
                  {isActive ? (
                    <MobileOpenBikeCard bike={bike} />
                  ) : (
                    <div
                      className=""
                      onClick={() => {
                        scrollToBike(idx);
                        setActive(idx);
                      }}
                    >
                      <MobileClosedBikeCard bike={bike} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
