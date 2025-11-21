import { RefObject, useLayoutEffect } from "react";

export function useGsapStaggerChildren(
  ref: RefObject<HTMLElement>,
  stagger = 0.15
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      opacity: 0,
      y: 20,
      stagger,
      duration: 0.7,
      ease: "power2.out",
    });
  }, [ref, stagger]);
}
