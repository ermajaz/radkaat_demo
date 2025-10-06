"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BikeColorSelector from "./BikeColorSelector";

interface Props {
  model: string;
  specs: { front: number; rear: number; wheel: string };
  colors: string[];
}

export default function BikeDetails({ model, specs, colors }: Props) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="absolute top-[44%] -translate-y-[56%] right-[15px] flex flex-col items-center text-center w-full max-w-sm text-white"
    >
      {/* Model Name */}
      <span className="text-[72px] font-[900] uppercase">{model}</span>

      {/* Specs */}
      <div className="flex space-x-9 uppercase font-medium">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Front (MM)</p>
          <span className="font-extrabold text-[24px]">{specs.front}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Rear (MM)</p>
          <span className="font-extrabold text-[24px]">{specs.rear}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[14px]">Wheel Size</p>
          <span className="font-extrabold text-[24px]">{specs.wheel}</span>
        </div>
      </div>

      {/* Color Selector */}
      <div className="flex items-center space-x-2 mt-9">
        <p className="uppercase text-sm tracking-wider font-bold">Color:</p>
        <BikeColorSelector colors={colors} />
      </div>

      {/* Buy Button */}
      <Button
        className="w-[110px] !p-5.5 mt-9 border border-[#999999]/80 rounded-none uppercase font-normal text-sm text-white"
        style={{
          background: "linear-gradient(90deg, #1A1A1A 0%, #3C3C3C 100%)",
        }}
      >
        Buy Now
      </Button>
    </motion.div>
  );
}
