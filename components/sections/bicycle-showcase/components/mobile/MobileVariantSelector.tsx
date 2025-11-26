"use client";

import { useState } from "react";

export default function MobileVariantSelector({ variants }: any) {
  const [active, setActive] = useState(variants[0].model);

  const current = variants.find((v: any) => v.model === active);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111]/95 backdrop-blur-xl p-4 border-t border-white/10">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {variants.map((v: any) => (
            <button
              key={v.model}
              onClick={() => setActive(v.model)}
              className={`text-xs font-semibold ${
                v.model === active ? "text-white" : "text-white/50"
              }`}
            >
              {v.model.toUpperCase()}
            </button>
          ))}
        </div>

        <a
          href={current.productLink}
          className="px-4 py-2 bg-white text-black text-xs font-semibold rounded"
        >
          View Product
        </a>
      </div>
    </div>
  );
}
