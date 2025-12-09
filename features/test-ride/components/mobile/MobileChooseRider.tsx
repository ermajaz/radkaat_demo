"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Award, Trophy, HelpingHand, Gauge, User } from "lucide-react";

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

interface Props {
  onNext: (rider: Rider) => void;
  onBack: () => void;
}

const riders: Rider[] = [
  {
    id: 1,
    name: "John Doe",
    img: "/images/bg/rider-12.png",
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
    sex: "Female",
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

export default function MobileChooseRider({ onNext, onBack }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleNext = () => {
    const rider = riders.find((r) => r.id === selected);
    if (rider) onNext(rider);
  };

  return (
    <motion.div
      initial={{ opacity: 0.6, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-full pt-30"
    >
      {/* Title */}
      <h2 className="text-[26px] font-extrabold text-center text-white mb-8 tracking-tight">
        Choose Your <span className="text-sandstorm">Rider</span>
      </h2>

      {/* Riders */}
      <div className="flex flex-col gap-7">
        <AnimatePresence>
          {riders.map((rider, index) => {
            const active = rider.id === selected;

            return (
              <motion.div
                key={rider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.08 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(rider.id)}
                className={`
                  overflow-hidden rounded-3xl backdrop-blur-xl
                  p-5 border transition-all shadow-sm relative cursor-pointer
                  ${
                    active
                      ? "border-sandstorm shadow-[0_0_25px_rgba(255,193,110,0.35)] bg-sandstorm/10"
                      : "border-white/10 bg-white/5"
                  }
                `}
              >
                {/* Rider Header */}
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ y: active ? -3 : 0 }}
                    className="relative"
                  >
                    <Image
                      src={rider.img}
                      alt={rider.name}
                      width={90}
                      height={90}
                      className="rounded-2xl object-contain"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-extrabold tracking-tight ${
                        active ? "text-sandstorm" : "text-white"
                      }`}
                    >
                      {rider.name}
                    </h3>
                    <p className="text-white/60 text-[13px] tracking-wide">
                      Professional Test Rider
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 my-4" />

                {/* Stats */}
                <div className="grid grid-cols-5 text-center">
                  {/* Label Row */}
                  <div className="space-y-1">
                    <Award size={16} className="mx-auto text-sandstorm/90" />
                    <p className="text-[10px] text-white/50">Exp</p>
                    <p className="text-[12px] text-white font-semibold">
                      {rider.experience}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <Trophy size={16} className="mx-auto text-sandstorm/90" />
                    <p className="text-[10px] text-white/50">Races</p>
                    <p className="text-[12px] text-white font-semibold">
                      {rider.races}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <HelpingHand size={16} className="mx-auto text-sandstorm/90" />
                    <p className="text-[10px] text-white/50">Assist</p>
                    <p className="text-[12px] text-white font-semibold">
                      {rider.assist}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <Gauge size={16} className="mx-auto text-sandstorm/90" />
                    <p className="text-[10px] text-white/50">Age</p>
                    <p className="text-[12px] text-white font-semibold">
                      {rider.age}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <User size={16} className="mx-auto text-sandstorm/90" />
                    <p className="text-[10px] text-white/50">Sex</p>
                    <p className="text-[12px] text-white font-semibold">
                      {rider.sex}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex items-center gap-3 mt-10">
        <Button
          onClick={onBack}
          variant="outline"
          className="
            w-32 rounded-full border-white/30 bg-white/10
            text-white/80 hover:bg-white/20 transition-all
          "
        >
          Back
        </Button>

        <Button
          disabled={!selected}
          onClick={handleNext}
          className={`
            flex-1 py-4 rounded-full text-lg font-semibold 
            flex items-center justify-center gap-2
            ${
              selected
                ? "bg-sandstorm text-black shadow-lg"
                : "bg-white/10 text-white/40"
            }
          `}
        >
          Next <MoveRight size={18} />
        </Button>
      </div>
    </motion.div>
  );
}
