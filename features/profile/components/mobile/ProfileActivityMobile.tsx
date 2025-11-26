"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const activities = [
  { id: 1, action: "Logged in from Chrome", time: "2h ago" },
  { id: 2, action: "Changed password", time: "3 days ago" },
  { id: 3, action: "Updated address", time: "1 week ago" },
  { id: 4, action: "Placed order #2342", time: "2 weeks ago" },
];

export default function ProfileActivityMobile() {
  return (
    <motion.div
      className="bg-[#121212]/95 border border-[#2a2a2a] rounded-xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] space-y-4"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-white/70" />
        <h3 className="text-sm font-semibold uppercase text-white/80">
          Recent Activity
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex justify-between border-b border-[#2a2a2a] pb-3"
          >
            <p className="text-sm text-white/90">{item.action}</p>
            <span className="text-[10px] text-white/50">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
