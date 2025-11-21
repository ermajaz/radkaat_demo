"use client";

export default function BikeSelectorMobile({ bikes, options, onChange }: any) {
  return (
    <div className="flex gap-4">
      {bikes.map((b: string, i: number) => (
        <select
          key={i}
          value={b}
          onChange={(e) => onChange(i, e.target.value)}
          className="flex-1 bg-[#1b1b1b] border border-white/20 
                     text-white p-2 rounded-md text-xs"
        >
          {options.map((opt: string) => (
            <option key={opt} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
