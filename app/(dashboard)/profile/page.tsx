"use client";

import ActivitySection from "@/features/profile/components/ActivitySection";
import ProfileAddressSection from "@/features/profile/components/ProfileAddressSection";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileInfoCard from "@/features/profile/components/ProfileInfoCard";
import ProfileStats from "@/features/profile/components/ProfileStats";
import { motion } from "framer-motion";


export default function ProfilePage() {
  return (
    <main className="min-h-screen text-white px-6 md:px-16 py-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <ProfileHeader/>
        <ProfileStats />
        <ProfileInfoCard />
        <ProfileAddressSection />
        <ActivitySection />
      </motion.div>
    </main>
  );
}
