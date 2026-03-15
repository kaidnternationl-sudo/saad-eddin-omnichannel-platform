// src/context/CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product, PriceOption } from '@/types';

interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; selectedOption: PriceOption; quantity: number; giftWrapping?: boolean; giftMessage?: string } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; optionLabel: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; optionLabel: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
};

const calculateTotals = (items: CartItem[]): { totalItems: number; subtotal: number } => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
  return { totalItems, subtotal };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, selectedOption, quantity, giftWrapping = false, giftMessage = '' } = action.payload;
      const totalPrice = selectedOption.price * quantity + (giftWrapping ? 15 : 0);
      
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.selectedOption.label === selectedOption.label
      );

      let newItems: CartItem[];
      if (existingItemIndex > -1) {
        // تحديث الكمية إذا كان المنتج موجوداً
        newItems = [...state.items];
        const existing = newItems[existingItemIndex];
        const newQuantity = existing.quantity + quantity;
        newItems[existingItemIndex] = {
          ...existing,
          quantity: newQuantity,
          totalPrice: existing.selectedOption.price * newQuantity + (existing.giftWrapping ? 15 : 0),
        };
      } else {
        // إضافة منتج جديد
        const newItem: CartItem = {
          product,
          selectedOption,
          quantity,
          giftWrapping,
          giftMessage,
          totalPrice,
        };
        newItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };
    }

    case 'REMOVE_ITEM':
      const newItems = state.items.filter(
        item => !(item.product.id === action.payload.productId && item.selectedOption.label === action.payload.optionLabel)
      );
      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };

    case 'UPDATE_QUANTITY': {
      const { productId, optionLabel, quantity } = action.payload;
      if (quantity <= 0) {
        // إزالة العنصر إذا كانت الكمية صفر أو أقل
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId, optionLabel } });
      }

      const newItems = state.items.map(item => {
        if (item.product.id === productId && item.selectedOption.label === optionLabel) {
          const newTotalPrice = item.selectedOption.price * quantity + (item.giftWrapping ? 15 : 0);
          return { ...item, quantity, totalPrice: newTotalPrice };
        }
        return item;
      });

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addToCart: (item: { product: Product; selectedOption: PriceOption; quantity: number; giftWrapping?: boolean; giftMessage?: string }) => void;
  removeFromCart: (productId: string, optionLabel: string) => void;
  updateQuantity: (productId: string, optionLabel: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: { product: Product; selectedOption: PriceOption; quantity: number; giftWrapping?: boolean; giftMessage?: string }) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (productId: string, optionLabel: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, optionLabel } });
  };

  const updateQuantity = (productId: string, optionLabel: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, optionLabel, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
