// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                س
              </div>
              <div className="font-arabic font-bold text-2xl text-secondary-800">
                حلويات <span className="text-primary-600">سعد الدين</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition">
                الرئيسية
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-primary-600 font-medium transition">
                القائمة
              </Link>
              <Link href="/branches" className="text-gray-700 hover:text-primary-600 font-medium transition">
                الفروع
              </Link>
              <Link href="/offers" className="text-gray-700 hover:text-primary-600 font-medium transition">
                العروض
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="text-gray-600 hover:text-primary-600 transition">
                <FaHeart size={20} />
              </button>
              <Link href="/cart" className="relative text-gray-600 hover:text-primary-600 transition">
                <FaShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button className="text-gray-600 hover:text-primary-600 transition">
                <FaUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-800 text-white mt-16">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-arabic text-2xl font-bold mb-4">حلويات سعد الدين</h3>
              <p className="text-gray-300 leading-relaxed">
                نقدم أشهى الحلويات الشرقية والغربية منذ عام ١٩٨٠، باستخدام أجود المكونات ووصفاتنا السرية.
              </p>
            </div>
            <div>
              <h4 className="font-arabic text-xl font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition">من نحن</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition">اتصل بنا</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white transition">الأسئلة الشائعة</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition">سياسة الخصوصية</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-arabic text-xl font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-300">
                <li>الهاتف: ٩٢٠٠٠١٢٣٤</li>
                <li>البريد: info@alsaeed.sa</li>
                <li>الرياض - المملكة العربية السعودية</li>
              </ul>
            </div>
            <div>
              <h4 className="font-arabic text-xl font-bold mb-4">تابعنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                {/* أيقونات التواصل الاجتماعي (يمكن إضافتها لاحقاً) */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} حلويات سعد الدين</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
