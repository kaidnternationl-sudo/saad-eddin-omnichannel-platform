// src/pages/index.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { branches } from '@/data/branches';
import ProductCard from '@/components/ui/ProductCard';
import { FaSearch, FaMapMarkerAlt, FaGift } from 'react-icons/fa';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProducts = products.filter(p => p.tags.includes('الأكثر مبيعاً')).slice(0, 4);
  const mainBranches = branches.filter(b => b.isMainBranch).slice(0, 3);

  // فلترة المنتجات للبحث (بسيط)
  const searchResults = searchQuery
    ? products.filter(p => p.nameAr.includes(searchQuery) || p.name.includes(searchQuery))
    : [];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://via.placeholder.com/1920x600?text=حلويات+سعد+الدين"
            alt="حلويات سعد الدين"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-arabic font-bold mb-6"
          >
            حلويات سعد الدين
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10"
          >
            مذاق الأصالة في كل قضمة
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="ابحث عن معمول، بقلاوة، شوكولاتة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            
            {/* نتائج البحث الفوري */}
            {searchQuery && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl z-20 max-h-96 overflow-y-auto">
                {searchResults.slice(0, 5).map(product => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="flex items-center p-4 hover:bg-gray-50 transition border-b last:border-0"
                  >
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden ml-4">
                      <Image src={product.image} alt={product.nameAr} layout="fill" objectFit="cover" />
                    </div>
                    <div className="text-right">
                      <h4 className="font-bold text-gray-800">{product.nameAr}</h4>
                      <p className="text-sm text-gray-600">{product.priceOptions[0].price} ريال</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-custom">
        <h2 className="section-title">الأكثر مبيعاً</h2>
        <p className="section-subtitle">اختر من بين أشهى الحلويات التي يفضلها عملاؤنا</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/menu" className="btn-primary inline-block">
            عرض القائمة كاملة
          </Link>
        </div>
      </section>

      {/* Special Ramadan/Eid Offer */}
      <section className="bg-gradient-to-l from-primary-100 to-secondary-100 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-arabic font-bold text-secondary-800 mb-4">
                صواني العيد الفاخرة
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                جهز ضيافتك بأرقى الصواني الملكية التي تجمع بين المعمول الفاخر والشوكولاتة البلجيكية والموالح الطازجة. مثالية للهدايا والمجالس.
              </p>
              <Link href="/product/royal-tray" className="btn-primary">
                تسوق الآن
              </Link>
            </div>
            <div className="md:w-1/2 relative h-80 w-full">
              <Image
                src="https://via.placeholder.com/600x400?text=صينية+عيد+فاخرة"
                alt="صينية عيد فاخرة"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branches Map Preview */}
      <section className="container-custom">
        <h2 className="section-title">فروعنا حول المملكة</h2>
        <p className="section-subtitle">أكثر من ٢٠ فرعاً في أهم مدن السعودية</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainBranches.map(branch => (
            <div key={branch.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <FaMapMarkerAlt className="text-primary-500 text-2xl mb-4" />
              <h3 className="font-arabic font-bold text-xl mb-2">{branch.name}</h3>
              <p className="text-gray-600 mb-2">{branch.address}</p>
              <p className="text-gray-600 mb-2">📞 {branch.phone}</p>
              <p className="text-gray-600">{branch.workingHours}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/branches" className="btn-outline">
            عرض جميع الفروع
          </Link>
        </div>
      </section>

      {/* Gift Feature */}
      <section className="container-custom">
        <div className="bg-secondary-800 text-white rounded-3xl p-12 text-center">
          <FaGift className="text-6xl mx-auto mb-6 text-primary-400" />
          <h2 className="text-4xl font-arabic font-bold mb-4">أرسل هدية لأحبائك</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            اختر المنتج الذي تريد، وأضف بطاقة تهنئة شخصية وتغليفاً فاخراً، وسنقوم بتوصيلها إلى أي مكان في المملكة.
          </p>
          <Link href="/menu" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
            ابدأ الهدية
          </Link>
        </div>
      </section>
    </div>
  );
}
