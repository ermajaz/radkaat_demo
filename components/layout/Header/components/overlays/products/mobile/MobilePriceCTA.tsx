"use client";

import Link from "next/link";

export default function MobilePriceCTA({
  price,
  modelId,
}: {
  price: string;
  modelId: string;
}) {
  return (
    <div
      className="
        w-full sticky bottom-0 bg-superblack/95 backdrop-blur-xl
        border-t border-white/10 px-5 py-4 z-30
        flex items-center justify-between
      "
    >
      <div>
        <p className="text-xs text-white/50">Starting From</p>
        <p className="text-xl font-bold text-white">{price}</p>
      </div>

      <Link
        href={`/product/${modelId}`}
        className="
          px-6 py-3 rounded-full text-black font-semibold
          bg-sandstorm active:scale-95 transition
        "
      >
        View Product
      </Link>
    </div>
  );
}
