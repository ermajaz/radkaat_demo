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
  { id: 1, type: "photo", src: "/images/manali-img.jpg", alt: "Shimla ride trail", rider: "Aarav Mehta", description: "Exploring Shimla's scenic trails with friends." },
  { id: 2, type: "photo", src: "/images/sipping.jpg", alt: "Ladakh ride", rider: "Priya Sharma", description: "High-altitude adventure through Leh and Khardung La." },
  { id: 3, type: "photo", src: "/images/parallex.jpeg", alt: "Spiti Valley adventure", rider: "Kabir Singh", description: "Riding the cold deserts and monasteries of Spiti." },
  { id: 4, type: "photo", src: "/images/kali-img.jpg", alt: "Camping night", rider: "Community Member", description: "Sharing stories around the campfire under stars." },
  { id: 5, type: "photo", src: "/images/parallex.jpeg", alt: "Spiti Valley adventure", rider: "Kabir Singh", description: "Riding the cold deserts and monasteries of Spiti." },
  { id: 6, type: "photo", src: "/images/kali-img.jpg", alt: "Camping night", rider: "Community Member", description: "Sharing stories around the campfire under stars." },
];

export default function PhotoWall() {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <section
      className="py-16 px-6"
      style={{
        background: `linear-gradient(180deg, #001644 0%, #000206 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-sandstorm text-center"
        >
          Community Photo & Video Wall
        </motion.h2>

        {/* Proper Benton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {media.map((item, index) => {
            // Randomly assign a row span for Benton effect
            const rowSpan = index % 3 === 0 ? 2 : 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer overflow-hidden shadow-lg row-span-${rowSpan}`}
                onClick={() => setSelected(item)}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
                  className="w-full h-full relative"
                >
                  {item.type === "photo" ? (
                    <Image quality={100}
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-superblack">
                      <video
                        src={item.src}
                        className="object-cover w-full h-full"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                      <div className="absolute inset-0 bg-superblack/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play size={50} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                  )}

                  {/* Rider Info Overlay */}
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-2 flex justify-between items-center"
                  >
                    <span>📍 {item.alt}</span>
                    <span className="font-semibold">{item.rider}</span>
                  </motion.div>

                  <div className="absolute inset-0 bg-linear-to-t from-rust/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-superblack/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full mx-4 md:mx-0 overflow-hidden">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white bg-superblack/50 p-1 cursor-pointer hover:bg-superblack/80 transition z-10"
              >
                <X size={24} />
              </button>

              {selected.type === "photo" ? (
                <Image quality={100}
                  src={selected.src}
                  alt={selected.alt}
                  width={800}
                  height={600}
                  className="object-contain w-full max-h-[80vh] bg-superblack"
                />
              ) : (
                <video
                  src={selected.src}
                  className="object-contain w-full max-h-[80vh] bg-superblack"
                  controls
                  autoPlay
                />
              )}

              <div className="bg-superblack/70 text-white p-4">
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
