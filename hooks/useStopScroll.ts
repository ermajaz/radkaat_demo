import { useEffect } from "react";

export function useStopScroll(active: boolean) {
  useEffect(() => {
    const html = document.documentElement;

    if (active) {
      const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
      html.style.overflow = "hidden";
      html.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      html.style.overflow = "";
      html.style.paddingRight = "";
    }

    return () => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    };
  }, [active]);
}
