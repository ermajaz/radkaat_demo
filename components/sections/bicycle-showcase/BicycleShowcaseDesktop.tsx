"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BIKES, variants } from "./utils/bicycle-showcase";
import { useStopScroll } from "@/hooks/useStopScroll";

import BikesStrip from "./components/BikesStrip";
import BikeTabs from "./components/BikeTabs";
import SpecTabs from "./components/SpecTabs";
import BackgroundName from "./components/BackgroundName";
import BikeImage from "./components/BikeImage";
import RightButtonGroup from "./components/RightButtonGroup";

import Fullscreen360Modal from "./components/FullScreen360Modal";
import BikeDesc from "./components/BikeDesc";
import BottomVariantSelector from "./components/BottomVariantSelector";
import TechSidebar from "./components/tech-sidebar";

export default function BikeShowcaseDesktop() {
  const [activeBikeId, setActiveBikeId] = useState(BIKES[0].id);
  const [activeSpecKey, setActiveSpecKey] = useState(BIKES[0].specs[0].key);
  const [show360, setShow360] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [activeModel, setActiveModel] = useState("model-1");
  const [activeColor, setActiveColor] = useState(variants[0].colors[0]);

  const bike = BIKES.find((b) => b.id === activeBikeId)!;
  const activeSpec = bike.specs.find((s) => s.key === activeSpecKey)!;

  useStopScroll(show360 || showTech);

  return (
    <section className="w-full h-screen relative text-white bg-superblack overflow-hidden flex flex-col">
      {/* 🔸 Top strip with small bike icons */}
      <BikesStrip bike={bike} />

      {/* 🔸 Main content wrapper (fills screen minus bottom selector) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-10 pt-8 flex flex-col gap-6 shrink-0">
          <BikeTabs
            bikes={BIKES}
            activeBikeId={activeBikeId}
            setActiveBikeId={setActiveBikeId}
            setActiveSpecKey={setActiveSpecKey}
          />

          <BikeDesc description={bike.description} />
        </div>

        {/* 🔸 Center grid → scrollable only if needed */}
        <div className="flex-1 px-10 overflow-hidden">
          <div className="grid grid-cols-18 gap-6 h-full items-start">
            {/* Left spec tabs */}
            <div className="col-span-2 overflow-y-auto  pt-16 pr-10">
              <SpecTabs
                specs={bike.specs}
                activeSpecKey={activeSpecKey}
                setActiveSpecKey={setActiveSpecKey}
              />
            </div>

            {/* Bike + background text */}
            <div className="h-full col-span-14 relative flex items-center justify-center">
              <BackgroundName name={bike.bgWord} colors={bike.colors} />
              <BikeImage bike={bike} activeSpec={activeSpec} />
            </div>

            {/* Buttons right */}
            <div className="col-span-2 flex items-start justify-end pt-16">
              <RightButtonGroup
                open360={() => setShow360(true)}
                openTech={() => setShowTech(true)}
              />
            </div>
          </div>
        </div>

        {/* 🔸 Bottom Variant Selector */}
        <div className="shrink-0">
          <BottomVariantSelector
            variants={variants}
            activeModel={activeModel}
            setActiveModel={setActiveModel}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </div>
      </div>

      {/* 🔸 Overlays */}
      <AnimatePresence>
        {show360 && (
          <Fullscreen360Modal bike={bike} onClose={() => setShow360(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTech && (
          <div className="fixed inset-0 z-1150">
            {/* 🔹 Backdrop — blur + dim + click to close */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTech(false)}
            />

            {/* 🔹 Tech Sidebar */}
            <TechSidebar onClose={() => setShowTech(false)} />
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
