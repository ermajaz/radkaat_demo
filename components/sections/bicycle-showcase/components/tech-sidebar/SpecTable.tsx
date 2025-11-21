"use client";

export default function SpecTable({
  model,
  category,
  showDiff,
  DATA,
}: {
  model: string;
  category: string;
  showDiff: boolean;
  DATA: any;
}) {
  const items = DATA[model]?.[category] ?? [];

  // Filter diff items
  const filtered = showDiff
    ? items.filter((item: any) => {
        const field = item.label;

        const values = Object.keys(DATA).map((m) => {
          return DATA[m][category]?.find((x: any) => x.label === field)?.value;
        });

        const unique = [...new Set(values)];
        return unique.length > 1; // Only items that differ
      })
    : items;

  return (
    <div>
      <h3 className="w-full text-xl font-semibold mb-2 text-sandstorm">{category}</h3>

      <div className="space-y-4">
        {filtered.map((item: any, i: number) => (
          <div key={i} className="grid grid-cols-2 py-2 border-b border-white/10">
            <span className="text-white/60 text-sm font-semibold">
              {item.label}
            </span>
            <span className="text-white text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
