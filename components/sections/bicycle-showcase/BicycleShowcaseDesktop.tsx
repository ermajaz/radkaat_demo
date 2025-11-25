"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { BIKES, variants } from "./utils/bicycle-showcase";
import { useStopScroll } from "@/hooks/useStopScroll";

import BikesStrip from "./components/BikesStrip";
import BikeTabs from "./components/BikeTabs";
import SpecTabs from "./components/SpecTabs";
import BackgroundName from "./components/BackgroundName";
import BikeImage from "./components/BikeImage";
import RightButtonGroup from "./components/RightButtonGroup";
import BikeDesc from "./components/BikeDesc";
import BottomVariantSelector from "./components/BottomVariantSelector";
import TechSidebar from "./components/tech-sidebar";

export default function BikeShowcaseDesktop() {
  // ✅ States
  const [activeBikeId, setActiveBikeId] = useState(BIKES[0].id);
  const [activeSpecKey, setActiveSpecKey] = useState(BIKES[0].specs[0].key);
  const [focus360, setFocus360] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [bikeChangeKey, setBikeChangeKey] = useState(0);
  const [activeModel, setActiveModel] = useState("model-1");
  const [activeColor, setActiveColor] = useState(variants[0].colors[0]);

  const bike = BIKES.find((b) => b.id === activeBikeId)!;
  const activeSpec = bike.specs.find((s) => s.key === activeSpecKey)!;

  useStopScroll(focus360 || showTech);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ✅ Scroll-based spec change
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const count = bike.specs.length;
      const index = Math.min(Math.floor(v * (count + 1)), count - 1);
      setActiveSpecKey(bike.specs[index].key);
    });
    return () => unsub();
  }, [scrollYProgress, bike]);

  // ✅ Animation Variants
  const anim = {
    fadeStart: { opacity: 0, y: 20 },
    fadeIn: { opacity: 1, y: 0 },

    slideLeftStart: { opacity: 0, x: -40 },
    slideLeftIn: { opacity: 1, x: 0 },

    slideRightStart: { opacity: 0, x: 40 },
    slideRightIn: { opacity: 1, x: 0 },

    slideUpStart: { opacity: 0, y: 60 },
    slideUpIn: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="bike-showcase"
      ref={containerRef}
      style={{ height: `${bike.specs.length * 80}vh` }}
      className="max-sm:hidden w-full relative text-white bg-superblack"
    >
      <motion.div
        style={{ position: "sticky", top: 0, height: "100vh" }}
        className="relative"
      >
        {/* ✅ CLOSE 360 BUTTON */}
        <AnimatePresence>
          {focus360 && (
            <motion.button
              onClick={() => setFocus360(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-6 right-6 z-300 cursor-pointer"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* ✅ MAIN UI */}
        <div className="flex flex-col h-full overflow-hidden">

          {/* ✅ Top Strip */}
          <motion.div
            animate={{ opacity: focus360 ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <BikesStrip bike={bike} />
          </motion.div>

          {/* ✅ BikeTabs + Description */}
          <motion.div
            key={bikeChangeKey + "-tabs"}
            // initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: focus360 ? 0 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-3 pt-3 flex flex-col gap-3 shrink-0"
          // style={{ opacity: focus360 ? 0 : 1 }}
          >
            <BikeTabs
              bikes={BIKES}
              activeBikeId={activeBikeId}
              setActiveBikeId={(id) => {
                const next = BIKES.find((b) => b.id === id)!;
                setActiveBikeId(id);
                setActiveSpecKey(next.specs[0].key);
                setBikeChangeKey((p) => p + 1);
              }}
              setActiveSpecKey={setActiveSpecKey}
            />

            {/* ✅ Description Fade */}
            <motion.div
              key={bikeChangeKey + "-desc"}
              initial="fadeStart"
              animate={{
                ...anim.fadeIn,
                opacity: focus360 ? 0 : 1,
              }}
              variants={anim}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <BikeDesc description={bike.description} />
            </motion.div>
          </motion.div>

          {/* ✅ Center Grid */}
          <div className="flex-1 px-10 overflow-hidden">
            <div className="grid grid-cols-18 gap-6 h-full items-start">

              {/* ✅ Specs Slide from LEFT */}
              <motion.div
                key={bikeChangeKey + "-specs"}
                initial="slideLeftStart"
                animate={{
                  ...anim.slideLeftIn,
                  opacity: focus360 ? 0 : 1,
                }}
                variants={anim}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="col-span-2 overflow-y-auto pt-5"
                style={{ opacity: focus360 ? 0 : 1 }}
              >
                <SpecTabs
                  specs={bike.specs}
                  activeSpecKey={activeSpecKey}
                  setActiveSpecKey={setActiveSpecKey}
                  onViewMore={() => setShowTech(true)}
                />
              </motion.div>

              {/* ✅ Bike - ALWAYS VISIBLE */}
              <motion.div
                key={bikeChangeKey + "-image"}
                initial="slideUpStart"
                animate={{
                  ...anim.slideUpIn,
                }}
                variants={anim}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="col-span-14 relative flex items-center justify-center h-full"
              >
                <BackgroundName name={bike.bgWord} colors={bike.colors} />
                <BikeImage
                  bike={bike}
                  activeSpec={activeSpec}
                  hideHotspots={focus360}
                />
              </motion.div>

              {/* ✅ Right Button Slide from RIGHT */}
              <motion.div
                key={bikeChangeKey + "-rightbtn"}
                initial="slideRightStart"
                animate={{
                  ...anim.slideRightIn,
                  opacity: focus360 ? 0 : 1,
                }}
                variants={anim}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="col-span-2 flex items-start justify-end pt-5"
                style={{ opacity: focus360 ? 0 : 1 }}
              >
                <RightButtonGroup open360={() => setFocus360(true)} />
              </motion.div>

            </div>
          </div>

          {/* ✅ Bottom Variant Slide UP */}
          <motion.div
            key={bikeChangeKey + "-bottom"}
            initial="slideUpStart"
            animate={{
              ...anim.slideUpIn,
              opacity: focus360 ? 0 : 1,
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="shrink-0"
          >
            <BottomVariantSelector
              variants={variants}
              activeModel={activeModel}
              setActiveModel={setActiveModel}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />
          </motion.div>


        </div>

        {/* ✅ Tech Sidebar */}
        <AnimatePresence>
          {showTech && (
            <div className="fixed inset-0 z-400 max-w-[1440px] mx-auto">
              <motion.div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowTech(false)}
              />
              <TechSidebar onClose={() => setShowTech(false)} />
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
