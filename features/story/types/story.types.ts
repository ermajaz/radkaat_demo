import { BadgeCheck, Bike, Car, MapPin, Mountain, Ruler, UtensilsCrossed } from "lucide-react";

export interface LocationPoint {
  lat: number;
  lng: number;
}

export type LucideIconName =
  | "Bike"
  | "Mountain"
  | "Ruler"
  | "MapPin"
  | "UtensilsCrossed"
  | "BadgeCheck"
  | "Car";


export interface RightPanelDetail {
  icon: LucideIconName;
  text: string;
}



export interface StoryBlock {
  type: "story";
  title: string;
  data: {
    title: string;
    user_experience: string;
    author: string;
    date: string;
    author_img?: string;
  };
}



export interface ItineraryDay {
  day: string;
  title: string;
  distance?: string;
  passes?: string;
  description: string[];
}

export interface ItineraryBlock {
  type: "itinerary";
  title: string;
  data: ItineraryDay[];
}


export interface InclusionsContent {
  type: "inclusions";
  title: string;
    user_experience: string[];  // ✅ list of points
    author: string;
    date: string;
}


export interface ExclusionsContent {
  type: "exclusions";
  title: string;
    user_experience: string[];  // ✅ list of points
    author: string;
    date: string;
}




export type PackingCategory = "must" | "recommended" | "optional";

export interface PackingItem {
  name: string;
  category: PackingCategory;
}

export interface PackingBlock {
  type: "packing";
  title: string;
  data: PackingItem[];
}



export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image?: string;
}

export interface TestimonialsBlock {
  type: "testimonials";
  title?: string;
  data: Testimonial[];
}



export interface GalleryContent {
  type: "gallery";
  title: string;
  data: string[];
}

export interface TripContent {
  story?: StoryBlock[];
  itinerary?: ItineraryBlock[];
  packing?: PackingBlock[];
  testimonials?: Testimonial[];
  inclusions?: InclusionsContent;
  exclusions?: ExclusionsContent;
}


export interface Trip {
  id: string;

  title: string;
  subtitle?: string;

  date: string;
  seat?: string;

  excerpt: string;
  description: string;

  price: number;
  link: string;
  className?: string;

  leftImage: string;
  video?: string;
  pdf?: string;
  images: string[];

  source: LocationPoint;
  destination: LocationPoint;

  content: TripContent;
  rightPanelDetails: RightPanelDetail[];
}





// Enquiry Form Types
export interface EnquiryFormData {
  name: string;
  phoneNumber: string;
  tripName?: string;
  tripId?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
}






