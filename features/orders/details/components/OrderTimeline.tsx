"use client";

import { motion } from "framer-motion";
import { Truck, CheckCircle, Clock } from "lucide-react";

interface OrderTimelineProps {
  status: string;
}

const stages = [
  {
    key: "processing",
    label: "Processing",
    icon: Clock,
    desc: "We’ve received your order and started preparing it.",
  },
  {
    key: "shipped",
    label: "Shipped",
    icon: Truck,
    desc: "Your order is on the move and will arrive soon.",
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: CheckCircle,
    desc: "Your package has been successfully delivered.",
  },
];

export default function OrderTimeline({ status }: OrderTimelineProps) {
  const currentStage =
    status === "Delivered" ? 2 : status === "Shipped" ? 1 : 0;

  const progressPercent = (currentStage / (stages.length - 1)) * 100;

  return (
    <div className="px-10 sm:px-30 md:px-50 relative mx-auto overflow-hidden bg-linear-to-br from-[#0f0f0f]/90 via-[#111]/90 to-[#0b0b0b]/90 border border-white/10 p-8 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,180,0.08),transparent_70%)] pointer-events-none" />

      <h3 className="text-lg font-semibold mb-10 tracking-wide text-center">
        Tracking Progress
      </h3>

      <div className="w-full relative flex justify-between items-center">
        {/* Base Line */}
        <div className="absolute top-[30%] left-0 right-0 h-1 bg-white/10 rounded-full -translate-y-1/2 z-0" />

        {/* Active Progress */}
        <motion.div
          className="absolute top-[30%] left-0 h-1 bg-linear-to-r from-green-400 via-emerald-400 to-lime-300 rounded-full shadow-[0_0_18px_rgba(34,197,94,0.4)] -translate-y-1/2 z-10"
          style={{ width: `${progressPercent}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Stage Nodes */}
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const active = idx <= currentStage;
          const delay = idx * 0.15;

          return (
            <motion.div
              key={stage.key}
              className="relative flex flex-col items-center text-center z-20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay }}
            >
              {/* Description bubble (absolute) */}
              <motion.div
                className={`absolute bottom-[110%] px-3 py-2 w-44 text-xs text-white/70 bg-white/[0.07] backdrop-blur-sm border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                  active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {stage.desc}
                <div className="absolute left-1/2 bottom-[-5px] -translate-x-1/2 w-2 h-2 bg-white/[0.07] rotate-45 border-b border-r border-white/10" />
              </motion.div>

              {/* Node Circle */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                  active
                    ? "border-emerald-400 bg-linear-to-br from-emerald-500/20 to-lime-500/10 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <Icon
                  size={22}
                  className={
                    active ? "text-emerald-400" : "text-white/40 transition"
                  }
                />
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-400/10 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Label */}
              <span
                className={`mt-4 text-sm tracking-wide ${
                  active ? "text-white font-medium" : "text-white/50"
                }`}
              >
                {stage.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Glow Overlay */}
      <motion.div
        className="absolute inset-0 -z-10 bg-linear-to-tr from-emerald-400/5 via-transparent to-transparent blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
