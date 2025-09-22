"use client"
import { OverlayBike } from "@/types";
import ColorDot from "./ColorDot";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BottomBar({ bike }: { bike: OverlayBike }) {
  const [selectedColor, setSelectedColor] = useState("#3bb54a");

  return (
    <div className=" inset-x-5 bg-[#35322c] py-4 px-8 flex items-center justify-between gap-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-6">
        <div>
          <div className="text-white font-bold uppercase tracking-wide">
            {bike.name}
          </div>
          <div className="text-white/70 text-sm">
            From: <span className="font-semibold">{bike.price}</span>
          </div>
        </div>

        {/* color chips */}
        <div className="flex items-center gap-3">
          {["#3bb54a", "#d4cf95", "#bd3b3b"].map((color) => (
            <button key={color} onClick={() => setSelectedColor(color)}>
              <ColorDot color={color} selected={selectedColor === color} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="min-w-[120px] bg-transparent border border-white/20 text-white">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-white cursor-pointer text-black hover:bg-white/90 font-semibold">
          View Product
        </Button>
      </div>
    </div>
  );
}
