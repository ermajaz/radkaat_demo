"use client";

import ActivitySection from "./components/ActivitySection";
import ProfileAddressSection from "./components/ProfileAddressSection";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ProfileStats from "./components/ProfileStats";
import {motion} from "framer-motion";

export default function ProfileDesktop() {
    return (
        <main className="min-h-screen text-white px-6 md:px-16 py-30">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-6xl mx-auto space-y-10"
            >
                <ProfileHeader />
                <ProfileStats />
                <ProfileInfoCard />
                <ProfileAddressSection />
                <ActivitySection />
            </motion.div>
        </main>
    );
}