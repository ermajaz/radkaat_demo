"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Bike {
  id: number;
  name: string;
  img: string;
}

interface ChooseBikeProps {
  onNext: (bike: Bike) => void;
}

const bikes: Bike[] = [
  { id: 1, name: "SEROW - MTB", img: "/images/bike-curve-view.png" },
  { id: 2, name: "SAOLA - MTB", img: "/images/bike-curve-view.png" },
  { id: 3, name: "TAKIN - MTB", img: "/images/bike-curve-view.png" },
];

export default function ChooseBike({ onNext }: ChooseBikeProps) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="text-2xl font-bold text-white">Choose Your Bike</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {bikes.map((bike, i) => (
          <motion.div
            key={bike.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
          >
            <Card
              onClick={() => setSelectedBike(bike)}
              className={`cursor-pointer transform transition-all duration-300 p-0 overflow-hidden rounded-xl border-2 ${
                selectedBike?.id === bike.id
                  ? "border-pink-500 scale-105 shadow-2xl"
                  : "border-white/10 hover:scale-105 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <Image
                  src={bike.img}
                  alt={bike.name}
                  width={200}
                  height={150}
                  className="rounded-lg w-auto h-auto"
                />
                <p className="mt-2 font-semibold text-white">{bike.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Next Button Right Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl mt-6 flex justify-end"
      >
        <Button
          onClick={() => selectedBike && onNext(selectedBike)}
          disabled={!selectedBike}
          className={`py-3 px-6 font-semibold text-white transition-transform duration-300 ${
            selectedBike
              ? "bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-2xl"
              : "bg-white/10 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
}
