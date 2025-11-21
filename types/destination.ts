export interface Destination {
  id: string;
  title: string;
  date: string;
  seat?: string;
  urgent?: string;
  excerpt: string;
  subtitle: string;
  description: string;
  leftImage: string;
  mapImage: string;
  contourImage: string;
  link: string;
  className: string;
  source: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  reviews: {
    category: string;
    rating: number;
    max: number;
  }[];
  images: string[];
  content: {
    title: string;
    user_experience: string;
    author: string;
    date: string;
    author_img: string;
  }[];
}