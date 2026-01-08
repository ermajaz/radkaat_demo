export interface PreorderProduct {
  id: string;
  title: string;
  desc: string;
  sku: string;
  basePrice: number;
  qty: number;
  image: string;
  models: string[];
  colors: { name: string; hex: string }[];
  selectedModel: string;
  selectedColor: string;
  customizations: {
    handlebarTape: string;
    saddle: string;
    wheels: string;
    groupset: string;
  };
  depositRequired: number;
  estimatedDelivery: string;
}

export interface PreorderState {
  items: PreorderProduct[];
  totalDeposit: number;
  totalValue: number;
}