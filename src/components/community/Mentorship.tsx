// components/community/Mentorship.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// types/community.ts
export interface Mentor {
  id: string;
  name: string;
  location: string;
  expertise: string[];
  image: string;
  level: "Pro Rider" | "Trailblazer" | "Explorer";
  connected?: boolean; // if the current user has already connected
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
    name: "Vikram Das",
    location: "Delhi, NCR",
    expertise: ["City Rides", "Gear Reviews"],
    image: "/images/manali/rider-img.jpg",
    level: "Explorer",
    connected: true,
  },
];

interface MentorshipProps {
  data?: Mentor[];
}

export const Mentorship: React.FC<MentorshipProps> = ({ data }) => {
  const mentorList = data || mentors;

  const handleConnect = (id: string) => {
    console.log("Connect clicked for mentor id:", id);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-navy to-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Connect with Riders
      </h2>

      <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
        {mentorList.map((mentor, i) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden group bg-white/5 backdrop-blur-md border border-gray-700 hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Left: Image */}
            <div className="relative md:w-1/3 w-full h-64 md:h-auto">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover"
              />
              {/* Floating avatar */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 md:left-4 md:translate-x-0">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-rust shadow-lg"
                />
              </div>
              {/* Level Ribbon */}
              <div className="absolute top-3 right-3 bg-rust px-3 py-1 rounded-full text-white font-semibold text-xs shadow-md">
                {mentor.level}
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-bold text-sandstorm-1">{mentor.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{mentor.location}</p>

                {/* Expertise pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {mentor.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-rust to-sandstorm text-black text-xs rounded-full font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect Button */}
              <Button
                variant={mentor.connected ? "outline" : "default"}
                className={`mt-6 w-full py-2 font-semibold text-black ${
                  mentor.connected
                    ? "border-rust text-rust hover:bg-rust/20"
                    : "bg-gradient-to-r from-rust to-sandstorm hover:from-sandstorm-1 hover:to-rust"
                }`}
                onClick={() => handleConnect(mentor.id)}
              >
                {mentor.connected ? "Connected" : "Connect"}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
