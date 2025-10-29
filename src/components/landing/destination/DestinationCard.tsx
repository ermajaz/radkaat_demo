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

// ✅ Fix Leaflet default icon
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

// 🗺️ Animated Polyline
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
        <Star
          key={i}
          className="w-4 h-4 fill-orange-300 text-orange-300"
          strokeWidth={0}
        />
      ))}
    </div>
  );

  const route = useMapboxRoute(destination.source, destination.destination);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (isInView && route && route.length >= 2) {
      setShowMap(true);
    }
  }, [isInView, route]);

  return (
    <div
      ref={ref}
      className="relative h-[430px] w-full flex items-center justify-center"
    >
      <motion.div
        // ✅ No fade or slide animation — instant appearance
        initial={false}
        animate={isInView ? {} : {}}
        className="relative z-10 w-full h-full flex flex-col md:flex-row backdrop-blur-md bg-white/10 shadow-2xl overflow-hidden"
      >
        {/* 🖼️ Left Image */}
        <div className="flex-1 relative h-1/3 md:h-full">
          <Image
            quality={100}
            src={destination.leftImage}
            alt={destination.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 🗺️ Middle Map */}
        <div className="flex-1 relative h-1/3 md:h-full">
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

        {/* 📄 Right Content */}
        <div className="flex-1 flex flex-col p-5 h-1/3 md:h-full overflow-hidden border-2 border-white/10">
          <div className="h-full flex flex-col justify-between overflow-y-auto pr-2">
            <div>
              <h4 className="text-3xl md:text-3xl font-extrabold text-white drop-shadow-xl">
                {destination.title}
              </h4>
              <p className="italic text-green-700 mt-1 text-base">
                “{destination.subtitle}”
              </p>
              <p className="mt-2 text-gray-200 leading-relaxed text-sm md:text-base">
                {destination.description}
              </p>
            </div>

            <div className="w-full mt-6 space-y-4">
              {destination.reviews.slice(0, 3).map((review, idx) => (
                <div key={idx} className="w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-white">
                      {review.category}
                    </p>
                    {renderStars(review.rating)}
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-700 rounded-full"
                      style={{
                        width: `${(review.rating / review.max) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationCard;
