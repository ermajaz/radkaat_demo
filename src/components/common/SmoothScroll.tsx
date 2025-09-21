"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const lenisRef = { current: null as Lenis | null };

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
