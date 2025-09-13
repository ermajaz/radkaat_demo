"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bike {
  logo: string;
  name: string;
  image: string;
  features: { label: string; value: string }[];
  specs: Record<string, string>;
  colors: {
    gradient: string;
    cta: string; // e.g. "#c6b783"
  };
}

export default function Showcase({ bike }: { bike: Bike }) {
  // displayedBike ensures animation triggers only once per bike change
  const [displayedBike, setDisplayedBike] = useState(bike);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedBike(bike);
    }, 50); // small delay to prevent fast-scroll stacking
    return () => clearTimeout(timeout);
  }, [bike]);

  return (
    <div className="relative w-full h-full text-white flex flex-col">
      {/* Main Content */}
      <div className="relative flex flex-1 items-center justify-between px-6 md:px-14 -translate-y-10">
        {/* Left Side: Logo + Features */}
        <div className="w-[300px] flex flex-col gap-8 z-20">
          {/* Logo + Name Digital Meter */}
          <div className="relative h-[60px] w-full overflow-hidden -ml-4">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={displayedBike.name}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -120, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute flex items-center gap-1 top-0 left-0"
              >
                <Image
                  src={displayedBike.logo}
                  alt={`${displayedBike.name} Logo`}
                  width={70}
                  height={70}
                  className="object-contain w-16 h-16"
                />
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  {displayedBike.name}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Features List */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={displayedBike.name}
              initial={{ x: 0 }}
              animate={{ x: [0, -300, 0], opacity: [1, 0.5, 1] }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-lg space-y-6"
            >
              {displayedBike.features.map((f, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-gray-400">{f.label}</span>
                  <span className="font-semibold">{f.value}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Center: Bike Image + Big Background Name */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Bike Image */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={displayedBike.name}
              initial={{ scale: 0.75, x: 0, y: 0, opacity: 1 }}
              animate={{
                scale: [0.75, 0.3, 0.75],
                x: [0, -200, 0],
                y: [0, 150, 0],
                opacity: [1, 0.5, 1],
              }}
              exit={{ scale: 0.75, x: 0, y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative flex justify-center items-center z-10 flex-1 translate-y-10"
            >
              <Image
                src={displayedBike.image}
                alt={`${displayedBike.name} Bike`}
                width={800}
                height={800}
                className="w-[100%] h-auto drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Big Gradient Name */}
          <AnimatePresence initial={false} mode="wait">
            <motion.h1
              key={displayedBike.name}
              initial={{ y: 300, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute pl-30 flex items-center justify-start text-[18vw] font-extrabold !tracking-[50px] z-0 select-none bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${displayedBike.colors.gradient})`,
              }}
            >
              {displayedBike.name.toUpperCase()}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Right Side: Specs Card */}
        <div className="z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayedBike.name}
              initial={{ x: 0 }}
              animate={{ x: [0, 300, 0], opacity: [1, 0.5, 1] }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="z-20"
            >
              <div className="relative p-[1px] border border-white/50 rounded-xl shadow-lg w-[280px]">
                <div className="bg-gray-50/10 backdrop-blur-[10px] rounded-xl p-6 space-y-6">
                  {Object.entries(displayedBike.specs).map(([key, value], idx, arr) => (
                    <div
                      key={key}
                      className={`pb-4 ${
                        idx !== arr.length - 1 ? "border-b border-white/20" : ""
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-gray-300 uppercase mb-1 !tracking-[3px]">
                        {key}
                      </h3>
                      <p className="text-sm text-gray-300">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA full-width */}
      <div
        className="py-3 w-full flex justify-center items-center cursor-pointer"
        style={{ backgroundColor: displayedBike.colors.cta }}
      >
        <Button className="bg-transparent text-white text-lg cursor-pointer font-bold flex items-center gap-2 rounded-none shadow-none">
          EXPLORE THE MODEL <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
