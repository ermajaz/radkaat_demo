import { useEffect, useState } from "react";
import axios from "axios";

interface LatLng {
  lat: number;
  lng: number;
}

export const useMapboxRoute = (source: LatLng, destination: LatLng) => {
  const [route, setRoute] = useState<LatLng[]>([]);

  useEffect(() => {
    if (!source || !destination) return;

    const fetchRoute = async () => {
      try {
        const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
        const res = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${source.lng},${source.lat};${destination.lng},${destination.lat}`,
          {
            params: {
              geometries: "geojson",
              access_token: accessToken,
            },
          }
        );

        const coords =
          res?.data?.routes?.[0]?.geometry?.coordinates?.map(
            (c: [number, number]) => ({ lng: c[0], lat: c[1] })
          ) || [];

        setRoute(coords);
      } catch (err) {
        console.error("Failed to fetch route:", err);
      }
    };

    fetchRoute();
  }, [source, destination]);

  return route;
};
