"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MoveRight } from "lucide-react";

interface Rider {
  id: number;
  name: string;
  img: string;
  experience: string;
  races: number;
  assist: number;
  age: number;
  sex: string;
}

interface ChooseRiderProps {
  onNext: (rider: Rider) => void;
  onBack: () => void;
}

const riders: Rider[] = [
  {
    id: 1,
    name: "John Doe",
    img: "/images/bg/rider-12.png", // Replace with your local images
    experience: "10 YRS",
    races: 20,
    assist: 2,
    age: 26,
    sex: "Male",
  },
  {
    id: 2,
    name: "Sophia Lee",
    img: "/images/bg/rider-12.png",
    experience: "8 YRS",
    races: 15,
    assist: 4,
    age: 24,
    sex: "Male",
  },
  {
    id: 3,
    name: "Liam Smith",
    img: "/images/bg/rider-12.png",
    experience: "5 YRS",
    races: 12,
    assist: 3,
    age: 22,
    sex: "Male",
  },
];

export default function ChooseRider({ onNext, onBack }: ChooseRiderProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleNext = () => {
    const rider = riders.find((r) => r.id === selectedId);
    if (rider) onNext(rider);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className="flex flex-col items-center gap-10 w-full px-4"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white text-center">
        Choose Your <span className="text-sandstorm">Rider</span>
      </h2>

      {/* Rider Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {riders.map((rider) => (
          <motion.div key={rider.id} variants={cardVariants}>
            <Card
              onClick={() => setSelectedId(rider.id)}
              className={`
                cursor-pointer rounded-2xl p-0 gap-0 overflow-hidden bg-stone border transition-all duration-300
                ${
                  selectedId === rider.id
                    ? "border-sandstorm shadow-[0_0_20px_rgba(255,190,80,0.4)]"
                    : "border-white/10"
                }
              `}
            >
              {/* TOP SECTION */}
              <div className="relative w-full h-65 flex items-center justify-center overflow-hidden">

                {/* RK Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                  <Image
                    src="/images/hero/Radkaat-1.png"
                    alt="RK Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* Rider Image */}
                <div className="relative mt-10 z-10">
                  <Image
                    src={rider.img}
                    alt={rider.name}
                    width={130}
                    height={130}
                    className="object-contain drop-shadow-xl"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute bottom-0 w-full h-16 bg-linear-to-t from-[#111] via-[#111]/95 to-transparent" />

                {/* Rider Name */}
                <h2 className="absolute bottom-0 w-full text-center text-2xl font-extrabold tracking-wider text-white z-20">
                  {rider.name}
                </h2>
              </div>

              {/* BOTTOM INFO SECTION */}
              <div className="p-2 pb-5 bg-[#111]">
                <div className="grid grid-cols-5 text-center">

                  {/* LABELS */}
                  <p className="text-white/50 text-[10px] tracking-wide whitespace-nowrap">Experience</p>
                  <p className="text-white/50 text-[10px] tracking-wide whitespace-nowrap">Races</p>
                  <p className="text-white/50 text-[10px] tracking-wide whitespace-nowrap">Assist</p>
                  <p className="text-white/50 text-[10px] tracking-wide whitespace-nowrap">Age</p>
                  <p className="text-white/50 text-[10px] tracking-wide whitespace-nowrap">Sex</p>

                  {/* VALUES */}
                  <p className="text-white font-semibold text-sm mt-1 whitespace-nowrap">{rider.experience}</p>
                  <p className="text-white font-semibold text-sm mt-1 whitespace-nowrap">{rider.races}</p>
                  <p className="text-white font-semibold text-sm mt-1 whitespace-nowrap">{rider.assist}</p>
                  <p className="text-white font-semibold text-sm mt-1 whitespace-nowrap">{rider.age}</p>
                  <p className="text-white font-semibold text-sm mt-1 whitespace-nowrap">{rider.sex}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-4 w-full max-w-6xl">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/30 text-black rounded-full cursor-pointer"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!selectedId}
          className={`
            py-3 px-8 rounded-full font-semibold flex items-center gap-2
            ${
              selectedId
                ? "bg-sandstorm text-black cursor-pointer"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next <MoveRight />
        </Button>
      </div>
    </motion.div>
  );
}
