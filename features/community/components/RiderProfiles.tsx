"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Rider {
  id: number;
  name: string;
  avatar: string;
  tagline: string;
  badges: string[];
  stats: {
    rides: number;
    tours: number;
    gear: number;
  };
}

const riders: Rider[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    tagline: "Shimla trail rider | Nothing But Now",
    badges: ["Shimla Rider", "Trailblazer"],
    stats: { rides: 24, tours: 3, gear: 5 },
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    tagline: "Ladakh explorer & adventure junkie",
    badges: ["Ladakh Explorer", "Radkaat Gear Owner"],
    stats: { rides: 40, tours: 5, gear: 8 },
  },
  {
    id: 3,
    name: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    tagline: "Biker. Explorer. Always moving.",
    badges: ["Community Mentor", "Spiti Rider"],
    stats: { rides: 60, tours: 7, gear: 10 },
  },
];

export default function RiderProfiles() {
  return (
    <section className="pb-16 h-[80vh] bg-superblack">
       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Top Riders
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {riders.map((rider, index) => (
            <RiderCard key={rider.id} rider={rider} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RiderCard({ rider, delay }: { rider: Rider; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-linear-to-br from-[#1a1f2a] to-[#111519] backdrop-blur-md border border-white/10 p-6 flex flex-col items-center text-white shadow-lg hover:shadow-2xl cursor-pointer"
    >
      {/* Avatar */}
      <div className="relative w-28 h-28">
        <div className="absolute -inset-1 bg-linear-to-tr from-rust to-sandstorm rounded-full blur-xl opacity-40 animate-pulse"></div>
        <Image quality={100}
          src={rider.avatar}
          alt={rider.name}
          width={112}
          height={112}
          className="rounded-full relative border-2 border-white/30"
        />
      </div>

      {/* Info */}
      <div className="mt-4 text-center space-y-1">
        <h3 className="text-xl md:text-2xl font-bold text-sandstorm drop-shadow-md">
          {rider.name}
        </h3>
        <p className="text-sm md:text-base text-gray-300">{rider.tagline}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {rider.badges.map((badge, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            className="text-xs bg-rust/90 text-white px-3 py-1 font-medium shadow-md"
          >
            {badge}
          </motion.span>
        ))}
      </div>

      {/* Stats with animated circular progress */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {Object.entries(rider.stats).map(([key, value], i) => {
          const radius = 24;
          const circumference = 2 * Math.PI * radius;
          return (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-1">
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    className="stroke-white/10 fill-none stroke-2"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    className="stroke-rust/90 fill-none stroke-2"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      inView ? circumference * (1 - value / 60) : circumference
                    }
                    initial={{ strokeDashoffset: circumference }}
                    animate={{
                      strokeDashoffset: circumference * (1 - value / 60),
                    }}
                    transition={{ duration: 1.2, delay: delay + i * 0.2 }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-semibold">
                  {value}
                </span>
              </div>
              <p className="text-xs text-gray-300 capitalize">{key}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
