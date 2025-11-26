"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStopScroll } from "@/hooks/useStopScroll";
import { BIKES, variants } from "./utils/bicycle-showcase";
import type { Bike } from "./utils/bicycle-showcase";

import MobileBikeSwiper from "./components/mobile/MobileBikeSwiper";
import MobileColorSelector from "./components/mobile/MobileColorSelector";
import MobileSpecTabs from "./components/mobile/MobileSpecTabs";
import MobileHotspotLayer from "./components/mobile/MobileHotspotLayer";
import MobileHotspotPopup from "./components/mobile/MobileHotspotPopup";
import MobileVariantSheet from "./components/mobile/MobileVariantSheet";
import Mobile360Viewer from "./components/mobile/Mobile360Viewer";
import MobileTechSheet from "./components/mobile/MobileTechSheet";

export default function BikeShowcaseMobile() {
  // Bike / spec state
  const [activeBikeId, setActiveBikeId] = useState(BIKES[0].id);
  const [activeSpecKey, setActiveSpecKey] = useState(BIKES[0].specs[0].key);

  // Variant / color
  const [activeModel, setActiveModel] = useState("model-1");
  const [activeColor, setActiveColor] = useState(variants[0].colors[0]);

  // Overlays
  const [showVariants, setShowVariants] = useState(false);
  const [show360, setShow360] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [hotspotData, setHotspotData] = useState<any | null>(null);

  const bike: Bike = useMemo(
    () => BIKES.find((b) => b.id === activeBikeId)!,
    [activeBikeId]
  );

  const activeSpec = useMemo(
    () =>
      bike.specs.find((s) => s.key === activeSpecKey) ?? bike.specs[0],
    [bike, activeSpecKey]
  );

  // Lock scroll when any full-screen UI is open
  useStopScroll(showVariants || show360 || showTech || !!hotspotData);

  const handleChangeBike = (id: string) => {
    const next = BIKES.find((b) => b.id === id);
    if (!next) return;
    setActiveBikeId(id);
    setActiveSpecKey(next.specs[0].key);
  };

  return (
    <section className="md:hidden w-full bg-superblack text-white py-3 relative overflow-hidden">
      {/* Bike swiper (image, title, CTA, 360 button) */}
      <MobileBikeSwiper
        bikes={BIKES}
        activeBikeId={activeBikeId}
        onChange={handleChangeBike}
        onOpen360={() => setShow360(true)}
      />
      {/* Specs selector */}
      <MobileSpecTabs
        specs={bike.specs}
        activeKey={activeSpecKey}
        onChange={setActiveSpecKey}
        onViewMore={() => setShowTech(true)}
      />
      {/* Hotspots overlay (absolute on top of bike area) */}
      <MobileHotspotLayer
        bike={bike}
        activeSpec={activeSpec}
        onHotspotClick={(hp) => setHotspotData(hp)}
      />

      {/* Color / Model selector (bottom of hero) */}
      <MobileColorSelector
        variants={variants}
        activeModel={activeModel}
        setActiveModel={setActiveModel}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />

      {/* Sticky bottom CTA */}
      {/* <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-[55]">
        <button
          onClick={() => setShowVariants(true)}
          className="w-full h-12 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-[0.25em] active:scale-[0.97] transition"
        >
          Choose Variant
        </button>
      </div> */}

      {/* Hotspot popup */}
      <AnimatePresence>
        {hotspotData && (
          <MobileHotspotPopup
            hotspot={hotspotData}
            onClose={() => setHotspotData(null)}
          />
        )}
      </AnimatePresence>

      {/* Bottom sheet: variants */}
      <AnimatePresence>
        {showVariants && (
          <MobileVariantSheet
            variants={variants}
            activeModel={activeModel}
            setActiveModel={setActiveModel}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            onClose={() => setShowVariants(false)}
          />
        )}
      </AnimatePresence>

      {/* Full-screen 360 viewer */}
      <AnimatePresence>
        {show360 && (
          <Mobile360Viewer bike={bike} onClose={() => setShow360(false)} />
        )}
      </AnimatePresence>

      {/* Full spec sheet */}
      <AnimatePresence>
        {showTech && (
          <MobileTechSheet bike={bike} onClose={() => setShowTech(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
