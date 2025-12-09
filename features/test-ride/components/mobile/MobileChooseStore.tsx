"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Check, Clock, MoveRight } from "lucide-react";

import { Store } from "../types/store.types";
import { stores } from "../../utils/store-data";

interface Props {
  onNext: (payload: { store: Store; date: string; time: string }) => void;
  onBack: () => void;
}

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
];

export default function MobileChooseStore({ onNext, onBack }: Props) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Store[]>(stores);
  const [store, setStore] = useState<Store | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");

  /* ---------------------------- Search Debounce ---------------------------- */
  useEffect(() => {
    const t = setTimeout(() => {
      const q = search.toLowerCase().trim();
      if (!q) return setFiltered(stores);
      setFiltered(
        stores.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.city.toLowerCase().includes(q) ||
            s.state.toLowerCase().includes(q)
        )
      );
      setStore(null);
      setDate(undefined);
      setTime("");
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  /* --------------------------------- Submit -------------------------------- */
  const handleNext = () => {
    if (!store || !date || !time) return;
    onNext({
      store,
      date: date.toDateString(),
      time,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0.6, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-full pt-30"
    >
      {/* ---------------------------------------------------------- */}
      {/* TITLE */}
      {/* ---------------------------------------------------------- */}
      <h2 className="text-[26px] font-extrabold text-center text-white mb-6 tracking-tight leading-snug">
        Choose Your <span className="text-sandstorm">Store</span>
      </h2>

      {/* ---------------------------------------------------------- */}
      {/* SEARCH BAR (Floating iOS Input) */}
      {/* ---------------------------------------------------------- */}
      <div className="sticky top-0 z-20 mb-4 bg-superblack/60 backdrop-blur-xl py-2">
        <div className="relative">
          <Input
            placeholder="Search city, store name..."
            className="
              bg-white/10 border border-white/10 text-white 
              placeholder:text-white/50 
              pl-12 py-3 rounded-2xl shadow-inner
              focus:ring-sandstorm/60 focus:border-sandstorm
              transition-all
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* STORE LIST – Apple Card Style */}
      {/* ---------------------------------------------------------- */}
      <ScrollArea className={`rounded-2xl pr-2 ${store ? "h-[250px]" : "h-[75vh]"}`}>
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => {
              const active = store?.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStore(item)}
                  className={`
                    p-4 rounded-3xl backdrop-blur-xl cursor-pointer border
                    transition-all flex justify-between items-center
                    ${
                      active
                        ? "bg-sandstorm/10 border-sandstorm shadow-[0_0_25px_rgba(255,193,110,0.35)]"
                        : "bg-white/5 border-white/10"
                    }
                  `}
                >
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-white/60 text-xs leading-tight mt-1">
                      {item.address}, {item.city}, {item.state}
                    </p>
                  </div>

                  {active && <Check className="text-sandstorm w-5 h-5" />}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-white/50 text-center mt-10 text-sm italic">
              No matching stores found
            </p>
          )}
        </div>
      </ScrollArea>

      {/* ---------------------------------------------------------- */}
      {/* CALENDAR – Minimal iOS style */}
      {/* ---------------------------------------------------------- */}
      <div className="w-full mt-8 flex flex-col items-center">
        {store && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setTime("");
              }}
              disabled={(d) => d < new Date()}
              className="
                w-full rounded-3xl bg-white/5 border border-white/10
                text-white shadow-lg p-4 backdrop-blur-xl
              "
            />
          </motion.div>
        )}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* TIME SLOTS – Soft iOS Grid */}
      {/* ---------------------------------------------------------- */}
      {store && date && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 bg-white/5 rounded-3xl border border-white/10 p-5 backdrop-blur-xl"
        >
          <p className="text-white/70 text-sm mb-3 flex items-center gap-2">
            <Clock size={16} className="text-sandstorm" /> Select Time Slot
          </p>

          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot) => {
              const active = slot === time;
              return (
                <motion.div
                  key={slot}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTime(slot)}
                  className={`
                    text-center py-3 text-xs rounded-xl border cursor-pointer
                    transition-all font-medium
                    ${
                      active
                        ? "bg-sandstorm text-black border-sandstorm shadow-md"
                        : "bg-white/10 text-white/70 border-white/10"
                    }
                  `}
                >
                  {slot}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------------- */}
      {/* FLOATING BOTTOM CTA */}
      {/* ---------------------------------------------------------- */}
      <div className=" w-full flex items-center gap-3 mt-10">
        {/* Back button */}
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

        {/* Next button */}
        <Button
          disabled={!store || !date || !time}
          onClick={handleNext}
          className={`
            flex-1 py-4 rounded-full text-lg font-semibold 
            flex items-center justify-center gap-2
            ${
              store && date && time
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
