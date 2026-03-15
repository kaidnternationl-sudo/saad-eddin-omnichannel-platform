// src/types/index.ts

export type PriceOption = {
  label: string; // "كيلو", "نصف كيلو", "علبة"
  price: number; // السعر بالريال
  unit?: string; // "kg", "500g", "box"
};

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: 'eastern' | 'chocolate' | 'pastries' | 'cake' | 'maamoul' | 'special';
  subCategory?: string;
  description: string;
  descriptionAr: string;
  image: string;
  images?: string[];
  tags: string[];
  priceOptions: PriceOption[];
  requiresExactWeight?: boolean;
  giftable: boolean;
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  workingHours: string;
  lat: number;
  lng: number;
  isMainBranch?: boolean;
}

export interface CartItem {
  product: Product;
  selectedOption: PriceOption;
  quantity: number;
  giftWrapping?: boolean;
  giftMessage?: string;
  totalPrice: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
}
