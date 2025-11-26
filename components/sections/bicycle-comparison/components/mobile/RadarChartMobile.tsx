"use client";

import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

interface RadarEntry {
  label: string;
  Serow?: number;
  Saola?: number;
  Takin?: number;
  [key: string]: string | number | undefined;
}

interface Props {
  selectedBikes: string[];
  data: {
    radar: RadarEntry[];
  };
}

const radarKeyMap: Record<string, keyof RadarEntry> = {
  "Serow City": "Serow",
  "Saola Urban": "Saola",
  "Takin Lite": "Takin",
};

const colors: Record<string, string> = {
  Serow: "#D6C889",
  Saola: "#C1534B",
  Takin: "#6A97C9",
};

export default function RadarChartMobile({ selectedBikes, data }: Props) {
  const chartData: RadarEntry[] = data.radar.map((item) => {
    const obj: RadarEntry = { label: item.label };

    selectedBikes.forEach((name) => {
      const key = radarKeyMap[name];
      obj[key] = item[key] ?? 0; // ✅ safe access
    });

    return obj;
  });

  return (
    <div className="mt-5 w-full h-[250px] flex justify-center">
      <ResponsiveContainer width="90%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid stroke="#ffffff20" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: "#ddd", fontSize: 10 }}
          />

          {selectedBikes.map((name) => {
            const key = radarKeyMap[name];

            return (
              <Radar
                key={key}
                dataKey={key}
                stroke={colors[key]}
                fill={colors[key]}
                fillOpacity={0.22}
                strokeWidth={2}
              />
            );
          })}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
