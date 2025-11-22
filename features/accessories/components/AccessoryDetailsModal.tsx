"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";
import { AccessoryDetails } from "../types/accessories-details.types";

interface Props {
  open: boolean;
  onClose: () => void;
  data: AccessoryDetails | null;
}

export default function AccessoryDetailsModal({ open, onClose, data }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-200"
          />

          <motion.div
            className="fixed inset-0 z-210 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="bg-[#0C0C0C] border border-white/10 max-w-md w-full overflow-hidden shadow-xl">
              <div className="relative h-56">
                <Image src={data.image} alt={data.name} fill className="object-contain p-4" />
                <X onClick={onClose} className="absolute top-4 right-4 text-white cursor-pointer" />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <p className="text-neutral-300 text-sm">{data.description}</p>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.features.map((f) => (
                      <span key={f} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded-sm text-neutral-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MATERIALS */}
                <div className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-300">Materials:</span>{" "}
                  {data.materials}
                </div>

                {/* CARE */}
                <div className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-300">Care:</span>{" "}
                  {data.care}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
