export interface StorySection {
  type: "story" | "itinerary" | "packing" | "testimonial" | "gallery";
  title: string;
  data?: any;
}

export interface Story {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  img: string;
  link: string;
  className?: string;
  price: number;
  images: string[];
  content: StorySection[];
}

export interface ItineraryItem {
  day: number;
  title: string;
  highlights?: string[];
  description?: string;
}
