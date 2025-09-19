"use client";

import { useEffect, useRef, useState } from "react";
import BikeCard from "./BikeCard";
import BikeDetails from "./BikeDetails";
import { bikes } from "@/utils/data";
import { Bikee } from "@/types";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

export default function BikeComparison() {
  const [selectedBike, setSelectedBike] = useState<Bikee>(bikes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // refs used for GSAP/ScrollTrigger logic & cleanup
  const sectionRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef<number>(0);
  const stRef = useRef<ScrollTriggerType | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  const selectIndex = (idx: number) => {
    if (idx < 0) idx = 0;
    if (idx > bikes.length - 1) idx = bikes.length - 1;
    currentIndexRef.current = idx;
    setCurrentIndex(idx);
    setSelectedBike(bikes[idx]);
  };

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const ScrollTrigger = ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted || !sectionRef.current) return;

      const steps = bikes.length;
      const endDistance = Math.max(0, (steps - 1) * window.innerHeight);
      const snapIncrement = steps > 1 ? 1 / (steps - 1) : 1;

      ctxRef.current = gsap.context(() => {
        stRef.current = ScrollTrigger.create({
          trigger: sectionRef.current!,
          start: "top top",
          end: `+=${endDistance}`,
          pin: true,
          scrub: 0.5,
          onUpdate(self) {
            const rawProgress = self.progress;
            const idx = Math.round(rawProgress / snapIncrement);
            if (idx !== currentIndexRef.current) {
              currentIndexRef.current = idx;
              setCurrentIndex(idx);
              setSelectedBike(bikes[idx]);
            }
          },
          onLeave() {
            const finalIdx = steps - 1;
            currentIndexRef.current = finalIdx;
            setCurrentIndex(finalIdx);
            setSelectedBike(bikes[finalIdx]);
          },
          onLeaveBack() {
            currentIndexRef.current = 0;
            setCurrentIndex(0);
            setSelectedBike(bikes[0]);
          },
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    })();

    return () => {
      mounted = false;
      if (stRef.current) {
        stRef.current.kill();
        stRef.current = null;
      }
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Bike Cards */}
        <div className="flex flex-col lg:flex-row w-[60%] h-full justify-between relative overflow-hidden">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className="w-1/3 cursor-pointer flex flex-col items-center relative"
              onClick={() => selectIndex(index)}
            >
              <BikeCard bike={bike} isActive={selectedBike.id === bike.id} />
              {index <= bikes.length - 1 && (
                <div className="absolute right-0 h-full border-r border-gray-500" />
              )}
            </div>
          ))}
        </div>

        {/* Right: Graph + Details */}
        <div className="w-[40%] h-[80vh]">
          <BikeDetails bike={selectedBike} allBikes={bikes} />
        </div>
      </div>
    </section>
  );
}
