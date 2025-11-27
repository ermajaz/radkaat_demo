"use client";

import { motion } from "framer-motion";

interface Variant {
  name: string;
  front: number;
  rear: number;
  wheel: string;
}

interface Props {
  variants: Variant[];
  active: number;
  setActive: (index: number) => void;
}

export default function MobileVariantSelector({ variants, active, setActive }: Props) {
  return (
    <div className="w-full mt-2 flex items-center justify-center">
      <div className="relative flex items-center bg-transparent px-1 py-1 rounded-full backdrop-blur-md border border-white/10">

        {/* Sliding background */}
        <motion.div
          layoutId="variantSlide"
          className="absolute top-0 bottom-0 bg-white rounded-full"
          style={{
            width: `calc(100% / ${variants.length})`,
            left: `calc((100% / ${variants.length}) * ${active})`,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        />

        {variants.map((v, i) => (
          <button
            key={v.name}
            onClick={() => setActive(i)}
            className="relative z-10 px-5 py-2 text-xs font-bold uppercase text-center"
            style={{ color: active === i ? "black" : "white" }}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}
