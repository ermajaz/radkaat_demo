"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Search,
  Check,
  MoveRight,
  Clock,
  LocateFixed,
  MapPin,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store } from "../types/store.types";
import { stores } from "../../utils/store-data";

/* ---------------------------------------------
   Types
--------------------------------------------- */
type StoreWithDistance = Store & {
  distance?: number;
};

/* ---------------------------------------------
   Dummy Booking Data (Later from API)
--------------------------------------------- */
const bookedDatesByStore: Record<number, string[]> = {
  0: ["2026-02-02", "2026-02-05"],
  1: ["2026-02-01", "2026-02-03"],
};

const bookedSlotsByStoreAndDate: Record<
  number,
  Record<string, string[]>
> = {
  0: {
    "2026-02-04": ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"],
  },
  1: {
    "2026-02-06": ["12:00 PM - 1:00 PM"],
  },
};

/* ---------------------------------------------
   Utils
--------------------------------------------- */
const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const formatDateKey = (date: Date) => date.toISOString().split("T")[0];

/* --------------------------------------------- */

interface ChooseStoreProps {
  onNext: (store: {
    store: Store;
    date: string;
    time: string;
    lat: number;
    lng: number;
  }) => void;
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
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState<StoreWithDistance | null>(
    null
  );

  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [useLocationMode, setUseLocationMode] = useState(false);

  /* ---------------------------------------------
     States list
  --------------------------------------------- */
  const states = useMemo(() => {
    return Array.from(new Set(stores.map((s) => s.state)));
  }, []);

  /* ---------------------------------------------
     Get user location
  --------------------------------------------- */
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setUseLocationMode(true);
        setSelectedState(null);
        setSearch("");
        setSelectedStore(null);
      },
      () => alert("Location permission denied"),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  /* ---------------------------------------------
     Build visible store list
  --------------------------------------------- */
  const visibleStores: StoreWithDistance[] = useMemo(() => {
    let list: StoreWithDistance[] = [...stores];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q)
      );
    } else if (selectedState) {
      list = list.filter((s) => s.state === selectedState);
    } else if (useLocationMode && userLocation) {
      list = list.map((s) => ({
        ...s,
        distance: haversineDistance(
          userLocation.lat,
          userLocation.lng,
          s.lat,
          s.lng
        ),
      }));
    } else {
      return [];
    }

    if (userLocation) {
      list = list
        .map((s) => ({
          ...s,
          distance:
            s.distance ??
            haversineDistance(
              userLocation.lat,
              userLocation.lng,
              s.lat,
              s.lng
            ),
        }))
        .sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
    }

    return list;
  }, [search, selectedState, useLocationMode, userLocation]);

  /* ---------------------------------------------
     Helpers for booking
  --------------------------------------------- */
  const isDateBooked = (d: Date) => {
    if (!selectedStore) return false;
    const key = formatDateKey(d);
    return bookedDatesByStore[selectedStore.id]?.includes(key);
  };

  const getBookedSlotsForDate = (d: Date) => {
    if (!selectedStore) return [];
    const key = formatDateKey(d);
    return bookedSlotsByStoreAndDate[selectedStore.id]?.[key] || [];
  };

  /* --------------------------------------------- */
  const handleNext = () => {
    if (!selectedStore || !date || !selectedTime) return;

    onNext({
      store: selectedStore,
      date: date.toDateString(),
      time: selectedTime,
      lat: selectedStore.lat,
      lng: selectedStore.lng,
    });
  };

  /* --------------------------------------------- */

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8 w-full max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-white">
        Choose Your <span className="text-sandstorm">Store</span>
      </h2>

      {/* ================= LOCATION MODE ================= */}
      <div className="w-full flex flex-col gap-4">

        <div className="w-full flex gap-5">
          {/* Search */}
          <div className="w-1/2 relative">
            <Input
              placeholder="Search city or store..."
              className="bg-white/10 text-white pl-12"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedState(null);
                setUseLocationMode(false);
                setSelectedStore(null);
              }}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
          </div>

          {/* Use location */}
          <Button
            onClick={getCurrentLocation}
            className="bg-army cursor-pointer text-white border border-white/20 hover:bg-white/20 flex gap-2"
          >
            <LocateFixed size={18} /> Use My Current Location
          </Button>
        </div>
        {/* State grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => {
                setSelectedState(state);
                setUseLocationMode(false);
                setSearch("");
                setSelectedStore(null);
              }}
              className={`
                p-2 rounded-sm border text-sm transition-all
                ${selectedState === state
                  ? "bg-sandstorm text-black border-sandstorm text-sm"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }
              `}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8">

        {/* ================= STORE LIST ================= */}
        <div className="bg-black/30 border border-white/10 rounded-sm p-4">
          {visibleStores.length === 0 ? (
            <div className="h-[420px] flex items-center justify-center text-white/50 text-sm">
              Select a state, search, or use your location to see stores.
            </div>
          ) : (
            <ScrollArea className="h-[420px] pr-2">
              <div className="space-y-4">
                <AnimatePresence>
                  {visibleStores.map((store, idx) => (
                    <motion.div
                      key={store.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => {
                        setSelectedStore(store);
                        setDate(undefined);
                        setSelectedTime("");
                      }}
                      className={`
                        p-5 rounded-sm border cursor-pointer transition-all
                        ${selectedStore?.id === store.id
                          ? "border-sandstorm bg-sandstorm/10 shadow-lg"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                        }
                      `}
                    >
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-white font-semibold">
                            {store.name}
                          </p>
                          <p className="text-white/60 text-sm">
                            {store.address}, {store.city}
                          </p>

                          {store.distance !== undefined && (
                            <p className="text-sandstorm text-xs mt-1">
                              {store.distance.toFixed(1)} km away
                              {idx === 0 && useLocationMode && " • Nearest"}
                            </p>
                          )}
                        </div>

                        {selectedStore?.id === store.id && (
                          <Check className="text-sandstorm shrink-0" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>
          )}
        </div>

        {/* ================= CALENDAR + TIME ================= */}
        <div className="bg-black/30 border border-white/10 rounded-sm p-5 flex flex-col gap-6">

          {/* Calendar */}
          {selectedStore ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setSelectedTime("");
              }}
              disabled={(day) => {
                if (day < new Date()) return true;
                return isDateBooked(day);
              }}
              className="rounded-sm border border-sandstorm bg-white/5"
            />
          ) : (
            <div className="h-[300px] flex items-center justify-center text-white/50 text-sm border border-white/10 rounded-sm">
              Select a store to see available dates
            </div>
          )}

          {/* Time slots */}
          {selectedStore && date && (
            <div>
              <p className="text-white/80 text-sm mb-3 flex items-center gap-2">
                <Clock size={16} className="text-sandstorm" /> Select Time Slot
              </p>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => {
                  const booked = getBookedSlotsForDate(date).includes(slot);

                  return (
                    <div
                      key={slot}
                      onClick={() => {
                        if (!booked) setSelectedTime(slot);
                      }}
                      className={`
                        text-center py-3 text-xs rounded-sm border transition-all
                        ${booked
                          ? "bg-white/5 text-white/30 border-white/10 cursor-not-allowed line-through"
                          : selectedTime === slot
                            ? "bg-sandstorm text-black border-sandstorm"
                            : "bg-white/10 text-white border-white/10 hover:bg-white/20 cursor-pointer"
                        }
                      `}
                    >
                      {slot}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex justify-between gap-4 pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-white/20 text-black"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!selectedStore || !date || !selectedTime}
          className={`
            flex items-center gap-2 px-8
            ${selectedStore && date && selectedTime
              ? "bg-sandstorm text-black"
              : "bg-gray-700 text-gray-400"
            }
          `}
        >
          Next <MoveRight />
        </Button>
      </div>
    </motion.div>
  );
}
