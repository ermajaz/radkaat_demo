import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "manali",
    title: "MANALI",
    subtitle: "Remarkable experience to inspire the mind",
    description: `Glacial Lakes ; High Passes ; Snowy Peaks ; Green Rivers; Vast Plains ; Temperate Forests ; Cold Deserts ; a culture preserved for centuries! This is the heart of the Himalaya! Manali-Leh is a highly popular cycling jaunt, frequented by cyclists from across the world, but accessible only for few months in a year.`,
    leftImage: "/images/manali-wallpaper.jpg",
    mapImage: "/images/tour-map.png",
    contourImage: "/images/contour.png",
    source: { lat: 28.6139, lng: 77.209 },
    destination: { lat: 32.2396, lng: 77.1887 },
    reviews: [
      { category: "Scenery & Views", rating: 5, max: 5 },
      { category: "Adventure Activities", rating: 5, max: 5 },
      { category: "Hospitality & Stay", rating: 4, max: 5 },
      { category: "Food & Local Cuisine", rating: 3, max: 5 },
      { category: "Travel Convenience", rating: 3, max: 5 },
    ],
  },
  {
    id: "spiti-valley",
    title: "SpiTI VALLEY",
    subtitle: "Remarkable experience to inspire the mind",
    description: `Glacial Lakes ; High Passes ; Snowy Peaks ; Green Rivers; Vast Plains ; Temperate Forests ; Cold Deserts ; a culture preserved for centuries! This is the heart of the Himalaya! Manali-Leh is a highly popular cycling jaunt, frequented by cyclists from across the world, but accessible only for few months in a year.`,
    leftImage: "/images/spiti-valley.jpg",
    mapImage: "/images/tour-map.png",
    contourImage: "/images/contour.png",
    source: { lat: 25.3176, lng: 82.9739 },
    destination: { lat: 34.1526, lng: 77.577 },
    reviews: [
      { category: "Scenery & Views", rating: 5, max: 5 },
      { category: "Adventure Activities", rating: 5, max: 5 },
      { category: "Hospitality & Stay", rating: 4, max: 5 },
      { category: "Food & Local Cuisine", rating: 3, max: 5 },
      { category: "Travel Convenience", rating: 3, max: 5 },
    ],
  },
];
