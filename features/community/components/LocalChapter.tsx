// components/community/LocalChapters.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// types/community.ts
export interface Chapter {
  id: string;
  name: string;
  location: string;
  membersCount: number;
  image: string; // thumbnail or cover image
  description?: string;
  joined?: boolean; // if the current user has joined
}

export const chapters: Chapter[] = [
  {
    id: "1",
    name: "Shimla Riders",
    location: "Shimla, HP",
    membersCount: 120,
    image: "/images/manali.jpg",
    description: "Join local riders exploring Shimla trails!",
    joined: false,
  },
  {
    id: "2",
    name: "Ladakh Explorers",
    location: "Ladakh",
    membersCount: 95,
    image: "/images/parallex.jpeg",
    description: "Conquer the heights of Ladakh with fellow riders.",
    joined: true,
  },
  {
    id: "3",
    name: "Delhi Riders Club",
    location: "Delhi, NCR",
    membersCount: 200,
    image: "/images/sipping.jpg",
    description: "City riders meetup & events.",
    joined: false,
  },
];

interface LocalChaptersProps {
  data?: Chapter[];
}

export const LocalChapters: React.FC<LocalChaptersProps> = ({ data }) => {
  const chapterList = data || chapters;

  const handleJoinLeave = (id: string) => {
    console.log("Join/Leave clicked for chapter id:", id);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-linear-to-b from-black to-navy">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Local Chapters
      </h2>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {chapterList.map((chapter, i) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white/10 backdrop-blur-md border border-stone/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-56 w-full">
              <Image quality={100}
                src={chapter.image}
                alt={chapter.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              {chapter.joined && (
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-rust text-black font-semibold text-xs shadow-md">
                  Joined
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-sandstorm">
                  {chapter.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{chapter.location}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {chapter.membersCount} Members
                </p>
                {chapter.description && (
                  <p className="text-sm mt-2 text-gray-200">
                    {chapter.description}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  variant={chapter.joined ? "outline" : "default"}
                  className={`mt-4 w-full transition-colors duration-300 ${
                    chapter.joined
                      ? "border-rust text-rust hover:bg-rust/20"
                      : "bg-rust text-black hover:bg-rust/90"
                  }`}
                  onClick={() => handleJoinLeave(chapter.id)}
                >
                  {chapter.joined ? "Leave Chapter" : "Join Chapter"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
