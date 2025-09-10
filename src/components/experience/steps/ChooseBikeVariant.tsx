"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Bike {
  id: number;
  name: string;
  img: string;
}

interface ChooseBikeVariantProps {
  onNext: (selection: {
    bike: Bike;
    variant: { wheelSize: string; frameSize: string };
  }) => void;
}

const bikes: Bike[] = [
  { id: 1, name: "SEROW - MTB", img: "/images/bike-curve-view.png" },
  { id: 2, name: "SAOLA - MTB", img: "/images/bike-curve-view.png" },
  { id: 3, name: "TAKIN - MTB", img: "/images/bike-curve-view.png" },
];

const wheelOptions = ['26"', '27.5"', '29"'];
const frameOptions = ["S", "M", "L"];

export default function ChooseBikeVariant({ onNext }: ChooseBikeVariantProps) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [wheelSize, setWheelSize] = useState("");
  const [frameSize, setFrameSize] = useState("");

  const optionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const isNextEnabled = selectedBike && wheelSize && frameSize;

  return (
    <div className="flex flex-col items-center mt-5 gap-8 w-full">
      <h2 className="text-3xl font-bold text-white text-center">
        Choose Your Bike & Variant
      </h2>

      {/* Bikes */}
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
                  ? "border-rust scale-105 shadow-2xl"
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

      {/* Show Variant Selection only if a bike is selected */}
      {selectedBike && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-6">
          {/* Wheel Size */}
          <div>
            <p className="mb-4 text-white/80 font-medium">Select Wheel Size</p>
            <div className="grid grid-cols-3 gap-4">
              {wheelOptions.map((wheel) => (
                <motion.div
                  key={wheel}
                  variants={optionVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(141, 54, 59, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setWheelSize(wheel)}
                  className={`cursor-pointer rounded-lg p-4 text-center font-semibold transition-colors 
                    ${wheelSize === wheel ? "bg-rust text-white shadow-lg" : "bg-white/10 text-white"}`}
                >
                  {wheel}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frame Size */}
          <div>
            <p className="mb-4 text-white/80 font-medium">Select Frame Size</p>
            <div className="grid grid-cols-3 gap-4">
              {frameOptions.map((frame) => (
                <motion.div
                  key={frame}
                  variants={optionVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(141, 54, 59, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFrameSize(frame)}
                  className={`cursor-pointer rounded-lg p-4 text-center font-semibold transition-colors 
                    ${frameSize === frame ? "bg-rust text-white shadow-lg" : "bg-white/10 text-white"}`}
                >
                  {frame}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Next Button */}
      {selectedBike && (
        <motion.div className="w-full max-w-4xl mt-6 flex justify-end">
          <Button
            onClick={() => selectedBike && onNext({ bike: selectedBike, variant: { wheelSize, frameSize } })}
            disabled={!isNextEnabled}
            className={`py-3 px-6 font-semibold text-white cursor-pointer transition-transform duration-300 ${
              isNextEnabled
                ? "bg-rust hover:bg-rust hover:scale-105 hover:shadow-2xl"
                : "bg-white/10 cursor-not-allowed"
            }`}
          >
            Next
          </Button>
        </motion.div>
      )}
    </div>
  );
}
