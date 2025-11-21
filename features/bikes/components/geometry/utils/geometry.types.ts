import { BIKE_DATA } from "./geometry-data";

// For GEOMETRY TABLE (lowercase)
export type GeoModelName = "model-1" | "model-2" | "model-3";
export type BikeName = "serow" | "saola" | "takin";

export interface SpecItem {
  label: string;
  values: [string, string, string, string]; // S, M, L, XL
}

export type BikeModelSpecs = Record<GeoModelName, SpecItem[]>;
export type AllBikeSpecs = Record<BikeName, BikeModelSpecs>;

// For GENERAL BIKE SPECS TABLE (uppercase model names)
export const MODELS = ["model-1", "model-2", "model-3"] as const;
export type TableModelName = typeof MODELS[number];

export type SpecLabel =
  | "FRAME SIZE"
  | "FRAME"
  | "GROUPSET"
  | "WHEELSET DISC";

export interface BikeEntry {
  images: Record<TableModelName, string>;
  specs: Record<TableModelName, Record<SpecLabel, string>>;
}

export type TableBikeName = keyof typeof BIKE_DATA;
