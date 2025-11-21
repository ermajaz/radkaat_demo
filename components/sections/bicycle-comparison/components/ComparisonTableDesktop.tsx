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

export const ComparisonTableDesktop = ({
  category,
  selectedBikes,
  data,
  onSelectBike,
}: {
  category: string;
  selectedBikes: string[];
  data: any;
  onSelectBike: (index: number, value: string) => void;
}) => {
  const rows = data.table[category];

  return (
    <section className="relative w-full text-stone-100 px-6 overflow-hidden">
      <div className="relative mx-auto overflow-x-auto w-full">

        {/* TABLE */}
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-white/30 bg-transparent hover:bg-transparent">
              {/* empty cell on left */}
              <TableHead className="py-10 text-left">&nbsp;</TableHead>

              {selectedBikes.map((bike, i) => (
                <TableHead
                  key={i}
                  className="py-10 text-center font-normal"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex justify-center mt-5"
                  >
                    <BikeSelectorDesktop
                      selected={bike}
                      onSelect={(val) => onSelectBike(i, val)}
                      options={data.models}
                    />
                  </motion.div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {Object.keys(rows).map((spec, i) => (
              <motion.tr
                key={spec}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border-b border-white/30 hover:bg-[#161616] transition-colors"
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
