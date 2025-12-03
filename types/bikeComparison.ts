export interface BikeProfile {
  id: number;
  title: string;
  level: string;
  description: string;
}

export interface RadarDataPoint {
  label: string;
  Serow: number;
  Saola: number;
  Takin: number;
}

export type BikeModel = string;


export type ComparisonCategory =
  | "Comfort & Ergonomics"
  | "Performance"
  | "Durability & Build"
  | "Utility & Convenience"
  | "Terrain Adaptability"
  | "Price";



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
