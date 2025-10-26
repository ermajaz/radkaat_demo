"use client";

import Image from "next/image";
import { OverlayBike } from "@/types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Props = {
  bikes: OverlayBike[];
  selected: string;
  onSelect: (bike: OverlayBike) => void;
};

export default function Sidebar({ bikes, selected, onSelect }: Props) {
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"bikes" | "grips">("bikes");
  const [selectedModel, setSelectedModel] = useState("Model-1");

  useEffect(() => {
    if (!underlineRef.current) return;
    gsap.fromTo(
      underlineRef.current,
      { width: 0 },
      { width: "100%", duration: 0.5, ease: "power3.out" }
    );
  }, [selected]);

  return (
    <aside className="relative w-[420px] overflow-hidden bg-superblack/95 backdrop-blur-xl px-8 py-10 flex flex-col gap-10 text-white border-r border-white/10 shadow-[inset_-2px_0_20px_rgba(255,255,255,0.03)]">
      {/* ✨ Top Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {["bikes", "grips"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => setActiveTab(tab as "bikes" | "grips")}
              className={`px-5 py-2 uppercase cursor-pointer text-xs tracking-[0.15em] rounded-none transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-white/10 border border-white/30 text-white shadow-sm"
                    : "text-white/50 hover:text-white/80"
                }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* 🏍️ Bike + Model Section */}
      <div className="flex items-start gap-8 mt-4">
        {/* Left Column: Bikes */}
        {activeTab === "bikes" && (
          <div className="flex-1 flex flex-col gap-8">
            <AnimatePresence>
              {bikes.map((bike) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => onSelect(bike)}
                    className={`relative group cursor-pointer flex items-center gap-5 h-auto px-0 hover:bg-transparent transition-all duration-300
                      ${
                        selected === bike.id
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
                  >
                    {/* Bike Logo */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden p-1"
                    >
                      <Image
                        src={bike.logo}
                        alt={bike.name}
                        fill
                        className="object-contain"
                        quality={100}
                      />
                    </motion.div>

                    {/* Bike Info */}
                    <div className="flex flex-col relative">
                      <h2 className="text-3xl font-extrabold uppercase tracking-[4px] leading-none">
                        {bike.name.split("-")[0]}
                      </h2>

                      {selected === bike.id && (
                        <motion.div
                          ref={underlineRef}
                          layoutId="bike-underline"
                          className="absolute -bottom-1 left-0 h-[2px] bg-white rounded"
                        />
                      )}
                    </div>
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* View All CTA */}
            <motion.div
              whileHover={{ x: 4 }}
              className="mt-8 flex items-center gap-2 text-sm text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>View all bikes</span>
              <ChevronRight size={18} className="opacity-80" />
            </motion.div>
          </div>
        )}

        {/* Right Column: Models */}
        <div className="flex flex-col gap-3 text-xs uppercase tracking-widest">
          {["Model-1", "Model-2", "Model-3"].map((model) => (
            <Button
              key={model}
              variant="ghost"
              onClick={() => setSelectedModel(model)}
              className={`relative justify-start cursor-pointer px-0 h-auto hover:bg-transparent transition-all
                ${
                  selectedModel === model
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
            >
              {model}
              {selectedModel === model && (
                <motion.span
                  layoutId="model-underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"
                />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* ✨ Decorative Gradient Glow */}
      <motion.div
        className="absolute bottom-[-200px] left-0 w-full h-[300px] bg-gradient-to-t from-army/10 via-transparent to-transparent blur-2xl"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </aside>
  );
}
