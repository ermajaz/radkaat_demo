"use client";

import { SPEC_MODELS } from "../../utils/bicycle-showcase";

export default function SpecTable({
  category,
  showDiff,
  DATA,
  onHover,
}: {
  category: string;
  showDiff: boolean;
  DATA: any;
  onHover: (image: string | null) => void;
}) {
  const labels = DATA["model-1"][category].map((x: any) => x.label);

  const rows = labels.map((label: string) => {
    const values = SPEC_MODELS.map((m) => {
      const item = DATA[m][category].find((x: any) => x.label === label);
      return { value: item?.value, image: item?.image };
    });
    return { label, values };
  });

  const filtered = showDiff
    ? rows.filter(
        (r: any) => new Set(r.values.map((v: any) => v.value)).size > 1
      )
    : rows;

  return (
    <div>
      <div className="grid grid-cols-4 font-bold pb-3 border-b border-white/20">
        <span></span>
        {SPEC_MODELS.map((m) => (
          <span key={m} className="text-center">
            {m}
          </span>
        ))}
      </div>

      {filtered.map((row: any, i: number) => (
        <div
          key={i}
          onMouseEnter={() => onHover(row.values[0].image ?? null)}
          onMouseLeave={() => onHover(null)}
          className="grid grid-cols-4 py-3 border-b border-white/10 hover:bg-white/5 cursor-pointer"
        >
          <span className="text-white/70 text-sm">{row.label}</span>
          {row.values.map((v: any, idx: number) => (
            <span key={idx} className="text-center text-white text-sm">
              {v.value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
