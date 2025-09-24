"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

interface RideLog {
  id: number;
  rider: string;
  avatar: string;
  location: string;
  story: string;
  image: string;
  likes: number;
  comments: number;
}

const logs: RideLog[] = [
  {
    id: 1,
    rider: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    location: "Shimla Hills",
    story: "24km of pure trail madness! Nothing but mud, mist, and magic. 🏔️",
    image: "/images/akshit.jpg",
    likes: 120,
    comments: 18,
  },
  {
    id: 2,
    rider: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    location: "Ladakh",
    story:
      "Crossed Khardung La today 🚴‍♀️❄️ — the altitude tests you, but the view makes it worth it.",
    image: "/images/akshit.jpg",
    likes: 200,
    comments: 45,
  },
  {
    id: 3,
    rider: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    location: "Spiti Valley",
    story:
      "Cold winds, steep climbs, and the kind of silence that stays with you forever.",
    image: "/images/akshit.jpg",
    likes: 98,
    comments: 12,
  },
];

export default function RideLogs() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Riders Races
      </h2>
      <div className="max-w-6xl mx-auto space-y-10">
        {logs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-tr from-gray-900/80 to-gray-900/50 backdrop-blur-md border border-gray-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-transform"
          >
            {/* Rider Info */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800">
              <div className="relative w-10 h-10">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-rust to-sandstorm blur opacity-40 animate-pulse"></div>
                <Image
                  src={log.avatar}
                  alt={log.rider}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-gray-300/40 relative"
                />
              </div>
              <div>
                <p className="font-semibold text-sandstorm-1">{log.rider}</p>
                <p className="text-xs text-gray-400">{log.location}</p>
              </div>
            </div>

            {/* Ride Image */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden group">
              <Image
                src={log.image}
                alt={log.story}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Story */}
            <div className="p-4 space-y-3">
              <p className="text-gray-200 text-sm md:text-base">{log.story}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center gap-1 hover:text-rust transition"
                >
                  <Heart size={16} /> {log.likes}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center gap-1 hover:text-sandstorm-1 transition"
                >
                  <MessageCircle size={16} /> {log.comments}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
