"use client";

import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BikeSelectorDesktop from "./BikeSelectorDesktop";
import CategoryTabsDesktop from "./CategoryTabsDesktop";

// ✅ MAP UI bike → Radar key
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

export const ComparisonTableDesktop = ({
  category,
  setCategory,
  selectedBikes,
  data,
  onSelectBike,
}: {
  category: string;
  setCategory: (c: string) => void;
  selectedBikes: string[];
  data: any;
  onSelectBike: (index: number, value: string) => void;
}) => {
  const rows = data.table[category];


  // ✅ Build chart-friendly data
  const radarRaw = data.radar;
  const chartData = radarRaw.map((item: any) => {
    const obj: any = { label: item.label };
    selectedBikes.forEach((uiName) => {
      const radarKey = radarKeyMap[uiName];
      obj[radarKey] = item[radarKey] ?? 0;
    });
    return obj;
  });

  // ✅ Average helper
  const avg = (radarKey: string) => {
    const values = chartData.map((d: any) => Number(d[radarKey]) || 0);
    return Math.round(values.reduce((a: number, b: number) => a + b, 0) / values.length);
  };


  return (
    <section className="relative w-full text-stone-100 px-6 overflow-hidden">
      <div className="relative mx-autooverflow-x-auto w-full">

        {/* TABLE */}
        <Table className="w-full border-collapse hover:bg-transparent">
          <TableHeader className="hover:bg-transparent">
            {/* ROW 2: Category Tabs */}
            <TableRow className="w-full border-b border-white/10 bg-transparent hover:bg-transparent">

              <TableHead colSpan={selectedBikes?.length + 1} className="hover:bg-transparent px-0">
                <CategoryTabsDesktop
                  categories={Object.keys(data.table)}
                  active={category}
                  setActive={setCategory}
                />
              </TableHead>
            </TableRow>
            {/* ROW 1: Bike Selectors */}
            <TableRow className="w-full border-none bg-[#121212] hover:bg-[#121212]">
              <TableHead className="pt-6 pb-2 text-left"></TableHead>
              {selectedBikes.map((bike, i) => (
                <TableHead key={i} className="pt-6 pb-2 text-center font-normal">
                  <BikeSelectorDesktop
                    selected={bike}
                    onSelect={(val) => onSelectBike(i, val)}
                    options={data.models}
                  />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>


          <TableBody className="bg-[#121212] hover:bg-[#121212]">
            {Object.keys(rows).map((spec, i) => (
              <motion.tr
                key={spec}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border-b border-white/10 transition-colors"
              >
                <TableCell className="h-14 py-2 pl-5 text-left text-xs font-bold text-white/40 whitespace-nowrap">
                  {spec}
                </TableCell>

                {selectedBikes.map((bike, col) => (
                  <TableCell
                    key={col}
                    className="h-14 py-2 text-center text-xs text-white/90 font-bold"
                  >
                    {rows[spec][bike] ?? "-"}
                  </TableCell>
                ))}
              </motion.tr>
            ))}
            {/* ✅ NEW — OVERALL SCORE ROW */}
            <motion.tr
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="border-b border-white/10 bg-[#151515]"
            >
              <TableCell className="h-14 py-2 pl-5 text-left text-xs font-bold text-white/40">
                Points
              </TableCell>

              {selectedBikes.map((uiName, col) => {
                const radarKey = radarKeyMap[uiName];
                return (
                  <TableCell
                    key={col}
                    className="h-14 py-2 text-center text-base font-extrabold text-white"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: bikeColors[radarKey] }}
                      />
                      <span className="text-base font-semibold">
                        {avg(radarKey)}
                      </span>
                    </div>
                  </TableCell>

                );
              })}
            </motion.tr>

          </TableBody>
        </Table>

      </div>
    </section>
  );
};
