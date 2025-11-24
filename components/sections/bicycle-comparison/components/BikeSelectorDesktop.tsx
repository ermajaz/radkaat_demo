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
    <Select value={selected} onValueChange={onSelect}>
      <SelectTrigger
        className="
          w-[200px]
          bg-transparent
          border border-white/30
          rounded-sm
          text-white
          text-sm font-bold
          px-3 py-2
        "
      >
        <SelectValue placeholder="Select Bike" />
      </SelectTrigger>

      <SelectContent className="bg-[#1a1a1a] text-white border border-white/20">
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
  );
}
