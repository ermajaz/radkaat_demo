"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  bike: { id?: number; name: string; img: string } | null;
  variant: { wheelSize?: string; frameSize?: string };
  variantGroup: string;
  color: string;
  rider: { id?: number; name: string; img: string; phone?: string } | null;
  date: string;
  timeWindow?: string;
  onClose?: () => void;
}

export default function MobileRideDetailsSummary({
  bike,
  variant,
  variantGroup,
  color,
  rider,
  date,
  timeWindow = "9:00 AM - 5:00 PM",
  onClose,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full min-h-screen text-white relative"
    >
      {/* Page Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-[28px] font-extrabold text-center mb-10 tracking-tight"
      >
        Ride <span className="text-sandstorm">Summary</span>
      </motion.h2>

      {/* ---------------------------------------------------------------- */}
      {/* GLASS PASS CARD (Apple Wallet Style) */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          rounded-[28px] p-6 mb-8
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_35px_rgba(255,193,110,0.1)]
        "
      >
        {/* Section Label */}
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
          Bike Details
        </p>

        <div className="flex gap-4 items-center">
          {/* BIKE IMAGE */}
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-black/30 border border-white/10 p-2 flex items-center justify-center">
            <Image
              src={bike?.img || "/images/dummy-cycle.png"}
              alt={bike?.name || "Bike"}
              fill
              className="object-contain"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">
            <p className="text-lg font-semibold">{bike?.name}</p>

            {/* Variant */}
            <div className="mt-2 flex items-center gap-2 text-white/70 text-sm">
              Variant Group:
              <span className="text-sandstorm font-semibold">{variantGroup}</span>

              {/* Color Dot */}
              <span
                className="w-3 h-3 rounded-full border border-white/30"
                style={{ backgroundColor: color }}
              />
            </div>

            {/* Sizes */}
            <div className="flex gap-4 mt-2 text-sm">
              <div className="flex gap-1 text-white/50">
                Wheel:
                <span className="text-sandstorm font-medium">
                  {variant.wheelSize}
                </span>
              </div>
              <div className="flex gap-1 text-white/50">
                Frame:
                <span className="text-sandstorm font-medium">
                  {variant.frameSize}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* DATE + TIME PASS */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="
    rounded-[28px] p-6 mb-8
    bg-white/5 backdrop-blur-2xl
    border border-white/10
    shadow-[0_0_35px_rgba(255,193,110,0.1)]
  "
      >
        {/* Section Label */}
        <p className="text-white/50 text-xs uppercase tracking-wider mb-4">
          Schedule
        </p>

        {/* Date + Time */}
        <div className="flex flex-col gap-4">

          {/* DATE */}
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">Date</p>
            <p className="font-semibold text-base text-white">{date}</p>
          </div>

          {/* Divider (iOS subtle line) */}
          <div className="w-full h-px bg-white/10" />

          {/* TIME WINDOW */}
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">Time Window</p>
            <p className="font-semibold text-base text-white">{timeWindow}</p>
          </div>

        </div>
      </motion.div>


      {/* ---------------------------------------------------------------- */}
      {/* RIDER INFO */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          rounded-[28px] p-6 mb-10
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_35px_rgba(255,193,110,0.12)]
        "
      >
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
          Rider
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 bg-black/30">
            {rider?.img ? (
              <Image src={rider.img} fill alt={rider.name} className="object-cover" />
            ) : (
              <div className="w-full h-full bg-white/10" />
            )}
          </div>

          <div>
            <p className="font-semibold text-lg">{rider?.name ?? "—"}</p>
            <p className="text-white/60 text-sm mt-1">Assigned Rider</p>
          </div>
        </div>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* ACTION BUTTONS */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-4"
      >
        {/* CALL RIDER */}
        <Button
          disabled={!rider?.phone}
          onClick={() => rider?.phone && window.open(`tel:${rider.phone}`)}
          className="
            w-full py-6 rounded-full 
            bg-white/10 text-white border border-white/15
            font-medium text-base
            hover:bg-white/20 disabled:opacity-50
          "
        >
          Call Rider
        </Button>

        {/* CLOSE */}
        <Button
          onClick={onClose}
          className="
            w-full py-6 rounded-full 
            bg-sandstorm text-black 
            font-semibold text-base
            hover:bg-sandstorm/85
          "
        >
          Close
        </Button>
      </motion.div>
    </motion.div>
  );
}
