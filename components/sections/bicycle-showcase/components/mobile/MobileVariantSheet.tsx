"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

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
  onClose: () => void;
};

export default function MobileVariantSheet({
  variants,
  activeModel,
  setActiveModel,
  activeColor,
  setActiveColor,
  onClose,
}: Props) {
  const current =
    variants.find((v) => v.model === activeModel) ?? variants[0];

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md mx-auto bg-[#111] rounded-t-2xl border-t border-white/10 p-4 pb-6"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs uppercase tracking-[0.18em] text-white/60">
            Choose Variant
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/5 text-white/70"
          >
            <X size={18} />
          </button>
        </div>

        {/* model list */}
        <div className="flex flex-col gap-2 mb-4">
          {variants.map((v) => {
            const active = v.model === activeModel;
            return (
              <button
                key={v.model}
                onClick={() => setActiveModel(v.model)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${
                  active
                    ? "border-white text-white bg-white/5"
                    : "border-white/15 text-white/70"
                }`}
              >
                <span className="font-semibold uppercase tracking-wide">
                  {v.model}
                </span>
                {active && (
                  <span className="text-[10px] text-sandstorm font-semibold">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* colors */}
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">
          Colors
        </p>
        <div className="flex items-center gap-4 mb-4">
          {current.colors.map((clr) => {
            const active = clr === activeColor;
            return (
              <button
                key={clr}
                onClick={() => setActiveColor(clr)}
                className="relative w-8 h-8 flex items-center justify-center"
              >
                {active && (
                  <span className="absolute inset-0 rounded-full border-2 border-white" />
                )}
                <span
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: clr }}
                />
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={current.productLink}
          className="block w-full text-center text-xs uppercase tracking-[0.2em] bg-white text-black py-3 rounded-xl font-semibold active:scale-[0.97] transition"
        >
          View product details
        </a>
      </motion.div>
    </motion.div>
  );
}
