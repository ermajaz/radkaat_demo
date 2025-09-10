"use client";
import { useState, useEffect } from "react";
import BikeCard from "./BikeCard";
import BikeDetails from "./BikeDetails";
import { bikes } from "@/utils/data";
import { Bike } from "@/types";

export default function BikeComparison() {
  const [selectedBike, setSelectedBike] = useState<Bike>(bikes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % bikes.length;
        setSelectedBike(bikes[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between gap-10 p-6">
      {/* Left: Bike Cards */}
      <div className="flex flex-col lg:flex-row w-[55%] h-[80vh] justify-between relative overflow-hidden">
        {bikes.map((bike, index) => (
          <div key={bike.id} className="bike-card flex flex-col items-center relative w-full">
            <BikeCard
              bike={bike}
              isActive={selectedBike.id === bike.id}
              onHover={() => {
                setSelectedBike(bike);
                setCurrentIndex(index);
              }}
            />
            {index <= bikes.length - 1 && (
              <div className="absolute right-0 h-[100%] border-r border-gray-400" />
            )}
          </div>
        ))}
      </div>

      {/* Right: Graph + Details */}
      <div className="w-[40%] h-[80vh]">
        <BikeDetails bike={selectedBike} />
      </div>
    </div>
  );
}
