"use client";

import { motion } from "framer-motion";
import { Edit3, User, Phone, Briefcase, Calendar } from "lucide-react";

export default function ProfileInfoCard() {
  const info = {
    phone: "+91 98765 43210",
    dob: "15th March 1995",
    gender: "Male",
    occupation: "Product Designer",
    completion: 85, // profile completion percentage
  };

  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold tracking-wide flex items-center gap-2">
          <User size={18} className="text-white/70" />
          Personal Information
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer gap-2 text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 border border-white/10 transition-all text-white/80"
        >
          <Edit3 size={14} /> Edit
        </motion.button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 text-sm relative">
        {[
          { label: "Phone", value: info.phone, icon: Phone },
          { label: "Date of Birth", value: info.dob, icon: Calendar },
          { label: "Gender", value: info.gender, icon: User },
          { label: "Occupation", value: info.occupation, icon: Briefcase },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="flex items-start gap-3 group relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="p-2 bg-white/10 rounded-md border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
                <Icon size={16} className="text-white/80" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Profile Completion Bar */}
      <div className="mt-8">
        <p className="text-xs text-white/50 mb-1 uppercase tracking-widest">
          Profile Completion
        </p>
        <div className="w-full h-2 bg-white/10 overflow-hidden relative rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${info.completion}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-linear-to-r from-army via-sandstorm to-sandstorm-1 rounded-full"
          />
        </div>
        <p className="text-[11px] text-white/60 mt-1">
          {info.completion}% Complete
        </p>
      </div>

      {/* Soft Ambient Light Effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-linear-to-tr from-white/10 via-transparent to-transparent blur-3xl opacity-40"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
