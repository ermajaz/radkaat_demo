"use client";

import CommunityHero from "@/features/community/components/CommunityHero";
import DiscussionForum from "@/features/community/components/DiscussionForum";
import EventsCalendar from "@/features/community/components/EventsCalender";
import GearShowcase from "@/features/community/components/GearShowcase";
import Leaderboard from "@/features/community/components/Leaderboard";
import { Mentorship } from "@/features/community/components/Mentorship";
import PhotoWall from "@/features/community/components/PhotoWall";
import RideLogsShowcase from "@/features/community/components/RideLogs";
import RiderProfiles from "@/features/community/components/RiderProfiles";
import { motion} from "framer-motion";

export default function CommunityPage() {

  return (
    <main className="z-100">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          <CommunityHero />
          <RiderProfiles />
          <RideLogsShowcase />
          <EventsCalendar />
          <GearShowcase />
          <DiscussionForum />
          <PhotoWall />
          <Leaderboard />
          <Mentorship />
        </motion.div>
    </main>
  );
}
