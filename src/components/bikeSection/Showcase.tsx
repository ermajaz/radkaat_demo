"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

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
  return (
    <div className="relative w-full h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="relative flex flex-1 items-center justify-between px-6 md:px-14 -translate-y-10">
        {/* Left Side: Logo + Features */}
        <div className="flex flex-col gap-8 z-20">
          <div className="flex items-center gap-1">
            <Image
              src={bike.logo}
              alt={`${bike.name} Logo`}
              width={70}
              height={70}
              className="object-contain w-18 h-18 -ml-4"
            />
            <h2 className="text-5xl font-bold">{bike.name}</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={bike.name} // triggers animation on bike change
              initial={{ x: 0 }}
              animate={{ x: [0, -300, 0], opacity: [1, 0.5, 1] }} // slide left and come back
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-lg space-y-6"
            >
              {bike.features.map((f, idx) => (
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
          <Image
            src={bike.image}
            alt={`${bike.name} Bike`}
            width={800}
            height={800}
            className="w-[65%] h-auto drop-shadow-2xl z-10 translate-y-16"
          />

          {/* Big Gradient Name */}
          <h1
            className="absolute pl-30 flex items-center justify-start text-[18vw] font-extrabold !tracking-[50px] z-0 select-none bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${bike.colors.gradient})`,
            }}
          >
            {bike.name.toUpperCase()}
          </h1>
        </div>

        {/* Right Side: Specs Card */}
        <div className="z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={bike.name} // triggers animation every bike change
              initial={{ x: 0 }}
              animate={{ x: [0, 300, 0], opacity: [1, 0.5, 1] }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="z-20"
            >
              <div className="relative p-[1px] border border-white/50 rounded-xl shadow-lg w-[280px]">
                <div className="bg-gray-50/10 backdrop-blur-[10px] rounded-xl p-6 space-y-6">
                  {Object.entries(bike.specs).map(([key, value], idx, arr) => (
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
        style={{ backgroundColor: bike.colors.cta }}
      >
        <Button className="bg-transparent text-black text-lg font-bold flex items-center gap-2 rounded-none shadow-none">
          EXPLORE THE MODEL <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
