"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

interface Panel {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  rating?: number;
}

const panels: Panel[] = [
  {
    id: 1,
    title: "Radkaat Mountain Bike",
    category: "Bicycle",
    image: "https://i.pinimg.com/736x/47/cc/5c/47cc5ceb27b4322f6c6dc1e422bca032.jpg",
    description:
      "Conquer rugged trails with precision. Ultra-light aluminum frame, advanced hydraulic discs, and next-gen suspension geometry.",
    features: ["Aluminum Frame", "Hydraulic Disc Brakes", "Suspension Fork", '29" Wheels'],
    rating: 5,
  },
  {
    id: 2,
    title: "Radkaat Trail Jacket",
    category: "Apparel",
    image: "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Ride through any storm. Breathable, waterproof, and ultralight — engineered for endurance and comfort.",
    features: ["Waterproof", "Lightweight", "Windproof", "Breathable"],
    rating: 4,
  },
  {
    id: 3,
    title: "All-Terrain Backpack",
    category: "Accessories",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220606/pngtree-closeup-of-chain-and-rear-bicycle-cassette-with-wide-range-of-speeds-photo-image_47027444.jpg",
    description:
      "Built for explorers. Ergonomic straps, water-resistant fabric, and hydration compatibility — go the distance in style.",
    features: ["Spacious", "Ergonomic Straps", "Durable", "Hydration Compatible"],
    rating: 5,
  },
];

export default function GearShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full h-screen flex overflow-hidden bg-superblack relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none z-0" />

      {panels.map((panel) => {
        const isActive = hovered === panel.id;

        return (
          <motion.div
            key={panel.id}
            onHoverStart={() => setHovered(panel.id)}
            onHoverEnd={() => setHovered(null)}
            animate={{
              flex: isActive ? 1.8 : 1,
              filter: isActive ? "brightness(1.1)" : "brightness(0.8)",
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative shrink-0 flex flex-col justify-end overflow-hidden cursor-pointer group transition-all duration-700"
          >
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 transition-transform duration-700"
              animate={{
                scale: isActive ? 1.1 : 1,
                rotate: isActive ? 0.5 : 0,
              }}
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                quality={100}
                className="object-cover object-center opacity-90"
              />
            </motion.div>

            {/* Light sweep effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.3s] ease-in-out"
            />

            {/* Always visible footer overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 z-10">
              <h2 className="text-2xl font-bold text-white drop-shadow-md">
                {panel.title}
              </h2>
              <p className="text-sm uppercase tracking-widest text-white/70">
                {panel.category}
              </p>
            </div>

            {/* Hover Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-linear-to-b from-black/70 via-black/80 to-black/70 flex flex-col justify-center items-start p-10 z-20"
                >
                  <motion.h3
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-extrabold mb-4 text-army"
                  >
                    {panel.title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 mb-4 max-w-md leading-relaxed"
                  >
                    {panel.description}
                  </motion.p>

                  <motion.ul
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 mb-4 text-sm space-y-1"
                  >
                    {panel.features.map((feature, i) => (
                      <li
                        key={i}
                        className="before:content-['•'] before:mr-2 before:text-army"
                      >
                        {feature}
                      </li>
                    ))}
                  </motion.ul>

                  {/* Ratings */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-1"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < (panel.rating ?? 0)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-500"
                        }
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </section>
  );
}
