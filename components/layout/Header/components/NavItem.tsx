"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  label: string;
  onClick?: () => void;
}

export default function NavItem({ label, onClick }: Props) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = underlineRef.current;
    if (!el) return;

    const enter = () =>
      gsap.to(el, { width: "100%", duration: 0.3, ease: "power3.out" });

    const leave = () =>
      gsap.to(el, { width: 0, duration: 0.3, ease: "power3.out" });

    el.parentElement?.addEventListener("mouseenter", enter);
    el.parentElement?.addEventListener("mouseleave", leave);

    return () => {
      el.parentElement?.removeEventListener("mouseenter", enter);
      el.parentElement?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer uppercase font-semibold"
    >
      <span className="tracking-widest">{label}</span>
      <span
        ref={underlineRef}
        className="absolute left-0 -bottom-0.5 h-0.5 bg-rust w-0"
      />
    </div>
  );
}
