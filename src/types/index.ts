export interface BikeStats {
  suspension: number;
  braking: number;
  frame: number;
  tire: number;
  weight: number;
  comfort: number;
}

export interface Bikee {
  id: string;
  name: string;
  logo: string;
  logoBlack: string;
  img: string;
  stats: BikeStats;
  description: string[];
}

export type SKU = { id: string; name: string; image: string };

export type OverlayBike = {
  id: string;
  name: string; // e.g. "SEROW-1"
  logo: string; // logo path
  image: string; // main image path
  skus: SKU[];
  details: { size: string; color: string; dimension: string; material: string };
  price: string;
};

export type Recommendation = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  icon: React.ReactNode;
  price?: string;
  rating?: number;
  category?: string;
  discount?: string;
};

export interface Store {
  id: number;
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  address: string;
}

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  leftImage: string;
  mapImage: string;
  contourImage: string;
  source: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  reviews: {
    category: string;
    rating: number;
    max: number;
  }[];
}
