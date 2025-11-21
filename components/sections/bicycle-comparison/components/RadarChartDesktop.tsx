"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export const RadarChartDesktop = ({
  selectedBikes,
  data,
}: {
  selectedBikes: string[];
  data: any;
}) => {

  /** UI → RADAR KEY */
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

  const radarRaw = data?.radar;
  if (!Array.isArray(radarRaw)) return null;

  /** BUILD RECHARTS-FRIENDLY DATA */
  const chartData = radarRaw.map((item: any) => {
    const obj: any = { label: item.label };

    selectedBikes.forEach((uiName) => {
      const radarKey = radarKeyMap[uiName];
      obj[radarKey] = item[radarKey] ?? 0;
    });

    return obj;
  });

  /** AVERAGE FOR LEGEND */
  const avg = (radarKey: string) => {
    const values = chartData.map((d) => Number(d[radarKey]) || 0);
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  };


  return (
    <div className="w-full flex justify-between items-center px-4">
      
      {/* RADAR CHART */}
      <div className="w-[50%] h-[400px] shrink-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={chartData}
          >
            <PolarGrid stroke="#ffffff30" />
            <PolarAngleAxis dataKey="label" tick={{ fill: "#eee", fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} />

            {selectedBikes.map((uiName) => {
              const radarKey = radarKeyMap[uiName];
              const color = bikeColors[radarKey];

              return (
                <Radar
                  key={uiName}
                  name={radarKey}
                  dataKey={radarKey}   // FIXED
                  stroke={color}
                  fill={color}
                  fillOpacity={0.22}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              );
            })}
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="w-[50%] flex items-center justify-center gap-12">
        {selectedBikes.map((uiName) => {
          const radarKey = radarKeyMap[uiName];
          return (
            <div key={uiName} className="flex flex-col items-center text-white">
              
              <div className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: bikeColors[radarKey] }}
                />
                <span className="text-base">{radarKey}</span>
              </div>

              <span className="text-base font-semibold pt-2">
                {avg(radarKey)}
              </span>

            </div>
          );
        })}
      </div>

    </div>
  );
};
