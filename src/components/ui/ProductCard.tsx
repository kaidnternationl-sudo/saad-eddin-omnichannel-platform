// src/components/ui/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const lowestPrice = Math.min(...product.priceOptions.map(p => p.price));
  const isGiftable = product.giftable;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.nameAr}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-500"
          />
          {product.tags.includes('الأكثر مبيعاً') && (
            <span className="absolute top-3 right-3 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
              الأكثر مبيعاً
            </span>
          )}
          {isGiftable && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              هدية
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-arabic font-bold text-xl mb-2">{product.nameAr}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.descriptionAr}</p>
          <div className="flex items-center justify-between">
            <span className="text-primary-600 font-bold text-lg">
              {lowestPrice} ريال
            </span>
            <div className="flex space-x-2 space-x-reverse">
              <button className="p-2 text-gray-400 hover:text-red-500 transition">
                <FaHeart />
              </button>
              <button className="p-2 text-gray-400 hover:text-primary-600 transition">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
