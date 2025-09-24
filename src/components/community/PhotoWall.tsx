"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface MediaItem {
  id: number;
  type: "photo" | "video";
  src: string;
  alt: string;
  rider: string;
  description: string;
}

const media: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    src: "/images/manali.jpg",
    alt: "Shimla ride trail",
    rider: "Aarav Mehta",
    description: "Exploring Shimla's scenic trails with friends.",
  },
  {
    id: 2,
    type: "photo",
    src: "/images/sipping.jpg",
    alt: "Ladakh ride",
    rider: "Priya Sharma",
    description: "High-altitude adventure through Leh and Khardung La.",
  },
  {
    id: 3,
    type: "photo",
    src: "/images/parallex.jpeg",
    alt: "Spiti Valley adventure",
    rider: "Kabir Singh",
    description: "Riding the cold deserts and monasteries of Spiti.",
  },
  {
    id: 4,
    type: "photo",
    src: "/images/kali.png",
    alt: "Camping night",
    rider: "Community Member",
    description: "Sharing stories around the campfire under stars.",
  },
  {
    id: 5,
    type: "photo",
    src: "/images/parallex.jpeg",
    alt: "Spiti Valley adventure",
    rider: "Kabir Singh",
    description: "Riding the cold deserts and monasteries of Spiti.",
  },
  {
    id: 6,
    type: "photo",
    src: "/images/kali.png",
    alt: "Camping night",
    rider: "Community Member",
    description: "Sharing stories around the campfire under stars.",
  },
];

export default function PhotoWall() {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-navy to-black">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-sandstorm text-center"
        >
          Community Photo & Video Wall
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-xl perspective"
              onClick={() => setSelected(item)}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
                className="overflow-hidden rounded-xl shadow-lg relative"
              >
                {item.type === "photo" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-64 bg-black">
                    <video
                      src={item.src}
                      className="object-cover w-full h-full"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <Play size={50} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                )}

                {/* Rider Info Overlay */}
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-b-xl flex justify-between items-center"
                >
                  <span>📍 {item.alt}</span>
                  <span className="font-semibold">{item.rider}</span>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-rust/20 to-transparent opacity-0 group-hover:opacity-30 rounded-xl transition-opacity pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full mx-4 md:mx-0 rounded-2xl overflow-hidden">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition z-10"
              >
                <X size={24} />
              </button>

              {selected.type === "photo" ? (
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  width={800}
                  height={600}
                  className="object-contain w-full max-h-[80vh] bg-black"
                />
              ) : (
                <video
                  src={selected.src}
                  className="object-contain w-full max-h-[80vh] bg-black"
                  controls
                  autoPlay
                />
              )}

              <div className="bg-black/70 text-white p-4">
                <h3 className="text-xl font-semibold">{selected.alt}</h3>
                <p className="text-sm mt-1">Rider: {selected.rider}</p>
                <p className="text-sm mt-1">{selected.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
