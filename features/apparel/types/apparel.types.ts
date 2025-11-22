export interface ApparelVariant {
  id: string;
  size: string;
  colors: string[]; // hex colors
  inStock: boolean;
  price: number; 
}

export interface ApparelProduct {
  id: string;
  name: string;
  brand: string;
  category: "road" | "urban" | "weather" | "race";
  image: string;
  tagline: string;
  variants: ApparelVariant[];
}
