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
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 5,
    badge: "Community Mentor",
  },
  {
    id: 6,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 6,
    badge: "Community Mentor",
  },
  {
    id: 7,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 7,
    badge: "Community Mentor",
  },
  {
    id: 8,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 8,
    badge: "Community Mentor",
  },
  {
    id: 9,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 9,
    badge: "Community Mentor",
  },
   {
    id: 10,
    name: "Rohit Verma",
    avatar: "/images/manali/rider-img.jpg",
    points: 1100,
    rank: 10,
    badge: "Community Mentor",
  },
];

export default function Leaderboard() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-navy to-black">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-sandstorm text-center"
        >
          Rider Leaderboard
        </motion.h2>

        {/* Top 3 Leaders */}
        <div className="grid sm:grid-cols-3 gap-6">
          {leaders.slice(0, 3).map((leader, i) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="absolute -top-4 bg-gradient-to-tr from-rust to-sandstorm w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-black font-bold text-lg">
                {leader.rank}
              </div>
              <Image
                src={leader.avatar}
                alt={leader.name}
                width={100}
                height={100}
                className="rounded-full border-2 border-sandstorm-1 mt-6"
              />
              <h3 className="text-xl font-bold text-sandstorm-1 mt-3">
                {leader.name}
              </h3>
              <p className="text-gray-300 text-sm">{leader.badge}</p>
              <div className="flex items-center gap-2 mt-3">
                <Trophy className="text-yellow-400" size={20} />
                <span className="font-semibold text-sandstorm-1">
                  {leader.points} pts
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining Leaders */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-900">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-800 text-sm">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Rider</th>
                <th className="py-3 px-4">Badge</th>
                <th className="py-3 px-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaders.slice(3).map((leader, index) => (
                <motion.tr
                  key={leader.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                >
                  <td className="py-3 px-4 font-bold text-sandstorm-1">
                    #{leader.rank}
                  </td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <Image
                      src={leader.avatar}
                      alt={leader.name}
                      width={36}
                      height={36}
                      className="rounded-full border border-sandstorm-1"
                    />
                    <span className="font-semibold text-white">{leader.name}</span>
                  </td>
                  <td className="py-3 px-4 text-sm">{leader.badge}</td>
                  <td className="py-3 px-4 font-semibold text-sandstorm-1">
                    {leader.points}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
