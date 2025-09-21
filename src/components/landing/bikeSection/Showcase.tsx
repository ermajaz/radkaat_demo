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
    <div className="relative w-full h-[calc(100vh-37px)] text-white flex flex-col">
      {/* Main Content */}
      <div className="relative h-[calc(100vh-93px)] flex flex-1 items-center justify-between px-6 md:px-14 -translate-y-10 overflow-y-auto overflow-x-hidden min-h-0">
        {/* Left Side: Logo + Features */}
        <div className="w-[200px] h-full flex flex-col justify-between items-start  z-20 pt-[25vh] pb-20">
          {/* Left Tab: Bikes */}
          <div className="flex flex-col gap-5 items-start">
            {bikes?.map((b, i) => {
              const isActive = b.name === bike.name;

              return (
                <div
                  key={b.name}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex items-center -ml-2 cursor-pointer transition-all duration-300 ease-in-out
                    ${isActive ? "gap-2" : "gap-2"}`}
                >
                  {/* Bike Logo */}
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={26}
                    height={36}
                    className={`object-contain transform transition-transform duration-300 ease-in-out ${
                      isActive
                        ? "opacity-100 w-[28px] h-[40px]"
                        : "opacity-40 w-[25px] h-[36px]"
                    }`}
                  />

                  {/* Bike Name */}
                  <h3
                    className={`text-[30px] font-bold uppercase transition-all duration-300 ease-in-out ${
                      isActive ? "text-white" : "text-gray"
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
              className="text-lg space-y-[14px]"
            >
              {displayedBike.features.map((f, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-white text-base font-normal">
                    {f.label}
                  </span>
                  <span className="text-base font-bold">{f.value}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
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
              className=" h-full absolute left-[60%] -translate-x-1/2 flex items-center justify-start text-[268px] font-bold !tracking-[50px] z-0 select-none bg-clip-text text-transparent"
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
        className="w-full h-[56px] flex justify-center items-center cursor-pointer mt-auto"
        style={{ backgroundColor: displayedBike.colors.cta }}
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
