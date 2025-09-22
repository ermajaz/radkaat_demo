"use client";
import { OverlayBike } from "@/types";
import { motion } from "framer-motion";

export default function BikeOverlayDetails({
  details,
}: {
  details: OverlayBike["details"];
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute left-4 top-4 border border-white/20 bg-black/50 backdrop-blur-sm px-6 py-4 rounded shadow-lg pointer-events-auto"
      >
        <h3 className="text-white text-lg font-bold border-b border-yellow-400 pb-2 text-center">
          Specifications
        </h3>
        <table className="text-white mt-3 text-sm w-80">
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-2 font-semibold">📏 Size</td>
              <td className="py-2 text-right">{details.size}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-2 font-semibold">🎨 Color</td>
              <td className="py-2 text-right">{details.color}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-2 font-semibold">📐 Dimension</td>
              <td className="py-2 text-right">{details.dimension}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">⚒ Material</td>
              <td className="py-2 text-right">{details.material}</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
