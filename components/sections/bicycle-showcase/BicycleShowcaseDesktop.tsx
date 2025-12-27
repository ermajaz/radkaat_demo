"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BIKES, variants } from "./utils/bicycle-showcase";
import BikesStrip from "./components/BikesStrip";
import ShowcaseBg from "./components/ShowcaseBg";
import BikeNameInGradient from "./components/BikeNameInGradient";
import BikeImage from "./components/BikeImage";
import RadarChart from "./components/RadarChart";
import BikeSpecsCard from "./components/BikeSpecsCard";
import ViewProductButton from "./ViewProductButton";
import Image from "next/image";
import BicycleClosedCard from "./components/BicycleClosedCard";
import BottomVariantSelector from "./components/BottomVariantSelector";
import Button360 from "./components/Button360";
import BikeNameInGradientWide from "./components/BikeNameInGradientWide";
import Bike3D from "./components/Bike3D";
import Bike3Dcard from "./components/Bike3Dcard";
import GoatIntroDesktop from "../bike-intro/component/desktop/GoatIntroDesktop";
import GoatStickyHeading from "./components/GoatStickyHeading";


export default function BikeShowcaseDesktop() {
  const [active, setActive] = useState(0);
  const isProgrammaticScroll = useRef(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const [focus360, setFocus360] = useState(false);
  const [activeModel, setActiveModel] = useState("model-1");
  const [activeColor, setActiveColor] = useState(variants[0].colors[0]);
  const SECTION_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 800;
  const TOTAL_BIKES = BIKES.length;

  /** ------------------------------
   * STICKY LOGIC:
   * While the sticky section is pinned,
   * scroll inside to switch bikes.
   * ------------------------------ */
  useEffect(() => {
    const sticky = stickyRef.current;
    const zone = scrollZoneRef.current;
    if (!sticky || !zone) return;

    function handleScroll() {
      if (isProgrammaticScroll.current) return; // <-- add this line
      if (!zone) return;

      const rect = zone.getBoundingClientRect();
      const activated = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (activated) {
        const totalScrollableHeight = rect.height - window.innerHeight;

        const scrollProgress = Math.min(
          Math.max((0 - rect.top) / totalScrollableHeight, 0),
          1
        );

        const bikeIndex = Math.round(scrollProgress * (TOTAL_BIKES - 1));

        if (bikeIndex !== active) {
          setActive(bikeIndex);
        }
      }
    }


    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  /** Accordion widths */
  function widthFor(idx: number) {
    return idx === active ? "w-[82%]" : "w-[9%]";
  }

  function scrollToBike(index: number) {
    if (!scrollZoneRef.current) return;

    isProgrammaticScroll.current = true;

    const showcaseTop =
      scrollZoneRef.current.getBoundingClientRect().top + window.scrollY;

    const target = index * SECTION_HEIGHT;

    window.scrollTo({
      top: showcaseTop + target,
      behavior: "smooth",
    });

    // 🔥 IMPORTANT: delay must be LONGER than smooth scroll
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
  }


  const introRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [showBg, setShowBg] = useState(false);





  return (
    <div className="relative">
      <div ref={introRef}>
        <GoatIntroDesktop />
      </div>

      {/* Sticky heading controller */}
      <GoatStickyHeading
        introRef={introRef}
        endRef={endRef}
        scrollZoneRef={scrollZoneRef}
        bike={BIKES[active]}
        showBg={showBg}
        setShowBg={setShowBg}
        isProgrammaticScroll={isProgrammaticScroll}
      />

      <div
        ref={scrollZoneRef}
        className="relative"
        style={{ height: `${SECTION_HEIGHT * BIKES.length}px` }}
      >
        {/* Sticky region */}
        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen overflow-hidden bg-black"
        >

          {/* Main row */}
          <div className="absolute inset-0 top-0"> {/* leave space for top strip (9) */}
            <div className="h-screen flex flex-row w-full">
              {BIKES.map((bike, idx) => {
                const isActive = idx === active;
                const widthClass = widthFor(idx);
                // motion animate layout for smooth width
                return (
                  <motion.div
                    key={bike.id}
                    layout
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`${widthClass} relative shrink-0 h-full`}
                    style={{ minWidth: 0 }}
                  >
                    {/* background */}
                    <ShowcaseBg />

                    {/* overlay content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* center content for OPEN */}
                      <AnimatePresence mode="popLayout">
                        {isActive ? (
                          <motion.div
                            key={`open-${bike.id}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 flex items-center justify-center"
                          >
                            <div className="w-full h-full flex items-center justify-between">
                              {/* Left large bike + big background word */}
                              {!focus360 ? (
                                <>
                                  <div className="flex-1 h-full flex items-center pl-8">
                                    <div className="relative w-full h-full max-w-full">
                                      {/* big background word (partially visible left) */}
                                      <div className="w-full absolute left-0 right-0 mx-auto top-[12%] pointer-events-none">
                                        <BikeNameInGradient name={bike.bgWord ?? bike.uiName.toUpperCase()} gradient={bike.colors.bgGradient} />
                                      </div>

                                      {/* bike image centered */}
                                      <div className="absolute top-[45%] -translate-y-[30%] z-20 w-full h-full">
                                        <BikeImage image={bike.image} bike={BIKES[active]} hideHotspots={focus360} />
                                      </div>
                                      <div className="absolute left-1/2 -translate-x-1/2 bottom-25 z-30">
                                        <Button360 open360={() => setFocus360(true)} />
                                      </div>
                                      <div className="w-full absolute left-1/2 -translate-x-1/2 bottom-5 z-30">
                                        <BottomVariantSelector variants={variants}
                                          activeModel={activeModel}
                                          setActiveModel={setActiveModel}
                                          activeColor={activeColor}
                                          setActiveColor={setActiveColor}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {/* Right column: radar + specs + CTA */}
                                  <div className="w-[350px] flex flex-col items-end justify-center gap-10 mr-10">
                                    <RadarChart stats={bike.stats} color={bike.colors.gradient.split(",")[0]} />
                                    <BikeSpecsCard bike={bike} />

                                  </div>
                                </>
                              ) : (
                                <Bike3Dcard bike={bike} onclose={() => setFocus360(false)} />
                              )}
                            </div>
                          </motion.div>
                        ) : (
                          /* CLOSED layout (tiny column): centered logo + name */
                          <motion.div
                            key={`closed-${bike.id}`}
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.6 }}
                            transition={{ duration: 0 }}
                            className={`flex-1 flex items-center justify-center cursor-pointer`}
                            onClick={() => setActive(idx)}
                            role="button"
                            aria-label={`Open ${bike.uiName}`}
                          >
                            <BicycleClosedCard
                              bike={bike}
                              onClick={() => {
                                scrollToBike(idx);
                                setActive(idx);
                              }}
                            />

                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* clickable overlay for closed columns (full height) */}
                      {!isActive && (
                        <button
                          onClick={() => {
                            scrollToBike(idx);
                            setActive(idx);
                          }}
                          className="absolute cursor-pointer inset-0 w-full h-full bg-transparent"
                          aria-hidden
                        />

                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* END MARKER */}
      <div ref={endRef} className="h-px" />
    </div>
  );
}
