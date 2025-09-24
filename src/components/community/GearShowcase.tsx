"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface Gear {
  id: number;
  name: string;
  image: string;
  owner: string;
  avatar: string;
  review: string;
  rating: number;
}

const gears: Gear[] = [
  {
    id: 1,
    name: "Radkaat Trail Jacket",
    image: "/images/apparel.png",
    owner: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    review:
      "Took it on a Shimla ride – light, tough, and kept me dry through the rain!",
    rating: 5,
  },
  {
    id: 2,
    name: "Radkaat Expedition Boots",
    image: "/images/accessories.jpg",
    owner: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    review: "The grip was insane during my Ladakh climb. Zero slips. 💯",
    rating: 4,
  },
  {
    id: 3,
    name: "Radkaat All-Terrain Backpack",
    image: "/images/accessories.jpg",
    owner: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    review:
      "Perfect size for Spiti Valley – carried all my essentials without strain.",
    rating: 5,
  },
];

export default function GearShowcase() {
  return (
    <section className="pb-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Our Gear of Choice
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gears.map((gear, index) => (
            <motion.div
              key={gear.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-tr from-gray-900/80 to-gray-900/50 backdrop-blur-md border border-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              {/* Gear Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={gear.image}
                  alt={gear.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-t-3xl"></div>
              </div>

              {/* Gear Details */}
              <div className="p-5 flex flex-col flex-grow space-y-3 relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-sandstorm drop-shadow-md">
                  {gear.name}
                </h3>

                {/* Owner Info */}
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-rust to-sandstorm blur opacity-40 animate-pulse"></div>
                    <Image
                      src={gear.avatar}
                      alt={gear.owner}
                      width={32}
                      height={32}
                      className="rounded-full border border-gray-300/40 relative"
                    />
                  </div>
                  <p className="text-sm text-gray-300">By {gear.owner}</p>
                </div>

                {/* Review */}
                <p className="text-gray-200 text-sm md:text-base flex-grow">
                  “{gear.review}”
                </p>

                {/* Rating */}
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star
                        size={16}
                        className={
                          i < gear.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-rust/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
