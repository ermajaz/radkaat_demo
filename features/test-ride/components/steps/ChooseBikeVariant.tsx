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
  colors: string[];
}

interface ChooseBikeVariantProps {
  onNext: (selection: {
    bike: Bike;
    variantGroup: string;
    color: string;
    variant: { wheelSize: string; frameSize: string };
  }) => void;
}

const bikes: Bike[] = [
  {
    id: 1,
    name: "SEROW - MTB",
    img: "/images/dummy-cycle.png",
    colors: ["#E63946", "#457B9D", "#F1FAEE"],
  },
  {
    id: 2,
    name: "SAOLA - MTB",
    img: "/images/dummy-cycle.png",
    colors: ["#F4A261", "#E76F51", "#2A9D8F"],
  },
  {
    id: 3,
    name: "TAKIN - MTB",
    img: "/images/dummy-cycle.png",
    colors: ["#6A4C93", "#1982C4", "#8AC926"],
  },
];

const variantGroups = ["M1", "M2", "M3"];
const wheelOptions = ['26"', '27.5"', '29"'];
const frameOptions = ["S", "M", "L"];

export default function ChooseBikeVariant({ onNext }: ChooseBikeVariantProps) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [selectedVariantGroup, setSelectedVariantGroup] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [frameSize, setFrameSize] = useState("");

  const isNextEnabled =
    selectedBike && selectedVariantGroup && selectedColor && wheelSize && frameSize;

  return (
    <div className="flex flex-col items-center gap-12 w-full">

      {/* ---------------------- TITLE ---------------------- */}
      <h2 className="text-3xl md:text-[34px] font-extrabold text-center text-white tracking-[0.5px]">
        Choose Your Bike <span className="text-sandstorm">& Variant</span>
      </h2>


      {/* ===================================================================== */}
      {/* STEP 1 — SELECT BIKE (PREMIUM COMPACT CARDS) */}
      {/* ===================================================================== */}
      <div className="w-full max-w-5xl">
        <p className="text-white/80 font-semibold mb-4 text-lg tracking-wide">
          1. Choose Your Bike
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {bikes.map((bike) => (
            <motion.div
              key={bike.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <Card
                onClick={() => {
                  setSelectedBike(bike);
                  setSelectedVariantGroup("");
                  setSelectedColor("");
                  setWheelSize("");
                  setFrameSize("");
                }}
                className={`
                  cursor-pointer rounded-sm bg-white/5 border transition-all p-3
                  ${selectedBike?.id === bike.id
                    ? "border-sandstorm shadow-[0_0_15px_rgba(255,190,80,0.45)]"
                    : "border-white/10 hover:border-white/20"
                  }
                `}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="relative w-full">
                    {/* Bike Image */}
                    <Image
                      src={bike.img}
                      alt={bike.name}
                      width={160}
                      height={90}
                      className="rounded-sm object-cover mx-auto"
                    />
                  </div>

                  <p
                    className={`
                      mt-3 font-semibold text-center text-[15px]
                      ${selectedBike?.id === bike.id
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
      {/* STEP 2 — SELECT VARIANT GROUP (WITH COMPACT IMAGE & COLOR PICKER) */}
      {/* ===================================================================== */}
      {selectedBike && (
        <div className="w-full max-w-5xl">
          <p className="text-white/80 font-semibold mb-4 text-lg tracking-wide">
            2. Choose Variant & Color
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variantGroups.map((vg) => (
              <motion.div
                key={vg}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`
                  rounded-sm border p-5 bg-white/5 cursor-pointer transition-all
                  ${selectedVariantGroup === vg
                    ? "border-sandstorm shadow-[0_0_15px_rgba(255,190,80,0.4)]"
                    : "border-white/10 hover:border-white/20"
                  }
                `}
                onClick={() => {
                  setSelectedVariantGroup(vg);
                  setSelectedColor("");
                }}
              >
                {/* Bike Image + Color Selector */}
                <div className="relative">
                  <Image
                    src={selectedBike.img}
                    alt={selectedBike.name}
                    width={220}
                    height={120}
                    className="rounded-sm object-cover mx-auto"
                  />

                  <div className="flex items-center justify-between gap-5">
                    <p
                      className={`
                    text-center text-xl font-semibold tracking-wide
                    ${selectedVariantGroup === vg
                          ? "text-sandstorm"
                          : "text-white/80"
                        }
                  `}
                    >
                      {vg}
                    </p>
                   <div className="flex gap-3">
  {selectedBike.colors.map((color) => {
    const isSelected = selectedColor === color;

    return (
      <motion.div
        key={color}
        whileHover={{ scale: 1.08 }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedColor(color);
        }}
        className="relative flex items-center justify-center cursor-pointer"
      >
        {/* Outer white ring with visible gap */}
        {isSelected && (
          <div
            className="
              absolute
              w-6 h-6            
              rounded-full
              border-[1.5px] border-white
              pointer-events-none
            "
          />
        )}

        {/* Inner color dot */}
        <div
          className="
            w-4 h-4         
            rounded-full
            border border-white/40
          "
          style={{ backgroundColor: color }}
        />
      </motion.div>
    );
  })}
</div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}



      {/* ===================================================================== */}
      {/* STEP 3 — SELECT WHEEL + FRAME SIZE */}
      {/* ===================================================================== */}
      {selectedVariantGroup && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">

          {/* Wheel Size */}
          <div>
            <p className="mb-3 text-white/80 font-semibold tracking-wide">
              3A. Wheel Size
            </p>
            <div className="flex gap-3 flex-wrap">
              {wheelOptions.map((wheel) => (
                <button
                  key={wheel}
                  onClick={() => setWheelSize(wheel)}
                  className={`
                    px-4 py-2 rounded-sm text-sm transition-all cursor-pointer
                    ${wheelSize === wheel
                      ? "bg-sandstorm text-black shadow-[0_0_15px_rgba(255,190,80,0.5)]"
                      : "bg-white/10 text-white hover:bg-white/20"
                    }
                  `}
                >
                  {wheel}
                </button>
              ))}
            </div>
          </div>

          {/* Frame Size */}
          <div>
            <p className="mb-3 text-white/80 font-semibold tracking-wide">
              3B. Frame Size
            </p>
            <div className="flex gap-3 flex-wrap">
              {frameOptions.map((frame) => (
                <button
                  key={frame}
                  onClick={() => setFrameSize(frame)}
                  className={`
                    px-4 py-2 rounded-sm text-sm transition-all cursor-pointer
                    ${frameSize === frame
                      ? "bg-sandstorm text-black shadow-[0_0_15px_rgba(255,190,80,0.5)]"
                      : "bg-white/10 text-white hover:bg-white/20"
                    }
                  `}
                >
                  {frame}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}



      {/* ===================================================================== */}
      {/* CONTINUE BUTTON */}
      {/* ===================================================================== */}
      <div className="w-full flex justify-end max-w-5xl">
        <Button
          onClick={() =>
            selectedBike &&
            onNext({
              bike: selectedBike,
              variantGroup: selectedVariantGroup,
              color: selectedColor,
              variant: { wheelSize, frameSize },
            })
          }
          disabled={!isNextEnabled}
          className={`
            py-3 px-10 font-semibold rounded-sm transition-all cursor-pointer flex items-center gap-2 
            ${isNextEnabled
              ? "bg-sandstorm text-black"
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
