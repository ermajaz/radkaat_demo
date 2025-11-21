import { RefObject, useLayoutEffect } from "react";

export function useGsapReveal(ref: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, clipPath: "inset(0 0 100% 0)" },
      {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [ref]);
}
