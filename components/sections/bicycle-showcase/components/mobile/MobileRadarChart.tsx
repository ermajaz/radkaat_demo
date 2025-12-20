"use client";

import { RadarChart as RChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

export default function MobileRadarChart({ stats, color = "#9f7aea" }: { stats: any; color?: string }) {

  const data = [
    { label: "Performance", value: stats.suspension },
    { label: "Durability & Bulk", value: stats.braking },
    { label: "Utility & Convenience", value: stats.frame },
    { label: "Terrain Adaptability", value: stats.tire },
    { label: "Value for money", value: stats.weight },
    { label: "Comfort & Ergonomics", value: stats.comfort },
  ];

  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <RChart
          data={data}
          outerRadius={80}
        >
          <PolarGrid stroke="#88888880" />

          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: "#ffffffb0", fontSize: 10 }}
          />

          <Radar
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.35}
            strokeWidth={2}
            dot={true}
          />
        </RChart>
      </ResponsiveContainer>
    </div>
  );
}
