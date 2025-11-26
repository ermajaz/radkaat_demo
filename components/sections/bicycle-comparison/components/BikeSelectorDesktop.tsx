"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BikeSelectorDesktop({
  selected,
  onSelect,
  options,
}: {
  selected: string;
  onSelect: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="px-2">
      <Select value={selected} onValueChange={onSelect}>
      <SelectTrigger
        className="
          w-full
          bg-transparent
          border border-[#2a2a2a]
          rounded-sm
          text-white
          text-sm font-bold
          px-3 py-2
          cursor-pointer
        "
      >
        <SelectValue placeholder="Select Bike" />
      </SelectTrigger>

      <SelectContent className="bg-[#1a1a1a] text-white border border-[#2a2a2a]">
        {options.map((opt) => (
          <SelectItem
            key={opt}
            value={opt}
            className="cursor-pointer text-sm font-semibold"
          >
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  );
}
