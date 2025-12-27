"use client";

import { useEffect, useState } from "react";
import BikesStrip from "./BikesStrip";
import { Bike } from "../utils/bicycle-showcase";

export default function GoatStickyHeading({
  introRef,
  endRef,
  scrollZoneRef,
  bike,
  setShowBg,
  showBg,
  isProgrammaticScroll
}: {
  introRef: React.RefObject<HTMLElement | null> | null;
  endRef: React.RefObject<HTMLElement | null> | null;
  scrollZoneRef: React.RefObject<HTMLElement | null>;
  bike: Bike;
  setShowBg: React.Dispatch<React.SetStateAction<boolean>>;
  showBg: boolean;
  isProgrammaticScroll: React.MutableRefObject<boolean>;

}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);


  useEffect(() => {
    function onScroll() {
      if (isProgrammaticScroll?.current) return;

      if (
        !introRef?.current ||
        !endRef?.current ||
        !scrollZoneRef?.current
      )
        return;

      const introRect = introRef.current.getBoundingClientRect();
      const scrollZoneRect = scrollZoneRef.current.getBoundingClientRect();
      const endRect = endRef.current.getBoundingClientRect();

      // 1️⃣ Sticky position trigger (10vh rule)
      const shouldStick =
        introRect.bottom <= window.innerHeight * 0.9;

      // 2️⃣ Background trigger — ONLY when showcase starts
      const shouldShowBg =
        scrollZoneRect.top <= 0 && scrollZoneRect.bottom > 0;

      // 3️⃣ Hide after showcase ends
      const shouldHide = endRect.bottom <= 0;

      setIsSticky(shouldStick && !shouldHide);
      setShowBg(shouldShowBg && !shouldHide);
      setIsHidden(shouldHide);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isHidden) return null;

  const gradientBg = bike?.colors?.gradient
    ? `linear-gradient(90deg, ${bike.colors.gradient})`
    : "transparent";

  return (
    <div
      className={`
      z-999
      w-full max-w-[1440px] mx-auto
      flex justify-center
      pointer-events-none
      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${isSticky ? "fixed" : "absolute"}
    `}
      style={{
        top: isSticky ? 0 : "10vh",
      }}
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          opacity: showBg ? 1 : 0,
          backgroundImage: showBg ? gradientBg : "none",
          backdropFilter: showBg ? "blur(12px)" : "blur(0px)",
        }}
      />


      {/* Content */}
      <div
        className={`
        relative
        px-6
        flex items-center justify-center
        transition-all duration-500
      `}
      >
        <BikesStrip bike={bike} showBg={showBg} />
      </div>
    </div>
  );

}