"use client";

import { motion } from "framer-motion";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileInfoCard from "@/components/profile/ProfileInfoCard";
import ActivitySection from "@/components/profile/ActivitySection";
import ProfileAddressSection from "@/components/profile/ProfileAddressSection";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0a0a0a] text-white px-6 md:px-16 py-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-10"
      >
        {/* 👤 Header */}
        <ProfileHeader />

        {/* 📊 Stats */}
        <ProfileStats />

        {/* 🧾 Info */}
        <ProfileInfoCard />

        {/* 📍 Addresses */}
        <ProfileAddressSection />

        {/* 🕒 Activity */}
        <ActivitySection />
      </motion.div>
    </main>
  );
}
