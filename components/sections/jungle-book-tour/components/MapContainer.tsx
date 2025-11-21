"use client";

import { useMapboxRoute } from "../hooks/useMapboxRoute";
import Map from "./Map";


export default function MapContainer({ destination, isInView }: any) {
  const route = useMapboxRoute(destination.source, destination.destination);
  return (
    <Map
      destination={destination}
      route={route}
      isInView={isInView}
    />
  );
}
