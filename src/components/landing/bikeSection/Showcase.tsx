"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

export default function Showcase({
  bike,
  bikes,
}: {
  bike: Bike;
  bikes: Bike[];
}) {
  // displayedBike ensures animation triggers only once per bike change
  const [displayedBike, setDisplayedBike] = useState(bike);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedBike(bike);
    }, 50); // small delay to prevent fast-scroll stacking
    return () => clearTimeout(timeout);
  }, [bike]);

  return (
    <div className="relative w-full h-[calc(100vh-40px)] text-white flex flex-col">
      {/* Main Content */}
      <div className="relative flex flex-1 items-center justify-between px-6 md:px-14 -translate-y-10 overflow-y-auto overflow-x-hidden min-h-0">
        {/* Left Side: Logo + Features */}
        <div className="w-[200px] h-full flex flex-col justify-between items-start  z-20 pt-30 pb-20">
          {/* Left Tab: Bikes */}
          <div className="flex flex-col gap-6 items-start">
            {bikes?.map((b) => {
              const isActive = b.name === bike.name;

              return (
                <div
                  key={b.name}
                  className={`flex items-center -ml-2 cursor-pointer transition-all duration-300 ease-in-out
                    ${isActive ? "gap-6" : "gap-2"}`}
                >
                  {/* Bike Logo */}
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={40}
                    height={40}
                    className={`object-contain w-10 h-10 transform transition-transform duration-300 ease-in-out ${
                      isActive
                        ? "scale-120 opacity-100"
                        : "scale-100 opacity-40"
                    }`}
                  />

                  {/* Bike Name */}
                  <h3
                    className={`text-3xl font-bold uppercase !tracking-[5px] transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-white scale-120"
                        : "text-gray-500 scale-100"
                    }`}
                  >
                    {b.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Features List */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={displayedBike.name}
              initial={{ x: 0 }}
              animate={{ x: [0, -300, 0], opacity: [1, 0.5, 1] }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-lg space-y-2"
            >
              {displayedBike.features.map((f, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-gray-400 text-base">{f.label}</span>
                  <span className="font-semibold text-lg">{f.value}</span>
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
              className="relative flex justify-center items-center z-10 flex-1 translate-y-20"
            >
              <Image
                src={displayedBike.image}
                alt={`${displayedBike.name} Bike`}
                width={800}
                height={800}
                className="w-[90%] h-auto max-h-[60vh] md:max-h-[80vh] drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Big Gradient Name with Black Overlay */}
          <AnimatePresence initial={false} mode="wait">
            <motion.h1
              key={displayedBike.name}
              initial={{ y: 300, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute pl-30 -translate-y-10 flex items-center justify-start text-[18vw] font-extrabold !tracking-[50px] z-0 select-none bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${displayedBike.colors.gradient}), linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))`,
                backgroundBlendMode: "overlay", // overlay black with gradient
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
                <div className="bg-gray-50/10 backdrop-blur-[10px] rounded-xl p-6 space-y-4">
                  {Object.entries(displayedBike.specs).map(
                    ([key, value], idx, arr) => (
                      <div
                        key={key}
                        className={`pb-4 ${
                          idx !== arr.length - 1
                            ? "border-b border-white/20"
                            : ""
                        }`}
                      >
                        <span className="text-lg font-extrabold text-gray-500 uppercase mb-1 tracking-[1px]">
                          {key}
                        </span>
                        <p className="text-sm text-gray-300">{value}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA full-width */}
      <div
        className="py-3 w-full flex justify-center items-center cursor-pointer mt-auto"
        style={{ backgroundColor: displayedBike.colors.cta }}
      >
        <Button className="bg-transparent text-black text-lg cursor-pointer font-bold flex items-center gap-2 rounded-none shadow-none">
          EXPLORE THE MODEL <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
