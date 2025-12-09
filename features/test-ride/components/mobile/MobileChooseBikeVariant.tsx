"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------
   Types
------------------------------------------------------------ */
interface Bike {
  id: number;
  name: string;
  img: string;
  colors: string[];
}

interface Props {
  onNext: (selection: {
    bike: Bike;
    variantGroup: string;
    color: string;
    variant: { wheelSize: string; frameSize: string };
  }) => void;
}

/* ------------------------------------------------------------
   Data
------------------------------------------------------------ */
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

/* ------------------------------------------------------------
   Component
------------------------------------------------------------ */
export default function MobileChooseBikeVariant({ onNext }: Props) {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [variantGroup, setVariantGroup] = useState("");
  const [color, setColor] = useState("");
  const [wheelSize, setWheel] = useState("");
  const [frameSize, setFrame] = useState("");

  const nextEnabled =
    selectedBike && variantGroup && color && wheelSize && frameSize;

  return (
    <div className="relative w-full h-full pt-30">
      {/* HEADER */}
      <h2 className="text-[28px] font-extrabold text-center text-white mb-6 leading-snug">
        Choose Your <span className="text-sandstorm">Bike</span>
      </h2>

      {/* ------------------------------------------------------ */}
      {/* 1. BIKE SELECT – iOS Style Carousel */}
      {/* ------------------------------------------------------ */}
      <section className="mb-12">
        <p className="text-white/60 text-sm mb-4 font-medium px-2">
          Select Bike
        </p>

        <motion.div
          drag="x"
          dragElastic={0.12}
          dragConstraints={{ left: -250, right: 250 }}
          className="flex overflow-x-auto hide-scrollbar gap-5 px-4"
        >
          {bikes.map((bike) => {
            const active = selectedBike?.id === bike.id;

            return (
              <motion.div
                key={bike.id}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setSelectedBike(bike);
                  setVariantGroup("");
                  setColor("");
                  setWheel("");
                  setFrame("");
                }}
                className={`
                  min-w-[150px] h-[150px]
                  p-4 rounded-[30px]
                  backdrop-blur-xl 
                  bg-white/5 border 
                  transition-all
                  ${
                    active
                      ? "border-sandstorm shadow-[0_4px_40px_rgba(255,193,110,0.25)]"
                      : "border-white/10"
                  }
                `}
              >
                <motion.div
                  animate={{ y: active ? -4 : 0 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={bike.img}
                    alt={bike.name}
                    width={420}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <p
                    className={`
                      mt-4 text-lg font-semibold text-center tracking-tight
                      ${
                        active
                          ? "text-sandstorm"
                          : "text-white/70"
                      }
                    `}
                  >
                    {bike.name}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* 2. VARIANT GROUP SELECT – Glass Cards */}
      {/* ------------------------------------------------------ */}
      {selectedBike && (
        <section className="mb-12">
          <p className="text-white/60 text-sm mb-4 px-2 font-medium">
            Select Variant
          </p>

          <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar">
            {variantGroups.map((vg) => {
              const active = vg === variantGroup;

              return (
                <motion.div
                  key={vg}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setVariantGroup(vg);
                    setColor("");
                  }}
                  className={`
                    min-w-[130px]
                    p-4 rounded-2xl
                    border backdrop-blur-xl bg-white/5
                    transition-all select-none
                    ${
                      active
                        ? "border-sandstorm shadow-[0_4px_30px_rgba(255,193,110,0.25)]"
                        : "border-white/10"
                    }
                  `}
                >
                  <Image
                    src={selectedBike.img}
                    alt={selectedBike.name}
                    width={160}
                    height={90}
                    className="rounded-xl mx-auto mb-3"
                  />

                  <p
                    className={`
                      text-[17px] font-semibold text-center
                      ${
                        active ? "text-sandstorm" : "text-white/70"
                      }
                    `}
                  >
                    {vg}
                  </p>

                  {/* Color Chips */}
                  <div className="flex justify-center gap-2 mt-3">
                    {selectedBike.colors.map((c) => {
                      const selected = color === c;
                      return (
                        <motion.div
                          key={c}
                          whileTap={{ scale: 0.8 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setColor(c);
                          }}
                          className="relative"
                        >
                          {selected && (
                            <div className="absolute -inset-1 rounded-full border border-white"></div>
                          )}

                          <div
                            className="w-4 h-4 rounded-full border border-white/30"
                            style={{ backgroundColor: c }}
                          ></div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ */}
      {/* 3. WHEEL SIZE */}
      {/* ------------------------------------------------------ */}
      {variantGroup && (
        <section className="px-4 mb-10">
          <p className="text-white/60 text-sm mb-3 font-medium">
            Wheel Size
          </p>

          <div className="flex gap-2 flex-wrap">
            {wheelOptions.map((opt) => {
              const active = wheelSize === opt;

              return (
                <motion.button
                  key={opt}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setWheel(opt)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all
                    ${
                      active
                        ? "bg-sandstorm text-black shadow-md"
                        : "bg-white/10 text-white/80"
                    }
                  `}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ */}
      {/* 4. FRAME SIZE */}
      {/* ------------------------------------------------------ */}
      {wheelSize && (
        <section className="px-4 mb-20">
          <p className="text-white/60 text-sm mb-3 font-medium">
            Frame Size
          </p>

          <div className="flex gap-2 flex-wrap">
            {frameOptions.map((fs) => {
              const active = frameSize === fs;

              return (
                <motion.button
                  key={fs}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setFrame(fs)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all
                    ${
                      active
                        ? "bg-sandstorm text-black shadow-md"
                        : "bg-white/10 text-white/80"
                    }
                  `}
                >
                  {fs}
                </motion.button>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ */}
      {/* CONTINUE — Floating iOS Button */}
      {/* ------------------------------------------------------ */}
      <div className="w-full mt-10">
        <Button
          disabled={!nextEnabled}
          onClick={() =>
            selectedBike &&
            onNext({
              bike: selectedBike,
              variantGroup,
              color,
              variant: { wheelSize, frameSize },
            })
          }
          className={`
            w-full py-4 rounded-full text-lg font-semibold
            flex items-center justify-center gap-2
            transition-all
            ${
              nextEnabled
                ? "bg-sandstorm text-black shadow-lg"
                : "bg-white/10 text-white/40"
            }
          `}
        >
          Continue <MoveRight size={18} />
        </Button>
      </div>
    </div>
  );
}
