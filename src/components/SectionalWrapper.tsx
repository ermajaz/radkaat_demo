"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const section = ref.current;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;
        const direction = self.direction;

        // Scroll down → snap to NEXT section
        if (direction === 1 && progress > 0.2) {
          const next = section.nextElementSibling as HTMLElement | null;
          if (next) {
            gsap.to(window, {
              duration: 0.8,
              scrollTo: { y: next, autoKill: true },
              ease: "power2.out",
            });
            self.disable();
            setTimeout(() => self.enable(), 1000);
          }
        }

        // Scroll up → snap to PREVIOUS section
        if (direction === -1 && progress < 0.8) {
          const prev = section.previousElementSibling as HTMLElement | null;
          if (prev) {
            gsap.to(window, {
              duration: 0.8,
              scrollTo: { y: prev, autoKill: true },
              ease: "power2.out",
            });
            self.disable();
            setTimeout(() => self.enable(), 1000);
          }
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className="h-screen w-full flex items-center justify-center"
    >
      {children}
    </section>
  );
}
