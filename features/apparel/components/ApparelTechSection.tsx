"use client";

import { motion } from "framer-motion";
import { Cpu, Wind, Flame, StretchHorizontal } from "lucide-react";

const techItems = [
  {
    title: "AeroWeave",
    desc: "Low-drag surface engineered for high-wind zones.",
    icon: Wind,
  },
  {
    title: "FlowMesh",
    desc: "Breathable micro-vent panels mapped to heat zones.",
    icon: Cpu,
  },
  {
    title: "ThermoShell",
    desc: "Insulated micro-layer for cold morning starts.",
    icon: Flame,
  },
  {
    title: "RideStretch",
    desc: "4-way stretch for maximum agility in the saddle.",
    icon: StretchHorizontal,
  },
];

export default function ApparelTechSection() {
  return (
    <section className="relative w-full bg-superblack py-28 text-white overflow-hidden">

      {/* ✅ Futuristic grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* ✅ Glow orb */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-sandstorm/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ✅ LEFT CONTENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sandstorm">
            Fabric Technology
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
            Engineered for
            <br />
            <span className="font-semibold">performance motion.</span>
          </h2>

          <p className="mt-6 text-neutral-300 max-w-md">
            Each textile layer is body-mapped for airflow, ergonomics and
            thermal response — tuned for the cycling position, not the fashion rack.
          </p>
        </motion.div>

        {/* ✅ RIGHT TECH GRID */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {techItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                transition={{ duration: 0.4 }}
                className="relative group bg-white/3 border border-white/10 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,0,0.08)] cursor-default"
              >
                {/* ✅ Subtle glow on hover (no movement) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-sandstorm/10 to-transparent rounded-xl" />

                <Icon className="text-sandstorm mb-3 w-6 h-6" />

                <h3 className="text-sm font-semibold tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* ✅ Minimal reveal line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="absolute bottom-0 left-10 h-px bg-sandstorm/40"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
