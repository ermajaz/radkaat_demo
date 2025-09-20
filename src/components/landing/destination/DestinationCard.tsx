"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Destination } from "@/types";
import { Star } from "lucide-react";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useMapboxRoute } from "@/hooks/useMapboxRoute";

// ✅ Fix Leaflet default icon (no any, type safe)
const defaultIcon = L.icon({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});
L.Marker.prototype.options.icon = defaultIcon;

interface Props {
  destination: Destination;
}

interface LatLng {
  lat: number;
  lng: number;
}

// Animated Polyline component
const AnimatedPolyline = ({ positions, isInView }: { positions: LatLng[]; isInView: boolean }) => {
  const [animatedPath, setAnimatedPath] = useState<LatLng[]>([]);
  const map = useMap();

  useEffect(() => {
    if (!isInView || !positions || positions.length < 2) return;

    let i = 0;
    const interval = setInterval(() => {
      setAnimatedPath(positions.slice(0, i + 1));
      i++;
      if (i >= positions.length) clearInterval(interval);
    }, 100);

    // Fit bounds safely
    if (positions.length >= 2) {
      try {
        const bounds = positions.map((p) => [p.lat, p.lng]) as [number, number][];
        map.fitBounds(bounds, { padding: [50, 50] });
      } catch (err) {
        console.warn("Invalid bounds:", err);
      }
    }

    return () => clearInterval(interval);
  }, [isInView, positions, map]);

  if (!positions || positions.length < 2) return null;
  return <Polyline positions={animatedPath} color="#10B981" weight={5} />;
};

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  // Route state
  const route = useMapboxRoute(destination.source, destination.destination);
  const [showMap, setShowMap] = useState(false);

  // Only show map when card in view and route ready
  useEffect(() => {
    if (isInView && route && route.length >= 2) {
      setShowMap(true);
    }
  }, [isInView, route]);

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image src={destination.leftImage} alt={destination.title} fill className="object-cover absolute inset-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Left: Map */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 h-96 md:h-auto relative"
        >
          {showMap && (
            <MapContainer
              key={`${destination.id}-${destination.source.lat}-${destination.source.lng}-${destination.destination.lat}-${destination.destination.lng}`}
              center={route[0]}
              zoom={7}
              scrollWheelZoom={false}
              className="w-full h-full rounded-l-2xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <AnimatedPolyline positions={route} isInView={isInView} />
              <Marker position={route[0]} />
              <Marker position={route[route.length - 1]} />
            </MapContainer>
          )}
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 flex flex-col justify-center p-6 md:p-10"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-xl">{destination.title}</h1>
          <p className="italic text-emerald-400 mt-3 text-lg md:text-xl">“{destination.subtitle}”</p>
          <p className="mt-6 text-gray-200 leading-relaxed text-sm md:text-base">{destination.description}</p>

          <div className="w-full mt-8 space-y-6">
            {destination.reviews.map((review, idx) => (
              <div key={idx} className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-white">{review.category}</p>
                  {renderStars(review.rating)}
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${(review.rating / review.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DestinationCard;
