"use client";

import { motion } from "framer-motion";
import { Truck, CheckCircle, Clock } from "lucide-react";

const steps = [
  {
    key: "processing",
    label: "Processing",
    desc: "We’ve received your order.",
    icon: Clock,
  },
  {
    key: "shipped",
    label: "Shipped",
    desc: "On the way to your location.",
    icon: Truck,
  },
  {
    key: "delivered",
    label: "Delivered",
    desc: "Package successfully delivered.",
    icon: CheckCircle,
  },
];

export default function OrderTimelineMobile({ status }: { status: string }) {
  const currentIndex =
    status === "Delivered" ? 2 : status === "Shipped" ? 1 : 0;

  const progressPercent =
    (currentIndex / Math.max(steps.length - 1, 1)) * 100;

  return (
    <div className="p-6 rounded-xl bg-[#121212]/95 border border-[#2a2a2a] space-y-6 relative overflow-hidden">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-center text-white/80">
        Tracking Progress
      </h3>

      <div className="relative mt-2">
        {/* 🔹 Base line (goes THROUGH node centers) */}
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-white/10 rounded-full" />

        {/* 🔹 Active progress line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-0 top-5 h-0.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
        />

        {/* 🔹 Steps row */}
        <div className="relative flex justify-between items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index <= currentIndex;

            return (
              <div
                key={step.key}
                className="flex flex-col items-center w-1/3 text-center"
              >
                {/* NODE */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: active ? 1 : 0.95,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    border text-xs
                    ${
                      active
                        ? "border-green-400 bg-green-400/15"
                        : "border-white/20 bg-[#191919]"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={active ? "text-green-400" : "text-white/40"}
                  />
                </motion.div>

                {/* LABEL + DESC */}
                <div className="mt-3 space-y-1">
                  <p
                    className={`text-xs font-medium ${
                      active ? "text-white" : "text-white/45"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-[10px] leading-tight ${
                      active ? "text-white/60" : "text-white/30"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Soft background glow */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_70%)]"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
