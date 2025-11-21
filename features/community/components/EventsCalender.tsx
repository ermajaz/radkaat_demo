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
    title: "Spiti Valley Adventure",
    date: "Dec 1, 2025",
    location: "Spiti, HP",
    attendees: 28,
    description:
      "Cold desert rides, monasteries, and challenging routes — Spiti calls the wild-hearted.",
  },
];

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section className="relative py-20 px-6 bg-superblack overflow-hidden">
      {/* 🧊 Background Layers */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#111519] to-[#0a0a0a]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-army/20 via-sandstorm/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rust/10 via-army/10 to-transparent blur-[120px]" />
      </div> */}

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-army tracking-wide drop-shadow-lg">
        Upcoming Events
      </h2>

      {/* 🏍️ Event Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden group border border-white/10 bg-[rgba(15,15,15,0.6)] backdrop-blur-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* Glow sweep on hover */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s]"
            />

            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-bold text-sandstorm">
                {event.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Calendar size={16} className="text-army" /> {event.date}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-sandstorm" />{" "}
                {event.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Users size={16} className="text-rust" /> {event.attendees}{" "}
                Attending
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Join Ride button */}
            <motion.button
              onClick={() => setSelectedEvent(event)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-linear-to-r from-army/90 via-army to-army/90 cursor-pointer px-6 py-2.5 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all"
            >
              Join Ride
              <ArrowRight size={18} />
            </motion.button>

            {/* Gradient glow on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-linear-to-t from-army/10 via-transparent to-transparent transition-all duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* 🎟️ RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-3xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-[rgba(20,20,20,0.85)] border border-white/10 rounded-2xl backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Glow Layer */}
              <motion.div
                className="absolute inset-0 -z-10 bg-linear-to-tr from-army/15 via-transparent to-sandstorm/10 blur-2xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition"
              >
                <X className="w-5 h-5 text-white/70 hover:text-white" />
              </button>

              {/* Event Info */}
              <h3 className="text-2xl font-bold text-army mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-white/70 mb-2 flex items-center gap-2">
                <Calendar size={16} className="text-army" />{" "}
                {selectedEvent.date}
              </p>
              <p className="text-white/70 mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-sandstorm" />{" "}
                {selectedEvent.location}
              </p>
              <p className="text-white/70 mb-4 flex items-center gap-2">
                <Users size={16} className="text-rust" />{" "}
                {selectedEvent.attendees} Attending
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                {selectedEvent.description}
              </p>

              {/* Confirm Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 bg-linear-to-r from-army via-sandstorm to-rust text-black font-semibold rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all"
              >
                Confirm RSVP
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
