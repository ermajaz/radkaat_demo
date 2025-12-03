"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
      "Conquer rugged trails with precision. Ultra-light aluminum frame, advanced hydraulic discs, and refined geometry.",
    features: ["Aluminum Frame", "Hydraulic Discs", "Suspension Fork", `29" Wheels`],
    rating: 5,
  },
  {
    id: 2,
    title: "Radkaat Trail Jacket",
    category: "Apparel",
    image:
      "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "Engineered for explorers. Ergonomic straps, weather-resistant fabric, and hydration compatibility.",
    features: ["Ergonomic", "Water Resistant", "Durable", "Hydration Slot"],
    rating: 5,
  },
];

export default function GearShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative h-screen w-full flex overflow-hidden bg-superblack">
      {/* Ambient Fog + Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,204,102,0.08),transparent)]" />

      {panels.map((panel) => {
        const isActive = active === panel.id;

        return (
          <motion.div
            key={panel.id}
            onHoverStart={() => setActive(panel.id)}
            onHoverEnd={() => setActive(null)}
            animate={{
              flex: isActive ? 2 : 1,
              filter: isActive ? "brightness(1.15)" : "brightness(0.75)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative flex flex-col justify-end cursor-pointer
              overflow-hidden group border-r border-white/5
            "
          >
            {/* Background Image */}
            <motion.div
              animate={{
                scale: isActive ? 1.12 : 1,
                rotate: isActive ? 0.5 : 0,
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover opacity-90"
              />
            </motion.div>

            {/* Vertical Golden Rim Light */}
            <motion.div
              animate={{ opacity: isActive ? 1 : 0 }}
              className="absolute top-0 bottom-0 left-0 w-1 bg-sandstorm/80 shadow-[0_0_20px_4px_rgba(255,204,102,0.7)]"
            />

            {/* Fixed Footer Info */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-6 z-10">
              <h2 className="text-2xl font-bold text-white">{panel.title}</h2>
              <p className="text-sm uppercase tracking-widest text-white/60">
                {panel.category}
              </p>
            </div>

            {/* HOVER EXPANDED DETAILS */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
                    absolute inset-0 z-20 
                    bg-linear-to-b from-black/20 via-black/35 to-black/40 
                    flex flex-col justify-center p-10
                  "
                >
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-extrabold text-sandstorm mb-4"
                  >
                    {panel.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-lg leading-relaxed mb-4 max-w-md"
                  >
                    {panel.description}
                  </motion.p>

                  {/* Features */}
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 space-y-1 mb-6"
                  >
                    {panel.features.map((f, i) => (
                      <li
                        key={i}
                        className="before:content-['▹'] before:text-sandstorm before:mr-2"
                      >
                        {f}
                      </li>
                    ))}
                  </motion.ul>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 }}
                    className="flex gap-1"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        className={
                          i < (panel.rating ?? 0)
                            ? "text-sandstorm fill-sandstorm"
                            : "text-white/20"
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
