"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

type Spec = {
  key: string;
  label: string;
  value: string;
  hotspots?: any[];
};

type Props = {
  specs: any[];
  activeKey: string;
  onChange: (k: string) => void;
  onViewMore: () => void;
};

export default function MobileSpecTabs({
  specs,
  activeKey,
  onChange,
  onViewMore,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ auto-scroll active pill into center
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const activeEl = container.querySelector(`[data-key="${activeKey}"]`);
    if (!activeEl) return;

    const el = activeEl as HTMLElement;

    container.scrollTo({
      left: el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeKey]);

  return (
    <div className="mt-3 px-4 space-y-2">
      {/* ✅ sliding selectable pills */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar relative"
      >
        {specs.map((s) => {
          const active = s.key === activeKey;
          return (
            <button
              key={s.key}
              data-key={s.key}
              onClick={() => onChange(s.key)}
              className="relative px-4 py-1.5 rounded-full text-[11px] border border-[#2a2a2a] font-semibold whitespace-nowrap"
            >
              {/* 🔥 sliding background */}
              {active && (
                <motion.div
                  layoutId="activeSpecHighlight"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-sandstorm"
                />
              )}

              {/* label */}
              <span
                className={`relative z-10 transition ${
                  active ? "text-black" : "text-white/60"
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ✅ bottom CTA */}
      <button
        onClick={onViewMore}
        className="w-full text-start text-[10px] uppercase tracking-[0.2em] text-sandstorm py-1 opacity-80"
      >
        View detailed specs →
      </button>
    </div>
  );
}
