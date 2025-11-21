"use client";

import { motion } from "framer-motion";
import {
  Clock,
  LogIn,
  KeyRound,
  MapPin,
  PackageCheck,
  LucideIcon,
} from "lucide-react";

interface Activity {
  id: number;
  action: string;
  time: string;
  icon: LucideIcon;
}

const activities: Activity[] = [
  { id: 1, action: "Logged in from Chrome, Windows", time: "2 hours ago", icon: LogIn },
  { id: 2, action: "Changed password", time: "3 days ago", icon: KeyRound },
  { id: 3, action: "Updated address information", time: "1 week ago", icon: MapPin },
  { id: 4, action: "Placed order #2342", time: "2 weeks ago", icon: PackageCheck },
];

export default function ActivitySection() {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)] space-y-5 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock size={18} /> Recent Activity
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative mt-4">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-linear-to-b from-white/20 via-white/10 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <ul className="space-y-5">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.1 }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="relative pl-10 pr-3 py-3 group cursor-default transition-all rounded-lg"
              >
                {/* Timeline dot */}
                <div className="absolute left-[7px] top-4 w-4 h-4 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white/70 group-hover:bg-white"
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                </div>

                {/* Icon + Action + Time */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center bg-white/10 border border-white/10 rounded-md group-hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={16} className="text-white/80" />
                    </motion.div>
                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-all">
                      {item.action}
                    </span>
                  </div>
                  <span className="text-xs text-white/50 whitespace-nowrap mt-1">
                    {item.time}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
