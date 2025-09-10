"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { LenisScrollEvent } from "@/types/scroll";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
    });

    // optional: listen to scroll events
    lenis.on(
      "scroll",
      ({ scroll, limit, velocity, direction }: LenisScrollEvent) => {
        // console.log({ scroll, limit, velocity, direction });
      }
    );

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
