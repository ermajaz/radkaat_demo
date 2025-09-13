"use client";

import { ReactNode, useRef, useEffect } from "react";

interface SnapScrollProps {
  children: ReactNode[];
}

export default function SnapScroll({ children }: SnapScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrolling) clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        const sections = Array.from(container.children) as HTMLElement[];
        const scrollTop = container.scrollTop;
        const closestSection = sections.reduce((prev, curr) => {
          return Math.abs(curr.offsetTop - scrollTop) <
            Math.abs(prev.offsetTop - scrollTop)
            ? curr
            : prev;
        });
        container.scrollTo({
          top: closestSection.offsetTop,
          behavior: "smooth",
        });
      }, 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      {children.map((child, index) => (
        <section
          key={`snap-section-${index}`}
          className="snap-start w-full h-screen flex flex-col"
        >
          {child}
        </section>
      ))}
    </div>
  );
}
