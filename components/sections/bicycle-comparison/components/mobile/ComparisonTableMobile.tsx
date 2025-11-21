"use client";

export default function ComparisonTableMobile({ category, selectedBikes, data }: any) {
  const rows = data.table[category];

  return (
    <div className="space-y-4">
      {Object.keys(rows).map((spec) => (
        <div key={spec} className="p-3 bg-[#1a1a1a] rounded-lg">
          <h4 className="text-sm font-bold mb-2">{spec}</h4>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {selectedBikes.map((bike: string) => (
              <div key={bike} className="p-2 bg-black/40 rounded text-center">
                {rows[spec][bike] ?? "-"}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
