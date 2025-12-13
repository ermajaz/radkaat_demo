"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { BIKES } from "./utils/bicycle-showcase";

import MobileBikesStrip from "./components/mobile/MobileBikesStrip";
import MobileOpenBikeCard from "./components/mobile/MobileOpenBikeCard";
import MobileClosedBikeCard from "./components/mobile/MobileClosedBikeCard";

export default function BicycleShowcaseMobile() {
  const [active, setActive] = useState(0);
  const isProgrammatic = useRef(false);
  const zoneRef = useRef<HTMLDivElement>(null);

  const VIEW_HEIGHT = typeof window !== "undefined"
  ? window.innerHeight
  : 800;

  /** Reorder bikes so active stays on top */
  const ordered = useMemo(() => {
    const bikes = [...BIKES];
    const top = bikes[active];
    return [top, ...bikes.filter((b) => b.id !== top.id)];
  }, [active]);

  /** Auto-change bike while scrolling */
  useEffect(() => {
    const zone = zoneRef.current;
    if (!zone) return;

    function onScroll() {
      if (isProgrammatic.current) return;
      const rect = zone?.getBoundingClientRect();
      if(!rect) return;

      const isInside =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInside) {
        const scrollRange = rect.height - window.innerHeight;
        const progress = Math.min(
          Math.max((0 - rect.top) / scrollRange, 0),
          1
        );

        const newIndex = Math.round(progress * (BIKES.length - 1));
        if (newIndex !== active) setActive(newIndex);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  /** Scroll to bike when selecting closed card */
  function scrollToBike(idx: number) {
    const zone = zoneRef.current;
    if (!zone) return;

    isProgrammatic.current = true;

    const targetY = zone.offsetTop + idx * VIEW_HEIGHT;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammatic.current = false;
    }, 700);
  }

  return (
    <div
      ref={zoneRef}
      className="relative"
      style={{ height: `calc(100dvh * ${BIKES.length})` }}

    >
      {/* Top 65px strip stays fixed at screen top */}
      <div className="sticky top-16 left-0 right-0 z-50">
        <MobileBikesStrip bike={BIKES[active]} />
      </div>

      {/* Sticky section starts exactly BELOW the strip */}
      <div
        className="
          sticky 
          w-full
          top-[clamp(48px,7vh,65px)]
          h-[calc(100dvh-clamp(48px,7vh,65px))]
          bg-black 
          overflow-hidden
        "
      >

        {/* OPEN CARD */}
        <MobileOpenBikeCard bike={ordered[0]} />

        {/* CLOSED CARDS */}
        <div className="absolute bottom-0 left-0 w-full">
          {ordered.slice(1).map((bike) => (
            <MobileClosedBikeCard
              key={bike.id}
              bike={bike}
              onSelect={() => {
                const index = BIKES.findIndex((b) => b.id === bike.id);
                scrollToBike(index);
                setActive(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
