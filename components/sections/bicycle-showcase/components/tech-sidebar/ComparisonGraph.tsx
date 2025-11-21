"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { SPEC_GRAPH_DATA } from "../../utils/bicycle-showcase";

export default function ComparisonGraph() {
  return (
    <div className="mt-4 bg-white/5 p-6 rounded-xl border border-white/10">
      <h3 className="text-lg font-semibold mb-4">Advanced Comparison Graph</h3>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SPEC_GRAPH_DATA}>
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />

            <XAxis
              dataKey="spec"
              stroke="#aaa"
              tick={{ fill: "#aaa" }}
            />

            <YAxis
              stroke="#aaa"
              tick={{ fill: "#aaa" }}
            />

            <Tooltip
              contentStyle={{
                background: "#1a1a1a",
                border: "1px solid #333",
                color: "#fff",
              }}
            />

            <Legend wrapperStyle={{ color: "#fff" }} />

            {/* Model Graph Lines */}
            <Line
              type="monotone"
              dataKey="model1"
              stroke="#91c842"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="model-1"
            />

            <Line
              type="monotone"
              dataKey="model2"
              stroke="#c9ba6b"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="model-2"
            />

            <Line
              type="monotone"
              dataKey="model3"
              stroke="#c75a5a"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="model-3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
