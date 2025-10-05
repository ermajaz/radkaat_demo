"use client";

import { Button } from "@/components/ui/button";
import BikeColorSelector from "./BikeColorSelector";

interface Props {
  model: string;
  specs: { front: number; rear: number; wheel: string };
  colors: string[];
}

export default function BikeDetails({ model, specs, colors }: Props) {
  return (
    <div className="absolute top-[40%] -translate-y-[60%] right-[50px] flex flex-col items-center text-center w-full max-w-sm space-y-6 text-white">
      {/* Model Name */}
      <span className="text-[72px] font-[900] uppercase">{model}</span>

      {/* Specs in horizontal layout */}
      <div className="flex space-x-10 uppercase font-medium">
        <div className="flex flex-col justify-center items-center space-y-1">
          <p className="text-[14px]">Front (MM)</p>
          <span className="font-extrabold text-[24px]">{specs.front}</span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <p className="text-[14px]">Rear (MM)</p>
          <span className="font-extrabold text-[24px]">{specs.rear}</span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <p className="text-[14px]">Wheel Size</p>
          <span className="font-extrabold text-[24px]">{specs.wheel}</span>
        </div>
      </div>

      {/* Color Selector */}
      <div className="flex items-center space-x-3">
        <p className="uppercase text-sm tracking-wider font-bold">Color:</p>
        <BikeColorSelector colors={colors} />
      </div>

      {/* Buy Button */}
      <Button
        className="mt-3 w-[110px] !p-5 border border-[#999999]/80 rounded-none uppercase tracking-wider font-bold text-sm text-white"
        style={{
          background: "linear-gradient(90deg, #1A1A1A 0%, #3C3C3C 100%)",
        }}
      >
        Buy Now
      </Button>
    </div>
  );
}
