"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  label: string;
  onClick?: () => void;
  isActive?: boolean; // ✅ NEW
}

export default function NavItem({ label, onClick, isActive }: Props) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = underlineRef.current;
    if (!el) return;

    // ✅ Hover logic
    const enter = () =>
      gsap.to(el, { width: "100%", duration: 0.3, ease: "power3.out" });

    const leave = () =>
      !isActive &&
      gsap.to(el, { width: 0, duration: 0.3, ease: "power3.out" });

    el.parentElement?.addEventListener("mouseenter", enter);
    el.parentElement?.addEventListener("mouseleave", leave);

    // ✅ Set underline based on active state
    gsap.to(el, {
      width: isActive ? "100%" : 0,
      duration: 0.3,
      ease: "power3.out",
    });

    return () => {
      el.parentElement?.removeEventListener("mouseenter", enter);
      el.parentElement?.removeEventListener("mouseleave", leave);
    };
  }, [isActive]);

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer uppercase font-semibold"
    >
      <span className="tracking-widest">{label}</span>
      <span
        ref={underlineRef}
        className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0"
      />
    </div>
  );
}
