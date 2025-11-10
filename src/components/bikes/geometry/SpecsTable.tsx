"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SpecsTable() {
  const specs = [
    { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
    { label: "REACH (mm)", values: ["430", "455", "475", "495"] },
    { label: "STACK (mm)", values: ["605", "615", "625", "640"] },
    { label: "CHAIN STAY LENGTH (mm)", values: ["440", "440", "440", "440"] },
    { label: "SEAT ANGLE", values: ["74°", "74°", "74°", "74°"] },
    { label: "HEAD ANGLE", values: ["67°", "67°", "67°", "67°"] },
  ];

  return (
    <section className="relative w-full text-stone-100 py-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-20">
        {/* Left - Geometry Frame Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-[640px] aspect-[1.3/1]">
            <Image
              src="/images/bikes/frame-geometry.png"
              alt="Bike Frame Geometry"
              fill
              priority
              className="object-contain scale-130 -translate-y-10 -translate-x-10 drop-shadow-[0_0_35px_rgba(255,255,255,0.08)]"
            />
          </div>
        </motion.div>

        {/* Right - Table Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Table className="border-collapse w-full">
            <TableHeader>
              <TableRow className="border-b border-[#1F1F1F]">
                <TableHead className="text-left text-sm font-light uppercase tracking-widest text-gray-400">
                  &nbsp;
                </TableHead>
                {["SM", "MD", "LG", "XL"].map((size) => (
                  <TableHead
                    key={size}
                    className="text-right text-sm font-light uppercase tracking-widest text-gray-400"
                  >
                    {size}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {specs.map((spec, i) => (
                <motion.tr
                  key={spec.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="border-b border-[#1F1F1F] hover:bg-[#161616] transition-colors duration-300"
                >
                  <TableCell className="py-6 font-semibold tracking-wide text-gray-200">
                    {spec.label}
                  </TableCell>
                  {spec.values.map((val, idx) => (
                    <TableCell
                      key={idx}
                      className="text-right font-mono text-lg text-stone-100"
                    >
                      {val}
                    </TableCell>
                  ))}
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
