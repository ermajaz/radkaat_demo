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

  return (
    <section className="relative w-full text-stone-100 px-6 overflow-hidden">
      <div className="relative mx-auto overflow-x-auto w-full">

        {/* TABLE */}
        <Table className="w-full border-collapse hover:bg-transparent">
          <TableHeader className="hover:bg-transparent">
            {/* ROW 1: Bike Selectors */}
            <TableRow className="w-full border-none bg-transparent hover:bg-transparent">
              <TableHead className="py-6 text-left"></TableHead>

              {selectedBikes.map((bike, i) => (
                <TableHead key={i} className="py-6 text-center font-normal">
                  <BikeSelectorDesktop
                    selected={bike}
                    onSelect={(val) => onSelectBike(i, val)}
                    options={data.models}
                  />
                </TableHead>
              ))}
            </TableRow>

            {/* ROW 2: Category Tabs */}
            <TableRow className="w-full border-b border-white/30 bg-transparent hover:bg-transparent">

              <TableHead colSpan={selectedBikes?.length+1} className="hover:bg-transparent px-0">
                <CategoryTabsDesktop
                  categories={Object.keys(data.table)}
                  active={category}
                  setActive={setCategory}
                />
              </TableHead>
            </TableRow>
          </TableHeader>


          <TableBody className="hover:bg-transparent">
            {Object.keys(rows).map((spec, i) => (
              <motion.tr
                key={spec}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border-b border-white/30 transition-colors"
              >
                <TableCell className="h-14 py-2 text-left text-sm font-bold text-white whitespace-nowrap">
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
          </TableBody>
        </Table>

      </div>
    </section>
  );
};
