"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Destination } from "@/types";
import { Star } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useMapboxRoute } from "@/hooks/useMapboxRoute";
import { Button } from "@/components/ui/button";

interface Props {
  destination: Destination;
  isActive?: boolean; // 👈 NEW prop for active styling
}

interface LatLng {
  lat: number;
  lng: number;
}

// ✅ Fix Leaflet marker icons
const defaultIcon = L.icon({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = defaultIcon;

// 🗺️ Animated Polyline Component
const AnimatedPolyline = ({
  positions,
  isInView,
}: {
  positions: LatLng[];
  isInView: boolean;
}) => {
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

    if (positions.length >= 2) {
      try {
        const bounds = positions.map((p) => [p.lat, p.lng]) as [
          number,
          number
        ][];
        map.fitBounds(bounds, { padding: [40, 40] });
      } catch (err) {
        console.warn("Invalid map bounds:", err);
      }
    }

    return () => clearInterval(interval);
  }, [isInView, positions, map]);

  if (!positions || positions.length < 2) return null;
  return <Polyline positions={animatedPath} color="#10B981" weight={4} />;
};

// 🌍 Main Destination Card
const DestinationCard: React.FC<Props> = ({ destination, isActive }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const route = useMapboxRoute(destination.source, destination.destination);
  const [showMap, setShowMap] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isInView && route && route.length >= 2) {
      setShowMap(true);
    }
  }, [isInView, route]);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-orange-300 text-orange-300"
          strokeWidth={0}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={() =>
        window.open(`${destination?.link}`, "_blank")
      }
      className={`relative w-[800px] mx-auto h-[430px] cursor-pointer flex overflow-hidden shadow-2xl group transition-all duration-500 
        ${isActive ? "bg-[#1A1A1A] border-white/30" : "bg-transparent border-white/10"} border`}
    >
      {/* 🖼️ Left Section */}
      <div className="relative flex-1 h-full overflow-hidden">
        <Image
          src={destination.leftImage}
          alt={destination.title}
          fill
          quality={100}
          className={`object-cover transition-all duration-700 ${hovered ? "scale-105 brightness-[0.55]" : "brightness-[0.7]"
            }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
          <h4 className="text-3xl font-extrabold text-white drop-shadow-lg">
            {destination.title}
          </h4>
          <p className="italic text-green-400 mt-1 text-sm">
            “{destination.subtitle}”
          </p>
          <p className="mt-2 text-gray-200 leading-relaxed text-xs md:text-sm line-clamp-3">
            {destination.description}
          </p>

          {/* ⭐ Ratings */}
          <div className="w-full mt-3 space-y-2">
            {destination.reviews.slice(0, 3).map((review, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">
                    {review.category}
                  </p>
                  {renderStars(review.rating)}
                </div>
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{
                      width: `${(review.rating / review.max) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✨ View Story Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-6 right-6"
        >
          <Button
            className="px-4 py-2 text-sm font-semibold rounded-none text-white border border-white/50 cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/70 hover:scale-105 transition-all duration-300"
            onClick={() =>
              window.open(`${destination?.link}`, "_blank")
            }
          >
            View Story
          </Button>
        </motion.div>
      </div>

      {/* 🗺️ Right Section - Map */}
      <div className="flex-1 relative h-full">
        {showMap && (
          <MapContainer
            key={`${destination.id}`}
            zoom={7}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <AnimatedPolyline positions={route} isInView={isInView} />
            <Marker position={route[0]} />
            <Marker position={route[route.length - 1]} />
          </MapContainer>
        )}
      </div>
    </motion.div>
  );
};

export default DestinationCard;
