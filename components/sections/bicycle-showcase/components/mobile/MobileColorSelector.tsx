"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface Variant {
  model: string;
  colors: string[];
  productLink: string;
}

type Props = {
  variants: Variant[];
  activeModel: string;
  setActiveModel: (m: string) => void;
  activeColor: string;
  setActiveColor: (c: string) => void;
};

export default function MobileColorSelector({
  variants,
  activeModel,
  setActiveModel,
  activeColor,
  setActiveColor,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentVariant =
    variants.find((v) => v.model === activeModel) ?? variants[0];

  // ✅ auto-scroll active model into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const activeEl = container.querySelector(`[data-model="${activeModel}"]`);
    if (!activeEl) return;

    const el = activeEl as HTMLElement;

    container.scrollTo({
      left: el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeModel]);

  return (
    <div className="mt-2 px-4 space-y-4 bg-[#121212] rounded-xl py-4">
      {/* ✅ SLIDING MODEL TABS */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar pb-1 relative"
      >
        {variants.map((v) => {
          const active = v.model === activeModel;
          return (
            <button
              key={v.model}
              data-model={v.model}
              onClick={() => setActiveModel(v.model)}
              className="relative px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase whitespace-nowrap"
            >
              {active && (
                <motion.div
                  layoutId="activeModelHighlight"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white"
                />
              )}

              <span
                className={`relative z-10 transition ${
                  active ? "text-black" : "text-white/55"
                }`}
              >
                {v.model}
              </span>
            </button>
          );
        })}
      </div>

      {/* ✅ COLORS ROW */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {(currentVariant?.colors ?? []).map((clr) => {
            const active = clr === activeColor;
            return (
              <motion.button
                key={clr}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveColor(clr)}
                className="relative w-9 h-9 flex items-center justify-center"
              >
                {/* active ring */}
                {active && (
                  <motion.span
                    layoutId="activeColorRing"
                    className="absolute inset-0 rounded-full border-[2px] border-white/85"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}

                {/* swatch */}
                <span
                  className="w-6 h-6 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
                  style={{ backgroundColor: clr }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* ✅ SAFE PRODUCT LINK */}
        {currentVariant?.productLink && (
          <a
            href={currentVariant.productLink}
            className="text-[11px] uppercase tracking-[0.18em] text-sandstorm underline underline-offset-4"
          >
            View Product
          </a>
        )}
      </div>
    </div>
  );
}
