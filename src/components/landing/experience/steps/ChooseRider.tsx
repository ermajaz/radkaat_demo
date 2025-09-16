"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface Rider {
  id: number;
  name: string;
  desc: string;
  discipline: string;
  img: string;
}

interface ChooseRiderProps {
  onNext: (rider: Rider) => void;
  onBack: () => void;
}

const riders: Rider[] = [
  {
    id: 1,
    name: "Alex Johnson",
    desc: "Enduro & downhill specialist",
    discipline: "Mountain",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSK08m5Xx80D0BXOVYzLOO0hgohOcnMAJSQ&s",
  },
  {
    id: 2,
    name: "Sophia Lee",
    desc: "Urban explorer & road pro",
    discipline: "Road",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQAuIBtKqoPyqZqMoIl2CjWys50tG5wq_jQ&s",
  },
  {
    id: 3,
    name: "Liam Smith",
    desc: "All-round adventure cyclist",
    discipline: "Gravel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3Q_pMPv6dOeDEZG8C-zwOxZHrNhSZB7LSRxNnrymNO2O_xoG5CdjolnrMLDcNoaI7j0&usqp=CAU",
  },
  // Add more riders...
];

export default function ChooseRider({ onNext, onBack }: ChooseRiderProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleNext = () => {
    const rider = riders.find((r) => r.id === selectedId);
    if (rider) onNext(rider);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center gap-8 w-full px-4"
    >
      <h2 className="text-3xl font-bold text-white text-center">
        Choose Your Rider
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {riders.map((rider) => (
          <motion.div key={rider.id} variants={cardVariants}>
            <Card
              onClick={() => setSelectedId(rider.id)}
              className={`cursor-pointer pt-0 transform transition-all duration-300 rounded-2xl overflow-hidden border-2 hover:scale-105 ${
                selectedId === rider.id
                  ? "border-rust shadow-[0_0_25px_rgba(141,54,59,0.6)] scale-105"
                  : "border-white/20 hover:shadow-lg"
              }`}
            >
              {/* Rider Image */}
              <div className="relative w-full h-56">
                <Image
                  src={rider.img}
                  alt={rider.name}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl" />
              </div>

              {/* Rider Info */}
              <CardContent className="p-4 text-center bg-black/70 flex flex-col gap-1">
                <p className="font-semibold text-white text-lg">{rider.name}</p>
                <p className="text-sm text-rust font-semibold">{rider.discipline}</p>
                <p className="text-xs text-gray-300">{rider.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 w-full max-w-6xl">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/40 text-white cursor-pointer w-full md:w-auto"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedId === null}
          className={`py-3 px-6 font-semibold w-full md:w-auto cursor-pointer transition-colors duration-300 ${
            selectedId
              ? "bg-rust hover:bg-rust text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
