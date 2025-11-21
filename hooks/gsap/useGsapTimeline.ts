import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useGsapTimeline(
  cb: (tl: gsap.core.Timeline) => void,
  deps: any[] = []
) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    cb(tl);

    return () => {
      tl.kill();
    };
  }, deps);
}
