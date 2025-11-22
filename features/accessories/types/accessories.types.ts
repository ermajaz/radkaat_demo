export interface AccessoryVariant {
   id: string;
  size: string;
  colors: string[];
  inStock: boolean;
  price: number; 
}

export interface AccessoryProduct {
  id: string;
  name: string;
  brand: string;
  category: "safety" | "storage" | "tools" | "hydration";
  image: string;
  tagline: string;
  variants: AccessoryVariant[];
}
