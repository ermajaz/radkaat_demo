"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ChooseVariantProps {
  onNext: (variant: { wheelSize: string; frameSize: string }) => void;
  onBack: () => void;
}

const wheelOptions = ['26"', '27.5"', '29"'];
const frameOptions = ["S", "M", "L"];

export default function ChooseVariant({ onNext, onBack }: ChooseVariantProps) {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-8 w-full"
    >
      <h2 className="text-3xl font-bold text-white text-center">
        Choose Your Variant
      </h2>

      {/* Wheel Size */}
      <div className="w-full max-w-md">
        <p className="mb-4 text-white/80 font-medium">Select Wheel Size</p>
        <div className="grid grid-cols-3 gap-4">
          {wheelOptions.map((wheel) => (
            <motion.div
              key={wheel}
              variants={optionVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(255, 105, 180, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setWheelSize(wheel)}
              className={`cursor-pointer rounded-lg p-4 text-center font-semibold transition-colors 
                ${
                  wheelSize === wheel
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white/10 text-white"
                }`}
            >
              {wheel}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frame Size */}
      <div className="w-full max-w-md">
        <p className="mb-4 text-white/80 font-medium">Select Frame Size</p>
        <div className="grid grid-cols-3 gap-4">
          {frameOptions.map((frame) => (
            <motion.div
              key={frame}
              variants={optionVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(255, 105, 180, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFrameSize(frame)}
              className={`cursor-pointer rounded-lg p-4 text-center font-semibold transition-colors 
                ${
                  frameSize === frame
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white/10 text-white"
                }`}
            >
              {frame}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div className="flex justify-between w-full max-w-md mt-6">
        <Button variant="outline" onClick={onBack} className="cursor-pointer">
          Back
        </Button>
        <Button
          onClick={() => onNext({ wheelSize, frameSize })}
          disabled={!wheelSize || !frameSize}
          className={`transition-colors duration-300 cursor-pointer ${
            wheelSize && frameSize
              ? "bg-pink-500 text-white hover:bg-pink-600"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  );
}
