// components/BikeComparison/RadarChart.tsx
import { BikeStats } from "@/types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  stats: BikeStats;
}

export default function RadarChartComp({ stats }: Props) {
  const statColors = {
    Suspension: "#8d363b", // rust
    "Braking Power": "#516316", // army green
    "Frame Strength": "#003a5d", // petrol blue
    "Tire Grip": "#5a90c6", // airforce blue
    Weight: "#c6b783", // sandstorm
    Comfort: "#001644", // navy
  };

  const data = [
    { subject: "Suspension", value: stats.suspension },
    { subject: "Braking Power", value: stats.braking },
    { subject: "Frame Strength", value: stats.frame },
    { subject: "Tire Grip", value: stats.tire },
    { subject: "Weight", value: stats.weight },
    { subject: "Comfort", value: stats.comfort },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid stroke="#88888830" />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis domain={[0, 10]} tick={false} /> */}

        <Radar
          dataKey="value"
          stroke="#facc15"
          fill="#facc15"
          fillOpacity={0.3}
          dot={({ cx, cy, payload, index }) => (
            <g key={`${payload.subject}-${index}`}>
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill={statColors[payload.subject as keyof typeof statColors]}
              />
            </g>
          )}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
