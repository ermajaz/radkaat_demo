"use client";

import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

export default function RadarChartMobile({ selectedBikes, data }: any) {
  const radarKeyMap: any = {
    "Serow City": "Serow",
    "Saola Urban": "Saola",
    "Takin Lite": "Takin",
  };

  const radarRaw = data.radar;

  const chartData = radarRaw.map((item: any) => {
    const obj: any = { label: item.label };
    selectedBikes.forEach((bike: string) => {
      obj[radarKeyMap[bike]] = item[radarKeyMap[bike]];
    });
    return obj;
  });

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid stroke="#ffffff30" />
          <PolarAngleAxis dataKey="label" tick={{ fill: "#eee", fontSize: 10 }} />

          {selectedBikes.map((bike: string) => {
            const key = radarKeyMap[bike];
            return (
              <Radar
                key={bike}
                dataKey={key}
                stroke="#C6B783"
                fill="#C6B783"
                fillOpacity={0.22}
              />
            );
          })}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
