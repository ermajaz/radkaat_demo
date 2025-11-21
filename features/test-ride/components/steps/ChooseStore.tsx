"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Search, Check, MoveRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store } from "../types/store.types";
import { stores } from "../../utils/store-data";

interface ChooseStoreProps {
  onNext: (store: { store: Store; date: string }) => void;
  onBack: () => void;
}

export default function ChooseStore({ onNext, onBack }: ChooseStoreProps) {
  const [search, setSearch] = useState("");
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      const input = search.trim().toLowerCase();
      if (!input) {
        setFilteredStores(stores);
        return;
      }
      const matches = stores.filter(
        (s) =>
          s.name.toLowerCase().includes(input) ||
          s.city.toLowerCase().includes(input) ||
          s.state.toLowerCase().includes(input) ||
          s.address.toLowerCase().includes(input)
      );
      setFilteredStores(matches);
      setSelectedStore(null);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const useCurrentLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported.");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let nearest = stores[0];
        let minDist = Infinity;
        stores.forEach((s) => {
          const dist = Math.hypot(s.lat - latitude, s.lng - longitude);
          if (dist < minDist) {
            nearest = s;
            minDist = dist;
          }
        });
        setSearch(nearest.city);
        setFilteredStores([nearest]);
        setSelectedStore(nearest);
      },
      () => alert("Unable to get location.")
    );
  };

  const handleNext = () => {
    if (!selectedStore || !date) return;
    onNext({ store: selectedStore, date: date.toDateString() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 w-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold text-white text-center">
        Choose Your Store
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left: Search + Store List */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Search by city, state, or store name..."
                className="bg-white/10 text-white pl-10 focus:ring-rust focus:border-rust placeholder:text-white/60"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
            </div>
            <Button
              variant="secondary"
              onClick={useCurrentLocation}
              className="bg-rust hover:bg-rust text-white flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" /> My Location
            </Button>
          </div>

          {/* Store List */}
          <ScrollArea className="h-[400px] w-full pr-1">
            <div className="space-y-3">
              <AnimatePresence>
                {filteredStores.length > 0 ? (
                  filteredStores.map((store, i) => (
                    <motion.div
                      key={store.id}
                      initial={i === 0 ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: i === 0 ? 0 : i * 0.05 }}
                      onClick={() => setSelectedStore(store)}
                      className={`flex justify-between items-center p-4 rounded-xl cursor-pointer border-2 transition-all ${
                        selectedStore?.id === store.id
                          ? "border-rust bg-rust/20 shadow-lg"
                          : "border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-white">{store.name}</p>
                        <p className="text-white/70 text-sm">
                          {store.address}, {store.city}, {store.state}
                        </p>
                      </div>
                      {selectedStore?.id === store.id && (
                        <Check className="w-6 h-6 text-rust" />
                      )}
                    </motion.div>
                  ))
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/60 italic mt-4"
                  >
                    No stores found for “{search}”
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
        </div>

        {/* Right: Calendar */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <p className="mb-2 text-white/80 font-medium self-start md:self-end">
            Select a Date
          </p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(day) => day < new Date()}
            className="rounded-xl border border-rust bg-white/5 text-white shadow-md p-2"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/40 bg-transparent text-white w-full cursor-pointer rounded-full md:w-auto"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedStore || !date}
          className={`py-3 px-6 font-semibold w-full rounded-full md:w-auto transition-colors duration-300 ${
            selectedStore && date
              ? "bg-linear-to-r from-rust to-rust/80 hover:scale-110 hover:shadow-2xl transition-transform cursor-pointer text-white"
              : "bg-gray-700 text-gray cursor-not-allowed"
          }`}
        >
          Next <MoveRight />
        </Button>
      </div>
    </motion.div>
  );
}
