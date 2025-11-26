"use client";

export default function OrderMonthFilterMobile({
  months,
  active,
  setActive,
}: {
  months: string[];
  active: string;
  setActive: (v: any) => void;
}) {
  return (
    <div className="mt-5">
      <select
        value={active}
        onChange={(e) => setActive(e.target.value)}
        className="
          w-full h-10 bg-[#121212]/95 border border-[#2a2a2a]
          text-xs text-white/70 rounded-lg px-3
          cursor-pointer focus:border-sandstorm/60
        "
      >
        {months.map((m) => (
          <option key={m} value={m} className="text-black">
            {m === "All" ? "Sort by Month" : m}
          </option>
        ))}
      </select>
    </div>
  );
}
