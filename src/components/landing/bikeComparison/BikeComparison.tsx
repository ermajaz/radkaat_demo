"use client";

import { useRef, useState } from "react";
import BikeCard from "./BikeCard";
import BikeDetails from "./BikeDetails";
import { bikes } from "@/utils/data";
import { Bikee } from "@/types";

export default function BikeComparison() {
  const [selectedBike, setSelectedBike] = useState<Bikee>(bikes[0]);

  // refs for GSAP/ScrollTrigger logic & cleanup
  const sectionRef = useRef<HTMLElement | null>(null);

  const selectIndex = (idx: number) => {
    if (idx < 0) idx = 0;
    if (idx > bikes.length - 1) idx = bikes.length - 1;
    setSelectedBike(bikes[idx]);
  };


  return (
    <section ref={sectionRef} className="relative w-full z-10 bg-superblack">
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between gap-10 p-10">
        {/* Left: Bike Cards */}
        <div className="flex flex-col lg:flex-row w-[60%] h-full justify-between relative overflow-hidden">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className="w-1/3 cursor-pointer flex flex-col items-center relative"
              onClick={() => selectIndex(index)}
            >
              <BikeCard bike={bike} isActive={selectedBike.id === bike.id} />
              {index <= bikes.length - 1 && (
                <div className="absolute right-0 h-full border-r border-gray-500" />
              )}
            </div>
          ))}
        </div>

        {/* Right: Graph + Details */}
        <div className="w-[40%] h-[80vh] flex items-center justify-center">
          <BikeDetails bike={selectedBike} allBikes={bikes} />
        </div>
      </div>
    </section>
  );
}
