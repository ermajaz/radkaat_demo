"use client";

import { motion } from "framer-motion";
import { Edit3, Phone, User, Briefcase, Calendar } from "lucide-react";
import EditProfileSheet from "./EditProfileSheet";
import { useState } from "react";

export default function ProfileInfoMobile() {
  const [editOpen, setEditOpen] = useState(false);

  const info = {
    phone: "+91 98765 43210",
    dob: "15 Mar 1995",
    gender: "Male",
    occupation: "Professional Rider",
  };

  const fields = [
    { label: "Phone", value: info.phone, icon: Phone },
    { label: "Date of Birth", value: info.dob, icon: Calendar },
    { label: "Gender", value: info.gender, icon: User },
    { label: "Occupation", value: info.occupation, icon: Briefcase },
  ];

  return (
    <>
      <motion.div
        className="bg-[#121212]/95  border border-[#2a2a2a] rounded-xl p-5 space-y-5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/80">
            Personal Info
          </h3>

          <button
            onClick={() => setEditOpen(true)}
            className="flex items-center gap-1 text-[12px] text-sandstorm"
          >
            <Edit3 size={14} /> Edit
          </button>
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {fields.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white/10 border border-[#2a2a2a] rounded-md">
                  <Icon size={15} className="text-white/80" />
                </div>

                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <EditProfileSheet open={editOpen} onClose={() => setEditOpen(false)} />
    </>
  );
}
