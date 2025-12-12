"use client";

export default function MobileBikeSpecsCard({ bike }: any) {
  return (
    <div
      className="
        bg-[#121212]/90 
        backdrop-blur-md
        px-[clamp(0.5rem,2vw,1rem)] 
        py-[clamp(0.25rem,1.5vh,0.75rem)]
        rounded-md
        w-[45%]
        border border-white/10
        text-white
      "
    >
      <span className="text-[clamp(12px,2.5vw,16px)] font-semibold leading-tight">
        {bike.uiName.toUpperCase()} M-10
      </span>

      <p className="text-[clamp(9px,2vw,11px)] text-stone mb-1">M10 ZE3 2026</p>

      <div className="w-full h-px bg-white/10 mb-2"></div>

      {[
        ["Frame Geometry", "Trail-Optimized"],
        ["Terrain Type", "Multi-Mountain"],
        ["Stability", "Rock-Solid"],
        ["Agility", "Cliff-Nimble"],
      ].map(([label, value]) => (
        <div key={label} className="mb-1">
          <p className="text-[clamp(8px,1.8vw,10px)] text-stone leading-none">{label}</p>
          <p className="text-[clamp(11px,2.3vw,13px)] font-semibold mt-0.5">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
