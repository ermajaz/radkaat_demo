import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";

export function useGsapFadeIn(ref: RefObject<HTMLElement>, delay = 0) {
    useLayoutEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay,
                ease: "power3.out",
            }
        );
    }, [ref, delay]);
}
