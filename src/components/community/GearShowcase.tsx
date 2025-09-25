"use client";

import { motion } from "framer-motion";
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
      "Experience off-road like never before! Lightweight aluminum frame, hydraulic disc brakes, and superior suspension for rugged trails.",
    features: ["Aluminum Frame", "Hydraulic Disc Brakes", "Suspension Fork", "29\" Wheels"],
    rating: 5,
  },
  {
    id: 2,
    title: "Radkaat Trail Jacket",
    category: "Apparel",
    image: "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Stay dry and comfortable in any weather. Breathable, waterproof, and lightweight. Perfect for all your trail adventures.",
    features: ["Waterproof", "Lightweight", "Windproof", "Breathable"],
    rating: 4,
  },
  {
    id: 3,
    title: "All-Terrain Backpack",
    category: "Accessories",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20220606/pngtree-closeup-of-chain-and-rear-bicycle-cassette-with-wide-range-of-speeds-photo-image_47027444.jpg",
    description:
      "Carry everything you need with ease. Spacious compartments, ergonomic straps, and durable material for all trips.",
    features: ["Spacious Compartments", "Ergonomic Straps", "Durable Material", "Hydration Compatible"],
    rating: 5,
  },
];

export default function ThreePanelShowcase() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  return (
    <section className="w-screen h-screen flex overflow-hidden">
      {panels.map((panel) => (
        <motion.div
          key={panel.id}
          className="relative w-1/3 h-full cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredPanel(panel.id)}
          onHoverEnd={() => setHoveredPanel(null)}
        >
          <Image
            src={panel.image}
            alt={panel.title}
            fill
            className="object-cover object-center bg-black transition-transform duration-500"
          />

          {/* Always visible overlay (title + category) */}
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h2 className="text-2xl font-bold">{panel.title}</h2>
            <p className="text-sm uppercase tracking-wide">{panel.category}</p>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredPanel === panel.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 flex flex-col justify-center items-start p-8 text-white z-20"
          >
            <h2 className="text-3xl font-extrabold mb-4">{panel.title}</h2>
            <p className="mb-4">{panel.description}</p>
            <ul className="list-disc list-inside mb-4">
              {panel.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {panel.rating && (
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < panel.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Gradient for aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      ))}
    </section>
  );
}
