// src/pages/menu.tsx
import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'eastern', name: 'حلويات شرقية' },
  { id: 'maamoul', name: 'المعمول' },
  { id: 'chocolate', name: 'شوكولاتة' },
  { id: 'pastries', name: 'موالح' },
  { id: 'cake', name: 'كيك' },
  { id: 'special', name: 'صواني خاصة' },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container-custom py-12">
      <h1 className="section-title">قائمة الحلويات</h1>
      <p className="section-subtitle">تصفح تشكيلتنا الفاخرة واختر ما يناسب ذوقك</p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 text-xl py-12">لا توجد منتجات في هذا القسم حالياً</p>
      )}
    </div>
  );
}
