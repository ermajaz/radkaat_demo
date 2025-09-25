"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Shimla Trail Ride",
    date: "Oct 15, 2025",
    location: "Shimla Hills, HP",
    attendees: 34,
    description:
      "A scenic 2-day trail ride through the pine forests of Shimla. Perfect for intermediate riders.",
  },
  {
    id: 2,
    title: "Ladakh Expedition",
    date: "Nov 3, 2025",
    location: "Leh - Khardung La",
    attendees: 56,
    description:
      "The iconic Ladakh ride. Conquer high passes, icy winds, and unmatched landscapes.",
  },
  {
    id: 3,
    title: "Spiti Valley Adventure",
    date: "Dec 1, 2025",
    location: "Spiti, HP",
    attendees: 28,
    description:
      "Cold desert rides, monasteries, and challenging routes — Spiti calls the wild-hearted.",
  },
  {
    id: 4,
    title: "Ladakh Expedition",
    date: "Nov 3, 2025",
    location: "Leh - Khardung La",
    attendees: 56,
    description:
      "The iconic Ladakh ride. Conquer high passes, icy winds, and unmatched landscapes.",
  },
];

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#1a1f2a] to-[#111519]"></div>

        {/* Faint Radial Circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-rust/20 to-sandstorm/20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-teal-400/10 to-sandstorm/20 animate-pulse-slow"></div>

        {/* Optional floating dots / particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{ opacity: [0, 0.2, 0], y: "+=20" }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
              className="absolute w-1 h-1 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm drop-shadow-lg">
        Upcoming Events
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-tr from-[#1a1f2a]/80 to-[#111519]/70 backdrop-blur-md border overflow-hidden border-white/10 rounded-xl p-6 shadow-xl flex flex-col justify-between hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-rust to-sandstorm rounded-t-3xl opacity-70"></div>

              <div className="space-y-4 z-10 relative">
                <h3 className="text-2xl font-bold text-sandstorm drop-shadow-md">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Calendar className="text-rust" size={16} /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="text-sandstorm" size={16} />{" "}
                  {event.location}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Users className="text-teal-400" size={16} />{" "}
                  {event.attendees} Attending
                </div>
                <p className="text-gray-200 text-sm md:text-base mt-2">
                  {event.description}
                </p>
              </div>

              <motion.button
                onClick={() => setSelectedEvent(event)}
                whileHover={{ scale: 1.05, backgroundColor: "#ff6f3c" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rust to-sandstorm px-5 py-2 rounded-xl font-semibold text-white shadow-lg transition-colors duration-300"
              >
                Join Ride <ArrowRight size={18} />
              </motion.button>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111519] rounded-2xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h3 className="text-2xl font-bold text-sandstorm mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <Calendar size={16} className="text-rust" />{" "}
                {selectedEvent.date}
              </p>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-sandstorm" />{" "}
                {selectedEvent.location}
              </p>
              <p className="text-gray-300 mb-4 flex items-center gap-2">
                <Users size={16} className="text-teal-400" />{" "}
                {selectedEvent.attendees} Attending
              </p>
              <p className="text-gray-200 mb-6">{selectedEvent.description}</p>

              <button className="w-full py-3 bg-gradient-to-r from-rust to-sandstorm rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-transform">
                Confirm RSVP
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
