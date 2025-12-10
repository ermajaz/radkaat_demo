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
    <div className="relative w-full">
      {/* HEADER */}
      <h2 className="text-[28px] font-extrabold text-center text-white mb-6">
        Choose Your <span className="text-sandstorm">Bike</span>
      </h2>

      {/* ------------------------------------------------------ */}
      {/* 1. SELECT BIKE — GRID */}
      {/* ------------------------------------------------------ */}
      <section className="mb-10">
        <p className="text-white/60 text-sm px-4 mb-3">Bike Model</p>

        <div className="grid grid-cols-2 gap-5 px-4">
          {bikes.map((bike) => {
            const active = selectedBike?.id === bike.id;

            return (
              <motion.div
                key={bike.id}
                whileTap={{ scale: 0.96 }}
                animate={{ scale: active ? 1.03 : 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setSelectedBike(bike);
                  setVariantGroup("");
                  setColor("");
                  setWheel("");
                  setFrame("");
                }}
                className={`
                  p-4 rounded-3xl backdrop-blur-xl bg-white/5 border
                  ${
                    active
                      ? "border-sandstorm shadow-[0_0_15px_rgba(255,193,110,0.25)]"
                      : "border-white/10"
                  }
                `}
              >
                <Image
                  src={bike.img}
                  alt={bike.name}
                  width={500}
                  height={300}
                  className="w-full h-20 object-contain rounded-xl"
                />

                <p
                  className={`mt-3 text-center text-base font-semibold ${
                    active ? "text-sandstorm" : "text-white/70"
                  }`}
                >
                  {bike.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* 2. VARIANT GROUP — GRID */}
      {/* ------------------------------------------------------ */}
      {selectedBike && (
        <section className="mb-10">
          <p className="text-white/60 text-sm px-4 mb-3">Variant Group</p>

          <div className="grid grid-cols-3 gap-4 px-4">
            {variantGroups.map((vg) => {
              const active = vg === variantGroup;

              return (
                <motion.div
                  key={vg}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setVariantGroup(vg);
                    setColor("");
                  }}
                  className={`
                    py-4 rounded-2xl border bg-white/5 backdrop-blur-xl text-center
                    ${
                      active
                        ? "border-sandstorm shadow-[0_0_15px_rgba(255,193,110,0.25)] text-sandstorm"
                        : "border-white/10 text-white/70"
                    }
                  `}
                >
                  <span className="text-lg font-semibold">{vg}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ */}
      {/* 3. COLOR PICKER — SEPARATE SECTION */}
      {/* ------------------------------------------------------ */}
      {variantGroup && selectedBike && (
        <section className="mb-10">
          <p className="text-white/60 text-sm px-4 mb-3">Color</p>

          <div className="flex gap-5 px-4">
            {selectedBike.colors.map((c) => {
              const active = color === c;
              return (
                <motion.div
                  key={c}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setColor(c)}
                  className="relative"
                >
                  {active && (
                    <div className="absolute -inset-2 rounded-full border border-sandstorm"></div>
                  )}

                  <div
                    className="w-9 h-9 rounded-full border border-white/20"
                    style={{ backgroundColor: c }}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ */}
      {/* 4. WHEEL SIZE — PILL BUTTONS */}
      {/* ------------------------------------------------------ */}
      {color && (
        <section className="px-4 mb-10">
          <p className="text-white/60 text-sm mb-3">Wheel Size</p>

          <div className="flex gap-2 flex-wrap">
            {wheelOptions.map((opt) => {
              const active = wheelSize === opt;

              return (
                <motion.button
                  key={opt}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setWheel(opt)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium
                    ${
                      active
                        ? "bg-sandstorm text-black shadow-md"
                        : "bg-white/10 text-white/70"
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
      {/* 5. FRAME SIZE — PILL BUTTONS */}
      {/* ------------------------------------------------------ */}
      {wheelSize && (
        <section className="px-4 mb-20">
          <p className="text-white/60 text-sm mb-3">Frame Size</p>

          <div className="flex gap-2 flex-wrap">
            {frameOptions.map((fs) => {
              const active = frameSize === fs;

              return (
                <motion.button
                  key={fs}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setFrame(fs)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium
                    ${
                      active
                        ? "bg-sandstorm text-black shadow-md"
                        : "bg-white/10 text-white/70"
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
      {/* CONTINUE BUTTON */}
      {/* ------------------------------------------------------ */}
      <div className="w-full h-full mt-10">
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
            w-full py-6 rounded-full text-lg font-semibold
            flex items-center justify-center gap-2
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
