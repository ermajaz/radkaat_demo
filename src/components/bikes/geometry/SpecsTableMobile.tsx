"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SpecsTableMobile() {
  const specs = [
    { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
    { label: "REACH (mm)", values: ["430", "455", "475", "495"] },
    { label: "STACK (mm)", values: ["605", "615", "625", "640"] },
    { label: "CHAIN STAY LENGTH (mm)", values: ["440", "440", "440", "440"] },
    { label: "SEAT ANGLE", values: ["74°", "74°", "74°", "74°"] },
    { label: "HEAD ANGLE", values: ["67°", "67°", "67°", "67°"] },
  ];

  const sizeLabels = ["SM", "MD", "LG", "XL"];

  return (
    <section className="flex flex-col items-center text-stone w-full pt-4 pb-10">
      {/* 🧩 Geometry Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[90%] h-[200px] mb-8"
      >
        <Image
          src="/images/bikes/frame-geometry.png"
          alt="Frame Geometry"
          fill
          priority
          className="object-contain scale-150 drop-shadow-[0_0_35px_rgba(255,255,255,0.08)]"
        />
      </motion.div>

      {/* 🧾 Table Header */}
      <div className="w-[92%] flex justify-between px-4 pb-3 border-b border-[#E4D27C]/10">
        <span className="text-[11.5px] text-gray-300 font-semibold leading-snug max-w-[45%]">
          Spec
        </span>
        <div className="flex justify-between items-center gap-3 w-[45%]">
          {sizeLabels.map((s) => (
            <span
              key={s}
              className="w-6 text-[11px] text-gray-400 uppercase tracking-wider font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 🧱 Spec Rows */}
      <div className="flex flex-col gap-2 w-[92%] mt-2">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="flex justify-between items-center px-4 py-3 rounded-lg bg-[#141414]/60 border border-[#E4D27C]/10 backdrop-blur-md"
          >
            {/* Left: Label */}
            <span className="text-[11.5px] text-gray-300 font-semibold leading-snug max-w-[45%]">
              {spec.label}
            </span>

            {/* Right: Size Values */}
            <div className="flex justify-between items-center gap-3 w-[45%]">
              {spec.values.map((val, idx) => (
                <motion.span
                  key={idx}
                  whileTap={{ scale: 0.9 }}
                  className="text-[13px] font-semibold text-sandstorm/90 text-center w-6"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📏 Subtle Gradient Footer */}
      <div className="absolute bottom-0 h-20 w-full bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
