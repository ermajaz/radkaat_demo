// components/community/Rewards.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export interface Contributor {
  id: string;
  name: string;
  image: string;
  points: number;
  badges?: string[];
  rank?: number;
}

export const contributors: Contributor[] = [
  {
    id: "1",
    name: "Rohit Singh",
    image: "/images/manali/rider-img.jpg",
    points: 1240,
    badges: ["Shimla Explorer", "Gear Guru"],
    rank: 1,
  },
  {
    id: "2",
    name: "Anjali Mehra",
    image: "/images/manali/rider-img.jpg",
    points: 1120,
    badges: ["Ladakh Trailblazer"],
    rank: 2,
  },
  {
    id: "3",
    name: "Vikram Das",
    image: "/images/manali/rider-img.jpg",
    points: 980,
    badges: ["500km Rider"],
    rank: 3,
  },
];

interface RewardsProps {
  data?: Contributor[];
}

export const Rewards: React.FC<RewardsProps> = ({ data }) => {
  const contributorList = data || contributors;
  const currentUser = contributorList[0]; // Example: logged-in user

  return (
    <section
      className="py-16 px-4 md:px-12 text-white"
      style={{
        background: `linear-gradient(180deg, #001644 0%, #000206 100%)`,
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Radkaat Rewards
      </h2>

      {/* Current User Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-rust to-sandstorm backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:max-w-6xl mx-auto mb-12 shadow-2xl hover:scale-[1.03] transition-transform overflow-hidden"
      >
        {/* Decorative Glow Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rust rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sandstorm/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black drop-shadow-lg">
          Your Contribution
        </h3>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/80 shadow-lg">
            <Image
              src={currentUser.image}
              alt={currentUser.name}
              fill
              className="object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <p className="text-xl font-semibold text-black drop-shadow-sm">
              {currentUser.name}
            </p>
            <p className="text-black/70 mt-1">{currentUser.points} Points</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-yellow-400/30 text-yellow-500 rounded-full text-xs font-semibold shadow-sm">
                Bronze Rider
              </span>
              <span className="px-3 py-1 bg-cyan-400/30 text-cyan-500 rounded-full text-xs font-semibold shadow-sm">
                Gear Guru
              </span>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="mt-6">
          <div className="w-full h-4 rounded-full bg-black/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentUser.points % 1000) / 10}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-4 bg-gradient-to-r from-red to-sandstorm rounded-full shadow-inner"
            />
          </div>
          <p className="mt-2 text-xs text-black">
            {currentUser.points % 1000} / 1000 Points to next reward
          </p>
        </div>

        {/* Redeem Button */}
        <Button className="mt-6 w-full bg-black/70 hover:bg-black/90 text-sandstorm font-bold shadow-lg">
          Redeem Points
        </Button>
      </motion.div>

      {/* Leaderboard */}
      <h3 className="text-2xl font-bold mb-6  text-center text-sandstorm">
        Top Contributors
      </h3>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {contributorList.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-md border border-gray-700 rounded-3xl p-6 flex flex-col items-center hover:scale-[1.03] shadow-xl transition-transform"
          >
            {/* Rank Ribbon */}
            {c.rank && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rust text-black font-bold text-sm px-3 py-1 rounded-full shadow-md">
                #{c.rank}
              </div>
            )}

            <Image
              src={c.image}
              alt={c.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-rust mb-4 shadow-lg"
            />
            <p className="font-semibold text-sandstorm-1">{c.name}</p>
            <p className="text-gray-300 mt-1">{c.points} Points</p>

            {/* Badges */}
            {c.badges && (
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {c.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-rust to-sandstorm text-black text-xs font-medium rounded-full shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Hover glow effect */}
            <motion.div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-rust/40 to-sandstorm/40 opacity-0 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
