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
    <section className="pb-28 pt-10 bg-superblack">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-sandstorm tracking-wide">
        Top Riders
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5">
        {riders.map((rider, index) => (
          <RiderCard key={rider.id} rider={rider} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
}

function RiderCard({ rider, delay }: { rider: Rider; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Smooth reveal animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay,
            ease: "easeOut",
          },
        },
      }}
      className="
        relative p-6
        bg-[#121212]/95
        border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.45)]
        backdrop-blur-xl
        cursor-pointer overflow-hidden
        transition-all duration-300
        hover:border-sandstorm/40
        hover:shadow-[0_0_35px_rgba(255,204,102,0.15)]
      "
    >
      {/* Avatar */}
      <div className="relative w-28 h-28 mx-auto">
        <Image
          src={rider.avatar}
          alt={rider.name}
          width={112}
          height={112}
          className="rounded-full border-2 border-white/20 object-cover"
        />
      </div>

      {/* Name + Tagline */}
      <div className="text-center mt-5 space-y-1">
        <h3 className="text-2xl font-bold text-sandstorm">{rider.name}</h3>
        <p className="text-gray-400 text-sm">{rider.tagline}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {rider.badges.map((badge, i) => (
          <span
            key={i}
            className="
              text-xs px-3 py-1 rounded-full 
              bg-white/5 border border-white/10 
              text-white/80
            "
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {Object.entries(rider.stats).map(([key, value], i) => {
          const radius = 24;
          const circumference = 2 * Math.PI * radius;

          return (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    className="stroke-white/10 fill-none stroke-[4px]"
                  />
                </svg>

                <svg className="absolute top-0 left-0 w-full h-full">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    className="stroke-sandstorm fill-none stroke-[4px]"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={
                      isInView
                        ? {
                            strokeDashoffset:
                              circumference * (1 - value / 60),
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.6,
                      delay: delay + i * 0.2,
                      ease: "easeInOut",
                    }}
                    strokeLinecap="round"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
                  {value}
                </span>
              </div>
              <p className="text-xs text-gray-400 capitalize">{key}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
