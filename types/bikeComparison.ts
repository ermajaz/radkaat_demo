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