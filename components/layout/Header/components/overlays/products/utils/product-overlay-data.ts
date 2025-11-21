
export type ProductKey = keyof typeof MODELS;

export type ModelClassKey = keyof typeof MODEL_DETAILS;

export const PRODUCT_NAV = {
  PRODUCTS: [
    { id: "bikes", label: "BIKES" },
    { id: "cycling", label: "CYCLING ACCESSORIES" },
    { id: "running", label: "RUNNING" }
  ],
};

export const MODELS = {
  bikes: [
    { id: "serow", label: "Serow" },
    { id: "saola", label: "Saola" },
    { id: "takin", label: "Takin" },
  ],
  cycling: [],
  running: []
};

export const MODEL_DETAILS = {
  serow: {
    models: ["Model-1", "Model-2", "Model-3"],
    image: "/images/product-overlay-img.png",
    title: "SEROW-1",
    price: "₹10,000",
    colors: ["#4B5F00", "#D0C67A", "#A33A3A"]
  },
  saola: {
    models: ["model-1"],
    image: "/images/product-overlay-img.png",
    title: "SAOLA-1",
    price: "₹8,000",
    colors: ["#D0C67A", "#A33A3A"]
  },
  takin: {
    models: ["model-1"],
    image: "/images/product-overlay-img.png",
    title: "TAKIN-1",
    price: "₹12,000",
    colors: ["#4B5F00"]
  }
};
