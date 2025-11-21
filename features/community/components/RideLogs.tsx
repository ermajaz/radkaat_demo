"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface RideLog {
  id: number;
  rider: string;
  avatar: string;
  location: string;
  story: string;
  image: string;
  likes: number;
  comments: number;
}

const logs: RideLog[] = [
  {
    id: 1,
    rider: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    location: "Shimla Hills",
    story: "24km of pure trail madness! Nothing but mud, mist, and magic. 🏔️",
    image: "/images/akshit.jpg",
    likes: 120,
    comments: 18,
  },
  {
    id: 2,
    rider: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    location: "Ladakh",
    story:
      "Crossed Khardung La today 🚴‍♀️❄️ — the altitude tests you, but the view makes it worth it.",
    image: "/images/akshit.jpg",
    likes: 200,
    comments: 45,
  },
  {
    id: 3,
    rider: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    location: "Spiti Valley",
    story:
      "Cold winds, steep climbs, and the kind of silence that stays with you forever.",
    image: "/images/akshit.jpg",
    likes: 98,
    comments: 12,
  },
];

export default function RideLogsShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % logs.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + logs.length) % logs.length);
  };

  const variants: Variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? "100%" : "-100%",
      opacity: 1,
      scale: 0.95,
    }),
    center: (dir: "left" | "right") => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    }),
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? "-100%" : "100%",
      opacity: 1,
      scale: 0.95,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={logs[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image quality={100}
            src={logs[index].image}
            alt={logs[index].story}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full justify-between text-white p-8 md:p-16">
        {/* Rider Info */}
        <div className="flex items-center gap-3">
          <Image quality={100}
            src={logs[index].avatar}
            alt={logs[index].rider}
            width={50}
            height={50}
            className="rounded-full border-2 border-white/30"
          />
          <div>
            <p className="font-bold text-lg">{logs[index].rider}</p>
            <p className="text-sm text-gray-300">{logs[index].location}</p>
          </div>
        </div>

        {/* Story */}
        <motion.p
          key={logs[index].story}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 
             text-center text-stone text-lg font-medium 
             max-w-3xl drop-shadow-lg px-4"
        >
          {logs[index].story}
        </motion.p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Likes / Comments */}
          <div className="flex gap-6 text-lg">
            <button className="flex items-center gap-2 hover:text-rust transition">
              <Heart size={22} /> {logs[index].likes}
            </button>
            <button className="flex items-center gap-2 hover:text-sandstorm transition">
              <MessageCircle size={22} /> {logs[index].comments}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            {/* Left Button */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto cursor-pointer p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </motion.button>

            {/* Right Button */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto p-2.5 cursor-pointer rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {logs.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  width: i === index ? 30 : 12,
                  backgroundColor:
                    i === index ? "#c6b783" : "rgba(255,255,255,0.4)",
                }}
                transition={{ duration: 0.4 }}
                className="h-3 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
