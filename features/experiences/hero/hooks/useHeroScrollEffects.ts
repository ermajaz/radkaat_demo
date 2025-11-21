"use client";

import { useEffect, useState } from "react";

export function useHeroScrollEffects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });

    return () => window.removeEventListener("scroll", handle);
  }, []);

  const normalized = Math.min(scrollY / 300, 1); 
  // 0 → 300px scroll → becomes 0 to 1

  return {
    zoomScale: 1 + normalized * 0.1,   // max zoom 1.1
    quoteOpacity: 1 - normalized * 0.9 // fades almost fully
  };
}
