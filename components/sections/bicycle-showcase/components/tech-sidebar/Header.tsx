"use client";
import { X } from "lucide-react";

export default function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-10 tracking-wider py-5 border-b border-white/10">
      <span className="text-3xl font-bold">SPECIFICATIONS</span>

      <button
        onClick={onClose}
        className="p-2 rounded cursor-pointer text-white/70 hover:text-white"
      >
        <X size={24} />
      </button>
    </div>
  );
}
