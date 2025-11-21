"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Settings, Edit3, CheckCircle2, Star } from "lucide-react";

export default function ProfileHeader() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/manali/rider-img.jpg",
    memberSince: "Jan 2023",
    level: "Gold Member",
    verified: true,
    completion: 82, // profile completion %
  };

  // 🎯 Parallax motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      {/* 👤 User Info */}
      <div className="flex items-center gap-6 w-full md:w-auto">
        {/* Avatar */}
        <div className="relative w-28 h-28 group">
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="rounded-full object-cover border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
          {user.verified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 border-2 border-[#0f0f0f]"
            >
              <CheckCircle2 className="text-white" size={14} />
            </motion.div>
          )}
        </div>

        {/* User Text Info */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">
              {user.name}
            </h1>
            {user.level && (
              <span className="text-xs bg-sandstorm text-black px-2 py-0.5 font-semibold flex items-center gap-1">
                <Star size={12} /> {user.level}
              </span>
            )}
          </div>
          <p className="text-white/70 text-sm">{user.email}</p>
          <p className="text-xs text-white/50">
            Member since {user.memberSince}
          </p>

          {/* Progress Bar */}
          <div className="mt-3 w-56 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${user.completion}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-linear-to-r from-army via-sandstorm to-sandstorm-1 rounded-full"
            />
          </div>
          <p className="text-[11px] text-white/60 mt-1">
            Profile Complete:{" "}
            <span className="text-white/90">{user.completion}%</span>
          </p>
        </div>
      </div>

      {/* ⚙️ Actions */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20 transition-all text-white/90"
        >
          <Edit3 size={16} /> Edit Profile
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255,255,255,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-black cursor-pointer font-semibold hover:bg-neutral-200 transition-all"
        >
          <Settings size={16} /> Settings
        </motion.button>
      </div>

      {/* Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent blur-3xl opacity-30 -z-10"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
