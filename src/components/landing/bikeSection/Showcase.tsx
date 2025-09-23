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
  extraFeature: string[];
  specs: Record<string, string>;
  colors: {
    gradient: string;
    cta: string; // e.g. "#c6b783"
  };
}

export default function Showcase({
  bike,
  bikes,
  setCurrentIndex, // 👈 new
}: {
  bike: Bike;
  bikes: Bike[];
  setCurrentIndex: (i: number) => void;
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
    <div className="relative w-full h-[calc(100vh-30px)] text-white flex flex-col">
      {/* Main Content */}
      <div className="relative h-[calc(100vh-70px)] flex items-center justify-between px-6 overflow-hidden min-h-0">
        {/* Left Side: Logo + Features */}
        <div className="w-[200px] h-full flex flex-col justify-center items-start  z-20">
          {/* Left Tab: Bikes */}
          <div className="flex flex-col gap-2 items-start justify-center relative">
            {bikes?.map((b, i) => {
              const isActive = b.name === bike.name;

              return (
                <div key={b.name} className="flex flex-col w-full">
                  <div
                    onClick={() => setCurrentIndex(i)}
                    className="flex items-center cursor-pointer relative"
                  >
                    {/* Vertical line for active bike */}
                    {isActive && (
                      <span
                        className="absolute -left-1 h-2/3 w-[3px] rounded-full"
                        style={{ backgroundColor: b.colors.cta }}
                      />
                    )}

                    {/* Bike Logo */}
                    <Image
                      src={b.logo}
                      alt={`${b.name} logo`}
                      width={isActive ? 28 : 25}
                      height={isActive ? 40 : 36}
                      className={`object-contain ml-2 transition-all duration-300 ease-in-out ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    />

                    {/* Bike Name */}
                    <h3
                      className={`ml-2 text-[30px] font-bold uppercase transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray"
                      }`}
                    >
                      {b.name}
                    </h3>
                  </div>

                  {/* Extra Features for selected bike */}
                  {isActive && (
                    <div className="ml-10 mt-2 flex flex-col gap-1">
                      {b.extraFeature.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          {/* Big Dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1.5 flex-shrink-0"></span>
                          <span className="text-[13px] text-white/80 font-normal">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Bike Image + Big Background Name */}
        <div className="relative w-full h-full flex-1 flex justify-center items-center">
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
              className="relative flex justify-center items-center z-10 flex-1 left-10 translate-y-20"
            >
              <Image
                src={displayedBike.image}
                alt={`${displayedBike.name} Bike`}
                width={800}
                height={800}
                className="w-[80%] h-auto max-h-[60vh] md:max-h-[80vh] drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence initial={false} mode="wait">
            <motion.h1
              key={displayedBike.name}
              initial={{ y: 300, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className=" h-full absolute left-[60%] -translate-x-1/2 flex items-center justify-start text-[268px] font-bold tracking-[50px] z-0 select-none bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  displayedBike.name.toLowerCase() === "serow"
                    ? "linear-gradient(180deg, rgba(198, 183, 131, 0.3) 17.32%, rgba(128, 109, 42, 0.3) 100%)"
                    : displayedBike.name.toLowerCase() === "saola"
                    ? "linear-gradient(180deg, rgba(0, 70, 215, 0.3) 17.32%, rgba(255, 255, 255, 0.3) 73.76%)"
                    : displayedBike.name.toLowerCase() === "takin"
                    ? "linear-gradient(180deg, rgba(81, 99, 22, 0.3) 17.32%, rgba(241, 255, 195, 0.3) 86%)"
                    : "linear-gradient(180deg, rgba(198, 183, 131, 0.3) 17.32%, rgba(128, 109, 42, 0.3) 100%)",
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
              <div className="relative p-[1px] border border-white/20 rounded-xl shadow-lg w-[280px]">
                <div className="bg-[#2B2B2b]/50 backdrop-blur-[10px] drop-shadow-white/10 rounded-[8px] p-4">
                  {Object.entries(displayedBike.specs).map(
                    ([key, value], idx, arr) => (
                      <div
                        key={key}
                        className={`${
                          idx !== arr.length - 1
                            ? "mb-4 border-b border-white/20"
                            : ""
                        } pb-4 last:pb-0`}
                      >
                        <span className="text-lg font-extrabold text-[#9A9A9A] uppercase mb-1 tracking-[0.5px]">
                          {key}
                        </span>
                        <p className="text-sm text-white leading-[22px]">
                          {value}
                        </p>
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
        className="w-full h-[40px] flex justify-center items-center cursor-pointer mt-auto"
        style={{
          backgroundImage:
            displayedBike.name.toLowerCase() === "serow"
              ? "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))"
              : displayedBike.name.toLowerCase() === "saola"
              ? "linear-gradient(90deg, var(--color-airforce), var(--color-petrol))"
              : displayedBike.name.toLowerCase() === "takin"
              ? "linear-gradient(90deg, #75911c, var(--color-army))"
              : "linear-gradient(90deg, var(--color-sandstorm), var(--color-sandstorm-1))",
        }}
      >
        <Button
          className={`bg-transparent text-lg cursor-pointer font-[600] flex items-center gap-2 rounded-none shadow-none 
      ${
        ["saola", "takin"].includes(displayedBike.name.toLowerCase())
          ? "text-white"
          : "text-black"
      }`}
        >
          EXPLORE THE MODEL <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
