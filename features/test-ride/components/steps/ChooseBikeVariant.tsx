"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

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
  { id: 1, name: "SEROW - MTB", img: "/images/dummy-cycle.png" },
  { id: 2, name: "SAOLA - MTB", img: "/images/dummy-cycle.png" },
  { id: 3, name: "TAKIN - MTB", img: "/images/dummy-cycle.png" },
];

const wheelOptions = ['26"', '27.5"', '29"'];
const frameOptions = ["S", "M", "L"];

export default function ChooseBikeVariant({ onNext }: ChooseBikeVariantProps) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [wheelSize, setWheelSize] = useState("");
  const [frameSize, setFrameSize] = useState("");

  const isNextEnabled = selectedBike && wheelSize && frameSize;

  const optionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-white tracking-wide"
      >
        🚴 Choose Your Bike <span className="text-rust">& Variant</span>
      </motion.h2>

      {/* Bikes Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {bikes.map((bike, i) => (
          <motion.div
            key={bike.id}
            variants={optionVariants}
            transition={{ delay: i * 0.15 }}
          >
            <Card
              onClick={() => setSelectedBike(bike)}
              className={`cursor-pointer transform transition-all duration-300 overflow-hidden bg-[#121212] rounded-2xl border-2 relative group ${
                selectedBike?.id === bike.id
                  ? "border-rust shadow-[0_0_30px_rgba(141,54,59,0.6)] scale-105"
                  : "border-white/10 hover:scale-105 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative"
                >
                  <Image quality={100}
                    src={bike.img}
                    alt={bike.name}
                    width={220}
                    height={150}
                    className="rounded-lg drop-shadow-xl"
                  />
                </motion.div>
                <p className="mt-3 font-semibold text-white text-lg group-hover:text-rust transition-colors">
                  {bike.name}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Variant Selection */}
      {selectedBike && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-10"
        >
          {/* Wheel Size */}
          <div>
            <p className="mb-4 text-white/80 font-medium tracking-wide">
              Select <span className="text-rust">Wheel Size</span>
            </p>
            <div className="flex gap-4">
              {wheelOptions.map((wheel) => (
                <motion.button
                  key={wheel}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setWheelSize(wheel)}
                  className={`px-5 py-3 rounded-full font-semibold transition-all text-sm md:text-base 
                    ${
                      wheelSize === wheel
                        ? "bg-rust text-white shadow-lg shadow-rust/40"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  {wheel}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Frame Size */}
          <div>
            <p className="mb-4 text-white/80 font-medium tracking-wide">
              Select <span className="text-rust">Frame Size</span>
            </p>
            <div className="flex gap-4">
              {frameOptions.map((frame) => (
                <motion.button
                  key={frame}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setFrameSize(frame)}
                  className={`px-5 py-3 rounded-full font-semibold transition-all text-sm md:text-base 
                    ${
                      frameSize === frame
                        ? "bg-rust text-white shadow-lg shadow-rust/40"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  {frame}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="w-full flex justify-end gap-4">
        <Button
          onClick={() =>
            selectedBike &&
            onNext({ bike: selectedBike, variant: { wheelSize, frameSize } })
          }
          disabled={!isNextEnabled}
          className={`py-3 px-6 font-semibold w-full rounded-full md:w-auto transition-colors duration-300 ${
            isNextEnabled
              ? "bg-linear-to-r from-rust to-rust/80 hover:scale-110 hover:shadow-2xl transition-transform cursor-pointer text-white"
              : "bg-gray-700 text-gray cursor-not-allowed"
          }`}
        >
          Next <MoveRight />
        </Button>
      </div>
    </div>
  );
}
