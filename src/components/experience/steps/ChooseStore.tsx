"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Search, ChevronRight } from "lucide-react";
import { Store } from "@/types";
import { stores } from "@/utils/data";

interface ChooseStoreProps {
  onNext: (store: { name: string; date: string }) => void;
  onBack: () => void;
}

export default function ChooseStore({ onNext, onBack }: ChooseStoreProps) {
  const [search, setSearch] = useState("");
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const input = search.trim().toLowerCase();
      if (!input) {
        setFilteredStores([]);
        setSelectedStore(null);
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
    }, 250);
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
    onNext({ name: selectedStore.name, date: date.toDateString() });
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

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Left: Search + Stores */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Enter city, state, store name..."
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

          {filteredStores.length > 0 && (
            <div className="space-y-2 mt-2 max-h-[400px] overflow-y-auto">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors border-2 ${
                    selectedStore?.id === store.id
                      ? "border-rust bg-rust/20"
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
                    <ChevronRight className="w-5 h-5 text-rust" />
                  )}
                </div>
              ))}
            </div>
          )}
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
            className="rounded-xl border border-rust bg-white/5 text-white shadow-md p-2"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/40 text-white w-full cursor-pointer md:w-auto"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedStore || !date}
          className={`py-3 px-6 font-semibold w-full md:w-auto transition-colors duration-300 ${
            selectedStore && date
              ? "bg-rust hover:bg-rust cursor-pointer text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
