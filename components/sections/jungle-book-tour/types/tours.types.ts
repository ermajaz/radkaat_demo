// API BASED TYPES

import { Trip } from "@/features/story/types/story.types";
import { BadgeCheck, Bike, Car, MapPin, Mountain, Ruler, UtensilsCrossed } from "lucide-react";

export interface LocationPoint {
  lat: number;
  lng: number;
}


  const ICON_MAP = {
  Bike,
  Mountain,
  Ruler,
  MapPin,
  UtensilsCrossed,
  BadgeCheck,
  Car,
} as const;

export interface RightPanelDetail {
  icon: keyof typeof ICON_MAP; // 🔥 only allowed icons
  text: string;
}





export interface Tour {
  _id: string;                // MongoDB ObjectId
  trip_name: string;
  title: string;
  subtitle?: string;
  image: string;              // main image (used in cards / hero)
  date: string;               // mixed formats → keep string
  seat?: string;
  description: string;
  source: LocationPoint;
  destination: LocationPoint;
  rightPanelDetails: RightPanelDetail[];
}


// Story State Types
export interface StoryState {
  tours: Tour[];
  currentTour: Trip | null;
  enquiry: {
    isSubmitting: boolean;
    error: string | null;
    success: boolean;
  };
  isLoading: boolean;
  error: string | null;
}
