"use client";

import { motion } from "framer-motion";

interface Variant {
  name: string;
  front: number;
  rear: number;
  wheel: string;
}

export default function MobileSpecsRow({ variant }: { variant: Variant }) {
  return (
    <div className="mt-2 flex justify-center gap-10">

      {[
        { label: "Front", value: variant.front },
        { label: "Rear", value: variant.rear },
        { label: "Wheel", value: variant.wheel },
      ].map((spec) => (
        <div key={spec.label} className="flex flex-col items-center">
          <p className="text-[11px] text-white/70 tracking-wide uppercase font-bold">{spec.label}</p>

          <motion.span
            key={spec.value} // triggers animation on change
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-lg text-white font-extrabold"
          >
            {spec.value}
          </motion.span>
        </div>
      ))}

    </div>
  );
}
