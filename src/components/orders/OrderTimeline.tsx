"use client";

import { motion } from "framer-motion";
import { Package, Truck, CheckCircle } from "lucide-react";

const stages = [
  { label: "Order Placed", icon: Package },
  { label: "Shipped", icon: Truck },
  { label: "Delivered", icon: CheckCircle },
];

export default function OrderTimeline({ status }: { status: string }) {
  const currentStage =
    status === "Delivered" ? 2 : status === "Shipped" ? 1 : 0;

  return (
    <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold mb-4">Tracking Progress</h3>
      <div className="flex justify-between items-center relative">
        {stages.map((s, idx) => {
          const Icon = s.icon;
          const active = idx <= currentStage;
          return (
            <div key={idx} className="flex flex-col items-center relative">
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  active
                    ? "bg-green-500/20 border-green-400"
                    : "bg-white/10 border-white/20"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Icon
                  size={18}
                  className={active ? "text-green-400" : "text-white/50"}
                />
              </motion.div>
              <span
                className={`text-xs mt-2 ${
                  active ? "text-white" : "text-white/50"
                }`}
              >
                {s.label}
              </span>
              {idx < stages.length - 1 && (
                <div
                  className={`absolute top-5 left-10 w-[calc(100%-40px)] h-[2px] ${
                    active ? "bg-green-400/60" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
