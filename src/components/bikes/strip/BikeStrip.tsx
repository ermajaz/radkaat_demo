"use client";

import { Button } from "@/components/ui/button";

interface BikeStripProps {
  name: string;
  model: string;
  onBuy?: () => void;
  onBookTestRide?: () => void;
}

export default function BikeStrip({
  name,
  model,
  onBuy,
  onBookTestRide,
}: BikeStripProps) {
  return (
    <div className="w-full bg-stone-300 h-[70px] flex items-center justify-between px-8">
      {/* Left side: Name & Model */}
      <div className="flex items-center justify-center">
        <span className="text-[24px] font-bold text-black">{name} -</span>
        <span className="text-[24px] font-semibold text-black">&nbsp;{model}</span>
      </div>

      {/* Right side: Text + Button */}
      <div className="flex items-center gap-8">
        <span
          className="text-[18px] text-black font-medium cursor-pointer hover:text-rust"
          onClick={onBookTestRide}
        >
          Book a Test Ride
        </span>
        <Button
          className="bg-black rounded-none px-7 py-5 cursor-pointer text-white hover:bg-gray-800"
          onClick={onBuy}
        >
          BUY
        </Button>
      </div>
    </div>
  );
}
