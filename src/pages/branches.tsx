// src/pages/branches.tsx
import React, { useState } from 'react';
import { branches } from '@/data/branches';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

// تجميع المدن لإظهارها في الفلتر
const cities = ['الكل', ...new Set(branches.map(b => b.city))];

export default function BranchesPage() {
  const [selectedCity, setSelectedCity] = useState('الكل');
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const filteredBranches = selectedCity === 'الكل'
    ? branches
    : branches.filter(b => b.city === selectedCity);

  return (
    <div className="container-custom py-12">
      <h1 className="section-title">فروعنا في المملكة</h1>
      <p className="section-subtitle">تفضل بزيارة أقرب فرع لك واستمتع بأشهى الحلويات</p>

      {/* City Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {cities.map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              selectedCity === city
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 hover:bg-primary-100'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* قائمة الفروع */}
        <div className="lg:col-span-1 space-y-4">
          {filteredBranches.map(branch => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-white p-5 rounded-lg shadow-md cursor-pointer border-2 transition ${
                selectedBranch === branch.id ? 'border-primary-500' : 'border-transparent hover:border-primary-300'
              }`}
              onClick={() => setSelectedBranch(branch.id)}
            >
              <h3 className="font-arabic font-bold text-xl mb-2">{branch.name}</h3>
              <p className="text-gray-600 flex items-start gap-2 mb-1">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>{branch.address}</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-1">
                <FaPhone className="text-primary-500" />
                <span dir="ltr">{branch.phone}</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <FaClock className="text-primary-500" />
                <span>{branch.workingHours}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* خريطة (تمثيلية) */}
        <div className="lg:col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[500px] relative">
          {/* هنا يمكن دمج Google Maps API أو استخدام صورة خريطة ثابتة */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-600">
            <p className="text-xl">[خريطة تفاعلية للفروع - يمكن دمج Google Maps هنا]</p>
            {/* مثال بسيط: عرض إحداثيات الفرع المحدد */}
            {selectedBranch && (
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">الفرع المحدد:</p>
                <p>خط العرض: {branches.find(b => b.id === selectedBranch)?.lat}</p>
                <p>خط الطول: {branches.find(b => b.id === selectedBranch)?.lng}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
