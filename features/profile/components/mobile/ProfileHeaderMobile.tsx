"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Star, Edit3 } from "lucide-react";
import { useState } from "react";
import EditProfileSheet from "./EditProfileSheet";

export default function ProfileHeaderMobile() {
  const [openEdit, setOpenEdit] = useState(false);

  const user = {
    name: "John Doe",
    avatar: "/images/manali/rider-img.jpg",
    level: "Gold Member",
    verified: true,
    completion: 82,
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          relative w-full rounded-xl p-5
          bg-[#121212]/95 border border-[#2a2a2a]
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          flex flex-col gap-5
        "
      >
        {/* ✅ Edit Button (top right) */}
        <button
          onClick={() => setOpenEdit(true)}
          className="
            absolute top-4 right-4
            text-[12px] text-sandstorm flex items-center gap-1
            font-medium hover:text-white transition-colors
          "
        >
          <Edit3 size={15} /> Edit
        </button>

        {/* ✅ Top Row — Avatar Left + Details Right */}
        <div className="flex items-center gap-4 w-full">
          {/* Avatar */}
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="
                rounded-full object-cover
                border border-white/20
                shadow-[0_0_12px_rgba(255,255,255,0.12)]
              "
            />
            {user.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 border-2 border-[#0f0f0f]">
                <CheckCircle2 size={14} className="text-white" />
              </div>
            )}
          </div>

          {/* Name + Level */}
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {user.name}
            </h2>

            <span
              className="
                text-[11px] px-3 py-1 rounded-full
                bg-sandstorm text-black font-semibold tracking-wide
                flex items-center gap-1 w-fit
                shadow-[0_0_8px_rgba(255,200,80,0.35)]
              "
            >
              <Star size={12} /> {user.level}
            </span>
          </div>
        </div>

        {/* ✅ Bottom — Progress Bar */}
        <div className="w-full mt-1">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${user.completion}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full bg-linear-to-r from-army via-sandstorm to-sandstorm-1 rounded-full"
            />
          </div>

          <p className="text-[11px] text-white/50 mt-1 text-center">
            {user.completion}% Complete
          </p>
        </div>
      </motion.div>

      <EditProfileSheet open={openEdit} onClose={() => setOpenEdit(false)} />
    </>
  );
}
