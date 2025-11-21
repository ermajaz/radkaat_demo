"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TableBikeName, TableModelName } from "../geometry/utils/geometry.types";

interface BikeStripProps {
  name: string;
  model: string;
  onBuy?: () => void;
  onBookTestRide?: () => void;
  selectedBike: TableBikeName;
  selectedModel:TableModelName;
}

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "features", label: "FEATURES" },
  { id: "geometry", label: "GEOMETRY" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "ride", label: "TEST RIDE" },
];

export default function BikeStrip({
  name,
  model,
  onBuy,
  onBookTestRide,
  selectedBike,
  selectedModel
}: BikeStripProps) {
  const [active, setActive] = useState("overview");

  // ScrollSpy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const visible = navItems.find((item) => {
        const el = document.getElementById(item.id);
        if (!el) return false;
        const top = el.offsetTop - 80; // buffer
        const bottom = top + el.offsetHeight;
        return scrollY >= top && scrollY < bottom;
      });
      if (visible) setActive(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70; // sticky height
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-100 w-full bg-stone-300 h-[70px] flex items-center justify-between px-8">
      <div className="flex items-center space-x-10">
        {/* Left: Name & Model */}
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-bold text-black uppercase">
            {selectedBike} - {selectedModel}
          </span>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[13px] cursor-pointer text-black relative pb-0.5 transition-colors ${
                active === item.id ? "font-bold" : "font-medium hover:text-rust"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-10">
        {/* <span
          className="text-[16px] text-black font-medium cursor-pointer hover:text-rust"
          onClick={onBookTestRide}
        >
          Book a Test Ride
        </span> */}
        <Button
          className="bg-black rounded-none px-6 py-4 cursor-pointer text-white hover:bg-gray-800"
          onClick={onBuy}
        >
          BUY
        </Button>
      </div>
    </div>
  );
}
