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

export default function CompareTable() {
  const bikes = [
    { name: "SEROW", img: "/images/bikes/radkaat-cycle.png" },
    { name: "SAOLA", img: "/images/bikes/radkaat-cycle.png" },
    { name: "TAKIN", img: "/images/bikes/radkaat-cycle.png" },
  ];

  const specs = [
    { label: "FRAME SIZE", values: ["4", "4", "4"] },
    { label: "FRAME", values: ["TORAY T-900 UD", "TORAY T-900 UD", "TORAY T-900 UD"] },
    { label: "GROUPSET", values: ["SRAM GX EAGLE XS", "SRAM GX EAGLE XS", "SRAM GX EAGLE XS"] },
    { label: "WHEELSET DISC", values: ["DT XR 1700 ULTRA", "DT XR 1700 ULTRA", "DT XR 1700 ULTRA"] },
  ];

  return (
    <section className="relative w-full text-stone-100 px-6 overflow-hidden">

      <div className="relative z-10 mx-auto overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-[#1A1A1A]">
              <TableHead className="py-6 text-left font-light text-gray-400 uppercase tracking-widest text-sm">
                &nbsp;
              </TableHead>

              {bikes.map((bike, i) => (
                <TableHead key={i} className="text-center font-light">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex flex-col items-center justify-center group relative"
                  >
                    {/* Soft light glow */}
                    <motion.div
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute w-[340px] h-[340px] rounded-full bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl -z-10"
                    />
                    {/* Bike Image */}
                    <div className="relative w-[300px] h-[230px] transition-transform duration-500 ease-out group-hover:scale-105">
                      <Image
                        src={bike.img}
                        alt={bike.name}
                        fill
                        className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                      />
                    </div>
                    {/* Bike Name */}
                    <span className="mt-4 text-lg pb-5 font-semibold tracking-wide text-white group-hover:text-gray-300 transition-colors">
                      {bike.name}
                    </span>
                  </motion.div>
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
                className="border-b border-[#1A1A1A]/70 hover:bg-[#161616] transition-colors duration-300"
              >
                <TableCell className="py-6 pr-16 font-semibold tracking-wide text-gray-300 text-left whitespace-nowrap">
                  {spec.label}
                </TableCell>
                {spec.values.map((val, idx) => (
                  <TableCell
                    key={idx}
                    className="text-center font-mono text-base text-stone-100"
                  >
                    {val}
                  </TableCell>
                ))}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
