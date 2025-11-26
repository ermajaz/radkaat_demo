"use client";

import { Search } from "lucide-react";

export default function OrderSearchBarMobile({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative mt-4">
      <Search size={16} className="absolute left-3 top-2.5 text-white/40" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Order ID"
        className="
          w-full h-10 rounded-lg bg-[#1a1a1a]
          pl-9 pr-3 text-xs text-white/80
          border border-[#2a2a2a] focus:border-sandstorm/60
          outline-none placeholder:text-white/30
        "
      />
    </div>
  );
}
