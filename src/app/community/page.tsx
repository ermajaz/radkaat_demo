"use client";

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
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CommunityPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 0]); // subtle parallax

  return (
    <div className="relative min-h-screen bg-superblack text-white overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      >
        <div className="relative w-screen h-screen">
          <Image
            src="/images/contour1.png"
            alt="Contour Background"
            fill
            className="object-cover"
            priority
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </motion.div>

      {/* Page Content */}
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
    </div>
  );
}
