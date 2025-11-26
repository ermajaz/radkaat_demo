"use client";

import { motion } from "framer-motion";

export default function ComparisonTableMobile({
  category,
  selectedBikes,
  data,
}: {
  category: string;
  selectedBikes: string[];
  data: any;
}) {
  const rows = data.table[category];

  // ✅ UI → Radar Key Mapping
  const radarKeyMap: Record<string, string> = {
    "Serow City": "Serow",
    "Saola Urban": "Saola",
    "Takin Lite": "Takin",
  };

  /** COLORS */
  const bikeColors: Record<string, string> = {
    Serow: "#D6C889",
    Saola: "#C1534B",
    Takin: "#6A97C9",
  };

  // ✅ Calculate averages
  const radarRaw = data.radar;
  const chartData = radarRaw.map((item: any) => {
    const obj: any = {};
    selectedBikes.forEach((uiName) => {
      const key = radarKeyMap[uiName];
      obj[key] = item[key] ?? 0;
    });
    return obj;
  });

  const avg = (radarKey: string) => {
    const values = chartData.map((d: any) => Number(d[radarKey]) || 0);
    return Math.round(values.reduce((a: number, b: number) => a + b, 0) / values.length);
  };

  return (
    <div className="mt-5">

      {/* ✅ HEADER — MODELS */}
      <div className="rounded-t-xl bg-[#121212] border border-white/10 p-4">
        <p className="text-[10px] uppercase text-white/40 mb-2 tracking-wide">
          Models
        </p>

        <div className="grid grid-cols-3 gap-3">
          {selectedBikes.map((bike) => (
            <div
              key={bike}
              className="
                text-xs font-semibold text-center
                bg-white/5 border border-white/10 rounded-md
                py-2 text-white/90
              "
            >
              {bike}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ SPEC ROWS — NO GAP BETWEEN */}
      {Object.keys(rows).map((spec, i) => (
        <motion.div
          key={spec}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          className="bg-[#121212] border-x border-b border-white/10 px-4 py-2"
        >
          <p className="text-[10px] uppercase text-white/40 mb-2 tracking-wide">
            {spec}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {selectedBikes.map((bike) => (
              <div
                key={bike}
                className="text-center text-xs font-semibold text-white/90 py-1"
              >
                {rows[spec][bike] ?? "-"}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* ✅ POINTS ROW WITH COLOR DOT */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-b-xl bg-[#121212] border-x border-b border-[#2a2a2a] px-4 py-2"
      >
        <p className="text-[10px] uppercase text-white/40 tracking-wide">
          Points
        </p>

        <div className="grid grid-cols-3">
          {selectedBikes.map((uiName) => {
            const radarKey = radarKeyMap[uiName];
            return (
              <div
                key={uiName}
                className="flex items-center justify-center gap-2 text-base font-bold text-white"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: bikeColors[radarKey] }}
                />
                {avg(radarKey)}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
