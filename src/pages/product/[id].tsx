// src/pages/product/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { FaHeart, FaShare, FaCheck } from 'react-icons/fa';
import { PriceOption } from '@/types';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = getProductById(id as string);
  const { addToCart } = useCart();

  const [selectedOption, setSelectedOption] = useState<PriceOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [giftWrapping, setGiftWrapping] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  // تعيين الخيار الأول افتراضياً إذا لم يتم اختيار شيء
  useEffect(() => {
    if (product && !selectedOption) {
      setSelectedOption(product.priceOptions[0]);
    }
  }, [product, selectedOption]);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-700">المنتج غير موجود</h2>
        <Link href="/menu" className="btn-primary inline-block mt-6">
          العودة للقائمة
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedOption) return;
    addToCart({
      product,
      selectedOption,
      quantity,
      giftWrapping,
      giftMessage: giftWrapping ? giftMessage : undefined,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const totalPrice = selectedOption
    ? selectedOption.price * quantity + (giftWrapping ? 15 : 0)
    : 0;

  return (
    <div className="container-custom py-12" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={product.image}
              alt={product.nameAr}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images?.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary-500">
                <Image src={img} alt={`${product.nameAr} ${idx + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-arabic font-bold text-secondary-800">{product.nameAr}</h1>
            <div className="flex space-x-2 space-x-reverse">
              <button className="p-2 text-gray-400 hover:text-red-500 transition">
                <FaHeart size={24} />
              </button>
              <button className="p-2 text-gray-400 hover:text-primary-600 transition">
                <FaShare size={24} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">{product.descriptionAr}</p>

          {/* Price Options */}
          <div>
            <h3 className="text-xl font-semibold mb-3">اختر الكمية/الوزن:</h3>
            <div className="flex flex-wrap gap-3">
              {product.priceOptions.map(option => (
                <button
                  key={option.label}
                  onClick={() => setSelectedOption(option)}
                  className={`px-5 py-3 border-2 rounded-lg font-medium transition-all ${
                    selectedOption?.label === option.label
                      ? 'border-primary-600 bg-primary-50 text-primary-800'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {option.label} - {option.price} ريال
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">الكمية:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-2xl border-l"
              >
                -
              </button>
              <span className="px-6 py-2 text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-2xl border-r"
              >
                +
              </button>
            </div>
          </div>

          {/* Gift Wrapping (ميزة حصرية) */}
          {product.giftable && (
            <div className="border-t pt-4">
              <label className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-primary-600"
                  checked={giftWrapping}
                  onChange={(e) => setGiftWrapping(e.target.checked)}
                />
                <span className="text-lg">تغليف كهدية (+15 ريال)</span>
              </label>
              {giftWrapping && (
                <textarea
                  placeholder="أدخل رسالة الهدية (اختياري)"
                  className="mt-3 w-full p-3 border rounded-lg"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  rows={3}
                />
              )}
            </div>
          )}

          {/* Total & Add to Cart */}
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-gray-500">المجموع:</span>
              <span className="text-3xl font-bold text-primary-700 mr-2">
                {totalPrice} ريال
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!selectedOption}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              أضف إلى السلة
            </button>
          </div>

          {/* رسالة تأكيد الإضافة */}
          {addedToCart && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center gap-2"
            >
              <FaCheck className="text-green-600" />
              تمت إضافة المنتج إلى سلة التسوق
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
