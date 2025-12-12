"use client";

export default function MobileBikeSpecsCard({ bike }: any) {
  return (
    <div
      className="
        bg-[#121212]/90
        backdrop-blur-md
        px-3 py-2
        rounded-[6px]
        w-[45%]
        border border-white/10
        text-white
      "
    >
      {/* TITLE */}
      <span className="text-[16px] font-semibold tracking-wide block leading-tight">
        {bike.uiName.toUpperCase()} M-10
      </span>

      {/* MODEL CODE */}
      <p className="text-[11px] text-stone mb-1">M10 ZE3 2026</p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-2"></div>

      {/* FRAME GEOMETRY */}
      <div className="mb-1">
        <p className="text-[10px] text-stone leading-none">Frame Geometry</p>
        <p className="text-[12px] font-semibold mt-0.5">Trail-Optimized</p>
      </div>

      {/* TERRAIN TYPE */}
      <div className="mb-1">
        <p className="text-[10px] text-stone leading-none">Terrain Type</p>
        <p className="text-[12px] font-semibold mt-0.5">Multi-Mountain</p>
      </div>

      {/* STABILITY */}
      <div className="mb-1">
        <p className="text-[10px] text-stone leading-none">Stability</p>
        <p className="text-[12px] font-semibold mt-0.5">Rock-Solid</p>
      </div>

      {/* AGILITY */}
      <div>
        <p className="text-[10px] text-stone leading-none">Agility</p>
        <p className="text-[12px] font-semibold mt-0.5">Cliff-Nimble</p>
      </div>
    </div>
  );
}
