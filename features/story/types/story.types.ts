
export interface LocationPoint {
  lat: number;
  lng: number;
}

export interface Review {
  category: string;
  rating: number;
  max: number;
}

export interface StoryContent {
  type: "story";
  title: string;
  data: {
    title: string;
    user_experience: string;
    author: string;
    date: string;
    author_img: string;
  };
}

export interface ItineraryItem {
  day: string;
  title: string;
  distance?: string;
  passes?: string;
  description: string[];
}

export interface ItineraryContent {
  type: "itinerary";
  title: string;
  data: ItineraryItem[];
}

export interface InclusionsContent {
  type: "inclusions";
  title: string;
  data: { title: string; user_experience: string; author: string; date: string; author_img: string };
}

export interface ExclusionsContent {
  type: "exclusions";
  title: string;
  data: { title: string; user_experience: string; author: string; date: string; author_img: string };
}



export interface PackingItem {
  name: string;
  image: string;
  category?: "must";
}

export interface PackingContent {
  type: "packing";
  title: string;
  data: PackingItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
  image: string;
}

export interface TestimonialContent {
  type: "testimonial";
  title: string;
  data: TestimonialItem[];
}

export interface GalleryContent {
  type: "gallery";
  title: string;
  data: string[];
}

export type ContentSection =
  | StoryContent
  | ItineraryContent
  | InclusionsContent
  | ExclusionsContent
  | PackingContent
  | TestimonialContent
  | GalleryContent;

export interface RightPanelDetail {
  icon: React.ElementType;
  text: string;
}

export interface Tour {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  seat?: string;
  excerpt: string;
  description: string;
  price: number;

  leftImage: string;
  mapImage: string;
  contourImage: string;
  link: string;
  className?: string;

  source: LocationPoint;
  destination: LocationPoint;

  reviews: Review[];
  images: string[];

  content: ContentSection[];

  rightPanelDetails: RightPanelDetail[];
}

