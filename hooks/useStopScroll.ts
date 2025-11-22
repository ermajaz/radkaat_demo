// useStopScroll.ts
import { useEffect } from "react";

export function useStopScroll(active: boolean) {
  useEffect(() => {
    // ✅ find the real scroll container
    const container = document.querySelector("[data-scroll-container]") as HTMLElement;

    if (!container) return;

    if (active) {
      const scrollY = container.scrollTop;
      container.dataset.scrollY = `${scrollY}`;

      // ✅ lock without repositioning
      container.style.overflow = "hidden";
      container.style.position = "fixed";
      container.style.top = `-${scrollY}px`;
      container.style.left = "0";
      container.style.right = "0";
      container.style.width = "100%";
    } else {
      const scrollY = container.dataset.scrollY
        ? parseInt(container.dataset.scrollY, 10)
        : 0;

      container.style.overflow = "";
      container.style.position = "";
      container.style.top = "";
      container.style.left = "";
      container.style.right = "";
      container.style.width = "";

      // ✅ restore position WITHOUT jump flicker
      requestAnimationFrame(() => {
        container.scrollTo(0, scrollY);
      });
    }
  }, [active]);
}
