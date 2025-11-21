"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompareTableMobile() {
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
    <section className="relative w-full h-screen bg-superblack text-stone px-4 py-10">
      {/* ====== Header Row: Bikes ====== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-3 gap-3 mb-6"
      >
        {bikes.map((bike, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-[#141414]/70 rounded-xl border border-[#E4D27C]/10 py-3 backdrop-blur-md"
          >
            <div className="relative w-20 h-[60px] mb-2">
              <Image
                src={bike.img}
                alt={bike.name}
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </div>
            <span className="text-sandstorm text-[12px] font-semibold uppercase tracking-wide">
              {bike.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ====== Divider ====== */}
      <div className="w-full h-px bg-[#E4D27C]/15 mb-6" />

      {/* ====== Spec Rows ====== */}
      <div className="flex flex-col gap-3">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="bg-[#141414]/70 rounded-2xl border border-[#E4D27C]/10 backdrop-blur-md p-3"
          >
            {/* Label */}
            <div className="text-[11px] uppercase text-gray-400 tracking-widest mb-2">
              {spec.label}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-3 gap-3">
              {spec.values.map((val, idx) => (
                <motion.div
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-3 rounded-xl bg-[#1A1A1A]/60 border border-[#E4D27C]/10 transition-all hover:bg-[#E4D27C]/10"
                >
                  <span className="text-[12px] font-medium text-sandstorm/90">
                    {bikes[idx].name}
                  </span>
                  <span className="text-[13px] text-center text-white font-semibold mt-1">
                    {val}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
