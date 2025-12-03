
import { Bikee } from "@/types/bikeComparison";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  allBikes: Bikee[];
  selectedBike: Bikee;
}

interface RadarEntry {
  subject: string;
  [bikeName: string]: string | number; // subject is string, stats are numbers
}

export default function RadarChartComp({ allBikes, selectedBike }: Props) {
  const bikeColors: Record<string, string> = {
    SEROW: "var(--color-sandstorm)",
    SAOLA: "var(--color-petrol)",
    TAKIN: "var(--color-army)",
  };

  const stats = [
    "Suspension",
    "Braking Power",
    "Frame Strength",
    "Tire Grip",
    "Weight",
    "Comfort",
  ];

  const data: RadarEntry[] = stats.map((stat) => {
    const entry: RadarEntry = { subject: stat };

    allBikes.forEach((bike) => {
      switch (stat) {
        case "Suspension":
          entry[bike.name] = bike.stats.suspension;
          break;
        case "Braking Power":
          entry[bike.name] = bike.stats.braking;
          break;
        case "Frame Strength":
          entry[bike.name] = bike.stats.frame;
          break;
        case "Tire Grip":
          entry[bike.name] = bike.stats.tire;
          break;
        case "Weight":
          entry[bike.name] = bike.stats.weight;
          break;
        case "Comfort":
          entry[bike.name] = bike.stats.comfort;
          break;
      }
    });

    return entry;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid stroke="#88888880" />
        <PolarAngleAxis dataKey="subject" />

        {allBikes.map((bike) => {
          const isSelected = bike.id === selectedBike.id;
          const color = bikeColors[bike.name.toUpperCase()] || "#facc15";

          return (
            <Radar
              key={bike.id}
              name={bike.name}
              dataKey={bike.name}
              stroke={color}
              fill={color}
              fillOpacity={isSelected ? 0.5 : 0.2}
              strokeOpacity={isSelected ? 1 : 0.3}
              strokeWidth={isSelected ? 2 : 1}
              dot={isSelected ? true : false} 
            />
          );
        })}
      </RadarChart>
    </ResponsiveContainer>
  );
}
