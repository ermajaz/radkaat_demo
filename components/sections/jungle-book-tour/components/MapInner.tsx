"use client";

import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface LatLng {
  lat: number;
  lng: number;
}

// Fix default leaflet icons
const defaultIcon = L.icon({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;


// Animated polyline
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
    if (!isInView || !positions?.length) return;

    let i = 0;
    const interval = setInterval(() => {
      setAnimatedPath(positions.slice(0, i + 1));
      i++;
      if (i >= positions.length) clearInterval(interval);
    }, 100);

    try {
      map.fitBounds(positions.map((p) => [p.lat, p.lng]) as any, {
        padding: [40, 40],
      });
    } catch {}

    return () => clearInterval(interval);
  }, [isInView, positions, map]);

  return <Polyline positions={animatedPath} color="#10B981" weight={4} />;
};


// MAIN MAP COMPONENT (browser only)
export default function MapInner({
  destination,
  route,
  isInView,
}: {
  destination: any;
  route: LatLng[];
  isInView: boolean;
}) {
  return (
    <MapContainer
      key={destination.id}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <AnimatedPolyline positions={route} isInView={isInView} />
      <Marker position={route?.[0]} />
      <Marker position={route?.[route.length - 1]} />
    </MapContainer>
  );
}
