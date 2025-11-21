import { RefObject, useLayoutEffect } from "react";

export function useGsapSlideIn(
  ref: RefObject<HTMLElement>,
  direction: "left" | "right" | "up" | "down" = "up",
  delay = 0
) {
  const offset = {
    left: -50,
    right: 50,
    up: 50,
    down: -50,
  }[direction];

  const axis = direction === "left" || direction === "right" ? "x" : "y";

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, [axis]: offset },
      {
        opacity: 1,
        [axis]: 0,
        duration: 1,
        delay,
        ease: "power3.out",
      }
    );
  }, [ref, delay, direction]);
}
