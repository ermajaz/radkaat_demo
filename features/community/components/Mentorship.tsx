"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// types/community.ts
export interface Mentor {
  id: string;
  name: string;
  location: string;
  expertise: string[];
  image: string;
  level: "Pro Rider" | "Trailblazer" | "Explorer";
  connected?: boolean;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Rohit Singh",
    location: "Shimla, HP",
    expertise: ["Shimla Rides", "Gear Setup"],
    image: "/images/manali/rider-img.jpg",
    level: "Pro Rider",
    connected: false,
  },
  {
    id: "2",
    name: "Anjali Mehra",
    location: "Ladakh",
    expertise: ["Ladakh Tours", "Trail Safety"],
    image: "/images/manali/rider-img.jpg",
    level: "Trailblazer",
    connected: true,
  },
  {
    id: "3",
    name: "Vikram Das",
    location: "Delhi, NCR",
    expertise: ["City Rides", "Gear Reviews"],
    image: "/images/manali/rider-img.jpg",
    level: "Explorer",
    connected: false,
  },
  {
    id: "4",
    name: "Nisha Verma",
    location: "Manali, HP",
    expertise: ["Spiti Rides", "Long-Distance Touring"],
    image: "/images/manali/rider-img.jpg",
    level: "Pro Rider",
    connected: true,
  },
  {
    id: "5",
    name: "Vikram Das",
    location: "Delhi, NCR",
    expertise: ["City Rides", "Gear Reviews"],
    image: "/images/manali/rider-img.jpg",
    level: "Explorer",
    connected: false,
  },
  {
    id: "6",
    name: "Nisha Verma",
    location: "Manali, HP",
    expertise: ["Spiti Rides", "Long-Distance Touring"],
    image: "/images/manali/rider-img.jpg",
    level: "Pro Rider",
    connected: true,
  },
];

export const Mentorship: React.FC<{ data?: Mentor[] }> = ({ data }) => {
  const [connectedIds, setConnectedIds] = useState<string[]>(
    mentors.filter((m) => m.connected).map((m) => m.id)
  );

  const mentorList = data || mentors;

  const handleConnect = (id: string) => {
    setConnectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section
      className="py-20 px-4 md:px-12 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 10% 20%, rgba(255,180,100,0.05), transparent 60%), linear-gradient(180deg, #0c0d12 0%, #000206 100%)`,
      }}
    >
      {/* Background glow & grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(circle_at_50%_50%,#ffae00_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute -top-20 right-10 w-[400px] h-[400px] bg-rust/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sandstorm/20 blur-[120px] rounded-full" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-sandstorm tracking-wide"
      >
        Connect with Riders
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {mentorList.map((mentor, i) => {
          const connected = connectedIds.includes(mentor.id);

          return (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden border border-white/10 bg-white/3 backdrop-blur-2xl p-6 flex flex-col justify-between transition-all duration-500"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-linear-to-br from-rust/10 via-transparent to-sandstorm/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

              {/* Header with image & name */}
              <div className="flex flex-col items-center text-center">
                <div className="relative space-y-5">
                  <div className="absolute inset-0 bg-linear-to-tr from-rust to-sandstorm rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-white/20 relative z-10"
                  />
                  {/* Level Ribbon */}
                  <span
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap font-semibold px-2 py-0.5 text-superblack shadow-md ${
                      mentor.level === "Pro Rider"
                        ? "bg-linear-to-r from-yellow-400 to-orange-400"
                        : mentor.level === "Trailblazer"
                        ? "bg-linear-to-r from-rust to-sandstorm"
                        : "bg-linear-to-r from-teal-400 to-lime-400"
                    }`}
                  >
                    {mentor.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mt-5 text-sandstorm">
                  {mentor.name}
                </h3>
                <p className="text-sm text-white/60 mt-1">{mentor.location}</p>
              </div>

              {/* Expertise Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {mentor.expertise.map((exp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/10 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* Connect Button */}
              <div className="mt-6 cursor-pointer">
                <Button
                  variant="default"
                  className={`w-full py-2 font-semibold rounded-none transition-all duration-300 ${
                    connected
                      ? "bg-linear-to-r from-transparent to-transparent border border-rust text-rust hover:bg-rust/20"
                      : "bg-linear-to-r from-rust to-sandstorm text-black hover:scale-[1.02]"
                  }`}
                  onClick={() => handleConnect(mentor.id)}
                >
                  {connected ? "Connected ✓" : "Connect"}
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
