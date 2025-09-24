"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

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
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
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
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-rust to-sandstorm rounded-t-3xl opacity-70"></div>

              {/* Title & Info */}
              <div className="space-y-4 z-10 relative">
                <h3 className="text-2xl font-bold text-sandstorm drop-shadow-md">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Calendar className="text-rust" size={16} /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="text-sandstorm" size={16} /> {event.location}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Users className="text-teal-400" size={16} /> {event.attendees} Attending
                </div>
                <p className="text-gray-200 text-sm md:text-base mt-2">
                  {event.description}
                </p>
              </div>

              {/* RSVP Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ff6f3c" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rust to-sandstorm px-5 py-2 rounded-xl font-semibold text-white shadow-lg transition-colors duration-300"
              >
                Join Ride <ArrowRight size={18} />
              </motion.button>

              {/* Optional hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
