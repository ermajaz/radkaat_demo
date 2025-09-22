"use client";
import Image from "next/image";
import { OverlayBike } from "@/types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

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
      { width: "100%", duration: 0.6, ease: "power3.out" }
    );
  }, [selected]);

  return (
    <aside className="w-[420px] h-full bg-superblack px-8 flex flex-col gap-10 text-white overflow-y-auto">
      {/* Tabs row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {["bikes", "grips"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => setActiveTab(tab as "bikes" | "grips")}
              className={`px-6 cursor-pointer py-2 text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-sm
                ${
                  activeTab === tab
                    ? "bg-white/10 border border-white/40 rounded-[3px] text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Bikes + Models Row */}
      <div className="flex items-start gap-10 mt-6">
        {/* Bike list */}
        {activeTab === "bikes" && (
          <div className="flex flex-col gap-8 flex-1">
            {bikes.map((bike) => (
              <Button
                key={bike.id}
                variant="ghost"
                onClick={() => onSelect(bike)}
                className={`relative cursor-pointer flex items-center gap-6 text-left group transition-all duration-300 h-auto px-0 hover:bg-transparent
          ${
            selected === bike.id
              ? "text-white"
              : "text-white/50 hover:text-white/80"
          }`}
              >
                {/* Bike logo */}
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={bike.logo}
                    alt={bike.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Bike Name */}
                <div className="flex flex-col">
                  <h2 className="text-4xl tracking-[6px] font-extrabold uppercase leading-none">
                    {bike.name.split("-")[0]}
                  </h2>

                  {/* Underline */}
                  {selected === bike.id && (
                    <div
                      className="absolute -bottom-2 left-0 h-[2px] bg-white rounded w-0"
                      ref={underlineRef}
                    />
                  )}
                </div>
              </Button>
            ))}

            {/* Footer CTA */}
            <div className="mt-10 ml-10">
              <Button
                variant="ghost"
                className="relative cursor-pointer text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-300 group px-0"
              >
                View all bikes
                <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-white/50 group-hover:bg-white transition-all duration-300" />
              </Button>
            </div>
          </div>
        )}

        {/* Model list */}
        <div className="flex flex-col gap-4 text-sm uppercase tracking-widest">
          {["Model-1", "Model-2", "Model-3"].map((model) => (
            <Button
              key={model}
              variant="ghost"
              onClick={() => setSelectedModel(model)}
              className={`relative cursor-pointer text-left justify-start px-0 h-auto hover:bg-transparent
                ${
                  selectedModel === model
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
            >
              {model}
              {selectedModel === model && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded" />
              )}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
