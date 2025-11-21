"use client";

import { useEffect, useRef, useState } from "react";

export function useHeaderScrollBehavior() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const isHovered = useRef(false);

  useEffect(() => {
    let inactivityTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide on scroll down
      if (currentScroll > lastScrollY.current && currentScroll > 60) {
        setShowHeader(false);
      }
      // Show on scroll up
      else if (currentScroll < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScroll;

      // Idle behaviour
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        if (!isHovered.current && currentScroll > 80) {
          setShowHeader(false);
        }
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hover controls
  const onHoverStart = () => {
    isHovered.current = true;
    setShowHeader(true);
  };

  const onHoverEnd = () => {
    isHovered.current = false;
  };

  return { showHeader, onHoverStart, onHoverEnd };
}
