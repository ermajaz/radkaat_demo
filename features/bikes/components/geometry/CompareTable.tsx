"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { BIKE_DATA, MODELS } from "./utils/geometry-data";
import {
  TableBikeName,
  TableModelName,
  SpecLabel,
} from "./utils/geometry.types";

import { cn } from "@/lib/utils";


export default function CompareTable({
  selectedBike,
  selectedModel,
}: {
  selectedBike: TableBikeName;
  selectedModel: TableModelName;
}) {
  const bikes = Object.keys(BIKE_DATA) as TableBikeName[];

  // Selected model per bike
  const [selectedModels, setSelectedModels] = useState<
  Record<TableBikeName, TableModelName>
>(
  bikes.reduce((acc, bike) => {
    acc[bike] = bike === selectedBike ? selectedModel : "model-1";
    return acc;
  }, {} as Record<TableBikeName, TableModelName>)
);

console.log(selectedModels);


  // Determine spec labels from the first bike
  const firstBike = bikes[0];
  const currentModel = selectedModels[firstBike];
  const firstSpecSet = BIKE_DATA[firstBike].specs[currentModel];
  const specLabels = Object.keys(firstSpecSet) as SpecLabel[];

  return (
    <section className="relative w-full text-stone-100 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-[#1A1A1A] hover:bg-transparent">
              <TableHead className="py-6 text-left text-sm text-gray-400 uppercase tracking-widest">
                &nbsp;
              </TableHead>

              {/* =========================
                  BIKE COLUMNS
              ========================== */}
              {bikes.map((bike, index) => {
                const model = selectedModels[bike];
                const img = BIKE_DATA[bike].images[model];

                const isSelectedBike = bike === selectedBike;

                return (
                  <TableHead key={bike} className="text-center font-light">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className={cn(
                        "flex flex-col items-center justify-center py-4 px-2 rounded-md",
                        isSelectedBike && `text-sandstorm`
                      )}
                    >
                      {/* Image */}
                      <div className="relative w-[300px] h-[230px] transition-transform duration-500">
                        <Image
                          src={img}
                          alt={bike}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Name + Model Selector */}
                      <div className="flex items-center mt-4 mb-2 text-lg font-semibold tracking-wide">
                        <span
                          className={cn(
                            "mr-2",
                            isSelectedBike
                              ? "text-sandstorm"
                              : "text-white"
                          )}
                        >
                          {bike}
                        </span>

                        <Select
                          value={model}
                          onValueChange={(val: TableModelName) =>
                            setSelectedModels((prev) => ({
                              ...prev,
                              [bike]: val,
                            }))
                          }
                        >
                          <SelectTrigger
                            className={cn(
                              "bg-white/10 text-sm w-28 text-white border-white/20",
                              isSelectedBike &&
                                model.toLowerCase() ===
                                  selectedModel.toLowerCase() &&
                                "text-sandstorm border-sandstorm font-semibold"
                            )}
                          >
                            <SelectValue />
                          </SelectTrigger>

                          <SelectContent className="bg-[#1A1A1A] text-white">
                            {MODELS.map((m) => (
                              <SelectItem key={m} value={m}>
                                {m}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>

          {/* ============================
                TABLE BODY
          ============================= */}
          <TableBody>
            {specLabels.map((label, rowIndex) => (
              <motion.tr
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * rowIndex }}
                className="border-b border-[#1A1A1A]/70 hover:bg-[#161616] transition-colors"
              >
                {/* Spec Label */}
                <TableCell className="py-6 pr-16 font-semibold tracking-wide text-gray-300 whitespace-nowrap">
                  {label}
                </TableCell>

                {/* Spec Values */}
                {bikes.map((bike) => {
                  const model = selectedModels[bike];
                  const value = BIKE_DATA[bike].specs[model][label];

                  const isSelectedCell =
                    bike === selectedBike &&
                    model.toLowerCase() === selectedModel.toLowerCase();

                  return (
                    <TableCell
                      key={bike}
                      className={cn(
                        "text-center font-mono text-base",
                        isSelectedCell
                          ? "text-sandstorm font-semibold"
                          : "text-stone-100"
                      )}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
