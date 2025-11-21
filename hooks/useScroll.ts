import { useEffect, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      if (current > lastScroll) setDirection("down");
      else setDirection("up");

      lastScroll = current <= 0 ? 0 : current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, direction };
}
