// src/pages/cart.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, totalItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const deliveryFee = 25; // رسوم توصيل ثابتة
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <FaShoppingBag className="text-8xl text-gray-300 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-700 mb-4">سلتك فارغة</h2>
        <p className="text-gray-500 mb-8">أضف بعض الحلويات اللذيذة إلى سلتك</p>
        <Link href="/menu" className="btn-primary inline-block">
          تصفح القائمة
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="section-title">سلة التسوق</h1>
      <p className="section-subtitle">لديك {totalItems} منتج في سلتك</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* قائمة المنتجات */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={`${item.product.id}-${item.selectedOption.label}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.product.image} alt={item.product.nameAr} layout="fill" objectFit="cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-arabic font-bold text-xl">{item.product.nameAr}</h3>
                    <p className="text-gray-600 text-sm">{item.selectedOption.label}</p>
                    {item.giftWrapping && (
                      <p className="text-green-600 text-sm mt-1">🎁 تغليف هدية</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedOption.label)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedOption.label, item.quantity - 1)}
                      className="px-3 py-1 text-xl border-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedOption.label, item.quantity + 1)}
                      className="px-3 py-1 text-xl border-r"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-primary-600">{item.totalPrice} ريال</span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 underline text-sm"
            >
              إفراغ السلة
            </button>
          </div>
        </div>

        {/* ملخص الطلب */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="font-arabic font-bold text-2xl mb-4">ملخص الطلب</h3>
          <div className="space-y-3 border-b pb-4 mb-4">
            <div className="flex justify-between">
              <span>المجموع الفرعي:</span>
              <span className="font-semibold">{subtotal} ريال</span>
            </div>
            <div className="flex justify-between">
              <span>رسوم التوصيل:</span>
              <span className="font-semibold">{deliveryFee} ريال</span>
            </div>
          </div>
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>الإجمالي:</span>
            <span className="text-primary-600">{total} ريال</span>
          </div>
          <button className="btn-primary w-full text-center">
            إتمام الطلب
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            *سيتم توجيهك إلى صفحة الدفع الآمن
          </p>
        </div>
      </div>
    </div>
  );
}
