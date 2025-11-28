"use client";

import { X } from "lucide-react";

export default function MobileOverlayHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full sticky top-0 bg-superblack/90 backdrop-blur-xl z-20 flex items-center justify-between px-5 py-4 border-b border-white/10">
      <h2 className="text-lg font-bold tracking-wide">Product Details</h2>

      <button
        onClick={onClose}
        className="p-2 rounded-full bg-white/5 border border-white/10 active:scale-90 transition"
      >
        <X size={22} className="text-white" />
      </button>
    </div>
  );
}
