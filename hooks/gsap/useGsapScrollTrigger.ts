import { RefObject, useLayoutEffect } from "react";

export function useGsapScrollTrigger(
  ref: RefObject<HTMLElement>,
  animation: gsap.TweenVars
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...animation,
    });
  }, [ref, animation]);
}
