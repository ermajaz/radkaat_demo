"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Search, Check, MoveRight, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store } from "../types/store.types";
import { stores } from "../../utils/store-data";

interface ChooseStoreProps {
  onNext: (store: { store: Store; date: string; time: string }) => void;
  onBack: () => void;
}

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
];

export default function ChooseStore({ onNext, onBack }: ChooseStoreProps) {
  const [search, setSearch] = useState("");
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Debounced Search
  useEffect(() => {
    const handler = setTimeout(() => {
      const q = search.trim().toLowerCase();
      if (!q) {
        setFilteredStores(stores);
        return;
      }

      setFilteredStores(
        stores.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.city.toLowerCase().includes(q) ||
            s.state.toLowerCase().includes(q) ||
            s.address.toLowerCase().includes(q)
        )
      );
      setSelectedStore(null);
      setSelectedTime("");
      setDate(undefined);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  const handleNext = () => {
    if (!selectedStore || !date || !selectedTime) return;
    onNext({
      store: selectedStore,
      date: date.toDateString(),
      time: selectedTime,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 w-full max-w-6xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-white">
        Choose Your <span className="text-sandstorm">Store</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE – SEARCH + STORE LIST */}
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          {/* Search Bar */}
          <div className="relative">
            <Input
              placeholder="Search by city, state, or store name..."
              className="bg-white/10 text-white pl-12 placeholder:text-white/60 border-white/20 focus:border-sandstorm focus:ring-sandstorm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
          </div>

          {/* Store List */}
          <ScrollArea className="h-[420px] pr-2">
            <div className="space-y-4">
              <AnimatePresence>
                {filteredStores.map((store, i) => (
                  <motion.div
                    key={store.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    onClick={() => setSelectedStore(store)}
                    className={`
                      flex justify-between items-center p-5 rounded-xl border bg-white/5 cursor-pointer transition-all select-none
                      ${
                        selectedStore?.id === store.id
                          ? "border-sandstorm shadow-[0_0_15px_rgba(255,190,80,0.35)] bg-sandstorm/10"
                          : "border-white/10 hover:bg-white/10"
                      }
                    `}
                  >
                    <div>
                      <p className="text-white font-semibold">{store.name}</p>
                      <p className="text-white/60 text-sm">
                        {store.address}, {store.city}, {store.state}
                      </p>
                    </div>

                    {selectedStore?.id === store.id && (
                      <Check className="w-6 h-6 text-sandstorm" />
                    )}
                  </motion.div>
                ))}

                {filteredStores.length === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/60 text-center italic mt-10"
                  >
                    No stores found matching “{search}”
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT SIDE – CALENDAR + TIME SLOTS */}
        <div className="w-full md:w-[40%] flex flex-col items-center gap-6">
          {/* SHOW CALENDAR WHEN STORE SELECTED */}
          {selectedStore ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setSelectedTime("");
              }}
              disabled={(day) => day < new Date()}
              className="w-[320px] rounded-xl border border-sandstorm bg-white/5 text-white shadow-md p-3 backdrop-blur-xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-60">
              <p className="text-white/50 text-sm">
                Select a store to choose an available date.
              </p>
            </div>
          )}

          {/* TIME SLOTS */}
          {selectedStore && date && (
            <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
              <p className="text-white/80 text-sm mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sandstorm" /> Select a Time Slot
              </p>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <div
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`
                      text-center py-3 text-xs rounded-lg border cursor-pointer transition-all
                      ${
                        selectedTime === slot
                          ? "bg-sandstorm text-black border-sandstorm shadow-lg"
                          : "bg-white/10 text-white hover:bg-white/20 border-white/10"
                      }
                    `}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/30 text-black w-full md:w-auto rounded-full cursor-pointer"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!selectedStore || !date || !selectedTime}
          className={`
            py-3 px-8 font-semibold rounded-full cursor-pointer flex items-center gap-2 w-full md:w-auto transition-all
            ${
              selectedStore && date && selectedTime
                ? "bg-sandstorm text-black"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next <MoveRight />
        </Button>
      </div>
    </motion.div>
  );
}
