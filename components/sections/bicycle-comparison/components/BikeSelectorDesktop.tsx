"use client";

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
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="w-[200px] bg-transparent border border-white/30 rounded-sm 
                 px-3 py-2 text-center text-white text-sm font-bold cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-black">
          {opt}
        </option>
      ))}
    </select>
  );
}
