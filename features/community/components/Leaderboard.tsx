"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

interface Leader {
  id: number;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  badge: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1450,
    rank: 1,
    badge: "Ladakh Explorer",
  },
  {
    id: 2,
    name: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    points: 1320,
    rank: 2,
    badge: "Spiti Rider",
  },
  {
    id: 3,
    name: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    points: 1280,
    rank: 3,
    badge: "Shimla Trailblazer",
  },
  {
    id: 4,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 4,
    badge: "Community Mentor",
  },
  {
    id: 5,
    name: "Ravi Kumar",
    avatar: "/images/manali/rider-img.jpg",
    points: 1040,
    rank: 5,
    badge: "Desert Rider",
  },
  {
    id: 6,
    name: "Ishita Rao",
    avatar: "/images/manali/rider-img.jpg",
    points: 990,
    rank: 6,
    badge: "Trail Scout",
  },
  {
    id: 7,
    name: "Amit Joshi",
    avatar: "/images/manali/rider-img.jpg",
    points: 940,
    rank: 7,
    badge: "Night Rider",
  },
  {
    id: 8,
    name: "Sanya Kapoor",
    avatar: "/images/manali/rider-img.jpg",
    points: 920,
    rank: 8,
    badge: "Wind Seeker",
  },
  {
    id: 9,
    name: "Raj Malhotra",
    avatar: "/images/manali/rider-img.jpg",
    points: 910,
    rank: 9,
    badge: "Hill Tamer",
  },
  {
    id: 10,
    name: "Mira Desai",
    avatar: "/images/manali/rider-img.jpg",
    points: 900,
    rank: 10,
    badge: "Trail Explorer",
  },
];

export default function Leaderboard() {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 via-amber-300 to-yellow-200";
      case 2:
        return "from-gray-300 via-gray-400 to-gray-200";
      case 3:
        return "from-amber-700 via-orange-500 to-amber-400";
      default:
        return "from-army/30 via-transparent to-transparent";
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-superblack">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(162,255,162,0.07),transparent_70%)]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-army mb-16 relative"
      >
        Rider Leaderboard
        <motion.div
          className="mx-auto mt-3 h-[3px] w-24 bg-linear-to-r from-army via-sandstorm to-rust rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        />
      </motion.h2>

      {/* 🏆 Top 3 Leaders */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 mb-16">
        {leaders.slice(0, 3).map((leader, i) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="relative pt-10 pb-8 md:p-8 text-center overflow-visible backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.05)]"
          >
            {/* ✨ Gradient aura */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${getRankColor(
                leader.rank
              )} opacity-10 blur-3xl`}
            />

            {/* 🏆 Rank badge (shifted slightly inside to avoid cutting) */}
            <motion.div
              className={`absolute -top-7 left-1/2 -translate-x-1/2 bg-linear-to-br ${getRankColor(
                leader.rank
              )} w-12 h-12 flex items-center justify-center text-black font-extrabold text-lg shadow-xl border border-white/10`}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 5, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {leader.rank}
            </motion.div>

            {/* 🧊 Avatar */}
            <div className="relative flex justify-center items-center mt-12">
              {/* Pulsing aura ring */}
              <motion.div
                className="absolute w-[120px] h-[120px] rounded-full bg-linear-to-tr from-army via-sandstorm to-transparent blur-xl opacity-40"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex justify-center items-center">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-white/20 object-cover"
                />
              </div>
            </div>

            {/* 🏍️ Rider Info */}
            <h3 className="text-xl font-semibold text-sandstorm mt-5">
              {leader.name}
            </h3>
            <p className="text-white/60 text-sm">{leader.badge}</p>

            {/* 🏅 Points */}
            <div className="flex justify-center items-center gap-2 mt-5 text-lg font-semibold text-army">
              <Trophy
                size={20}
                className={`${
                  leader.rank === 1
                    ? "text-yellow-400"
                    : leader.rank === 2
                    ? "text-gray-300"
                    : "text-yellow-500"
                }`}
              />
              {leader.points} pts
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🏍️ Remaining Leaders Table */}
      <div className="max-w-6xl mx-auto overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
        <table className="w-full text-left text-white/80">
          <thead className="bg-white/5 text-sm uppercase tracking-wide text-white/60">
            <tr>
              <th className="py-4 px-5">Rank</th>
              <th className="py-4 px-5">Rider</th>
              <th className="py-4 px-5">Badge</th>
              <th className="py-4 px-5 text-right">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaders.slice(3).map((leader, index) => (
              <motion.tr
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="border-t border-white/10 transition-all"
              >
                <td className="py-3 px-5 font-semibold text-sandstorm">
                  #{leader.rank}
                </td>
                <td className="py-3 px-5 flex items-center gap-3">
                  <Image
                    src={leader.avatar}
                    alt={leader.name}
                    width={36}
                    height={36}
                    className="rounded-full border border-white/20"
                  />
                  <span className="font-medium text-white">{leader.name}</span>
                </td>
                <td className="py-3 px-5 text-sm text-white/70">
                  {leader.badge}
                </td>
                <td className="py-3 px-5 text-right font-semibold text-army">
                  {leader.points}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
