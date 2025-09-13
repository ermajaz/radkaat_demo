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
  img: string;
  stats: BikeStats;
  description: string[];
}


export type OverlayBike = {
  id: string;
  name: string;
  logo: string;
  image: string;
  details: {
    size: string;
    color: string;
    dimension: string;
    material: string;
  };
  skus: {
    id: string;
    name: string;
    image: string;
  }[];
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
