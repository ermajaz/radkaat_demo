"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    variantGroup: string;
  }) => void;
}

const bikes: Bike[] = [
  { id: 1, name: "SEROW - MTB", img: "/images/bikes/v1/serow-bike-v2.webp" },
  { id: 2, name: "SAOLA - MTB", img: "/images/bikes/v1/saola-bike-v2.webp" },
  { id: 3, name: "TAKIN - MTB", img: "/images/bikes/v1/takin-bike-v3.webp" },
];

const models = ["M1", "M2", "M3"];

export default function ChooseBikeVariant({ onNext }: ChooseBikeVariantProps) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>("");

  const isNextEnabled = !!selectedBike && !!selectedModel;

  return (
    <div className="flex flex-col items-center gap-8 w-full">

      {/* ---------------------- TITLE ---------------------- */}
      <h2 className="text-3xl md:text-[34px] font-extrabold text-center text-white tracking-[0.5px]">
        Choose Your Bike <span className="text-sandstorm">& Model</span>
      </h2>

      {/* ===================================================================== */}
      {/* STEP 1 — SELECT BIKE */}
      {/* ===================================================================== */}
      <div className="w-full max-w-5xl">
        <p className="text-white/80 font-semibold mb-4 text-lg tracking-wide">
          Choose Your Bike
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <motion.div key={bike.id} whileHover={{ y: -4 }}>
              <Card
                onClick={() => {
                  setSelectedBike(bike);
                  setSelectedModel("");
                }}
                className={`
                  cursor-pointer rounded-sm bg-white/5 border transition-all
                  ${
                    selectedBike?.id === bike.id
                      ? "border-sandstorm shadow-[0_0_15px_rgba(255,190,80,0.45)]"
                      : "border-white/10 hover:border-white/20"
                  }
                `}
              >
                <CardContent className="flex flex-col items-center">
                  <Image
                    src={bike.img}
                    alt={bike.name}
                    width={180}
                    height={100}
                    className="rounded-sm object-cover"
                  />

                  <p
                    className={`
                      mt-3 font-semibold text-center text-[15px]
                      ${
                        selectedBike?.id === bike.id
                          ? "text-sandstorm"
                          : "text-white/75"
                      }
                    `}
                  >
                    {bike.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* STEP 2 — SELECT MODEL */}
      {/* ===================================================================== */}
      {selectedBike && (
        <div className="w-full max-w-5xl">
          <p className="text-white/80 font-semibold mb-4 text-lg tracking-wide">
            Choose Model
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model) => (
              <motion.div
                key={model}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedModel(model)}
                className={`
                  rounded-sm border p-5 bg-white/5 cursor-pointer transition-all text-center
                  ${
                    selectedModel === model
                      ? "border-sandstorm shadow-[0_0_15px_rgba(255,190,80,0.4)]"
                      : "border-white/10 hover:border-white/20"
                  }
                `}
              >
                <Image
                  src={selectedBike.img}
                  alt={selectedBike.name}
                  width={180}
                  height={100}
                  className="mx-auto mb-4"
                />

                <p
                  className={`
                    text-xl font-semibold tracking-wide
                    ${
                      selectedModel === model
                        ? "text-sandstorm"
                        : "text-white/80"
                    }
                  `}
                >
                  {model}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* CONTINUE BUTTON */}
      {/* ===================================================================== */}
      <div className="w-full flex justify-end max-w-5xl">
        <Button
          disabled={!isNextEnabled}
          onClick={() =>
            selectedBike &&
            onNext({
              bike: selectedBike,
              variantGroup: selectedModel,
            })
          }
          className={`
            py-3 px-10 font-semibold rounded-sm transition-all flex items-center gap-2
            ${
              isNextEnabled
                ? "bg-sandstorm text-black cursor-pointer"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Continue <MoveRight />
        </Button>
      </div>
    </div>
  );
}
