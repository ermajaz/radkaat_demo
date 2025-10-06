"use client";

import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import CommunityHero from "@/components/community/CommunityHero";
import DiscussionForum from "@/components/community/DiscussionForum";
import EventsCalendar from "@/components/community/EventsCalender";
import GearShowcase from "@/components/community/GearShowcase";
import Leaderboard from "@/components/community/Leaderboard";
import { Mentorship } from "@/components/community/Mentorship";
import PhotoWall from "@/components/community/PhotoWall";
import { Rewards } from "@/components/community/Rewards";
import RideLogs from "@/components/community/RideLogs";
import RiderProfiles from "@/components/community/RiderProfiles";
import { motion} from "framer-motion";

export default function CommunityPage() {

  return (
    <main className="z-100">
      <ParallaxWrapper>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          <CommunityHero />
          <RiderProfiles />
          <RideLogs />
          <EventsCalendar />
          <GearShowcase />
          <DiscussionForum />
          <PhotoWall />
          <Leaderboard />
          <Mentorship />
          <Rewards />
        </motion.div>
      </ParallaxWrapper>
    </main>
  );
}
