// src/data/products.ts
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'baklava-mixed',
    name: 'Mixed Baklava',
    nameAr: 'بقلاوة مشكلة',
    category: 'eastern',
    subCategory: 'baklava',
    description: 'Assorted baklava with pistachio and cashew.',
    descriptionAr: 'بقلاوة مشكلة بالفستق الحلبي والكاجو.',
    image: '/images/products/baklava-mixed.jpg',
    tags: ['الأكثر مبيعاً', 'هدية فاخرة'],
    priceOptions: [
      { label: 'كيلو', price: 140, unit: 'kg' },
      { label: 'نصف كيلو', price: 75, unit: '500g' },
    ],
    giftable: true,
  },
  {
    id: 'kunafa-cream',
    name: 'Kunafa with Cream',
    nameAr: 'كنافة بالقشطة',
    category: 'eastern',
    subCategory: 'kunafa',
    description: 'Soft kunafa filled with creamy clotted cream.',
    descriptionAr: 'كنافة طرية محشوة بالقشطة البلدي.',
    image: '/images/products/kunafa-cream.jpg',
    tags: ['موسم العيد'],
    priceOptions: [
      { label: 'كيلو', price: 95, unit: 'kg' },
      { label: 'صحن وسط', price: 45, unit: 'plate' },
    ],
    giftable: false,
  },
  {
    id: 'maamoul-dates',
    name: 'Date Maamoul',
    nameAr: 'معمول تمر فاخر',
    category: 'maamoul',
    description: 'Traditional semolina cookies filled with premium dates.',
    descriptionAr: 'كعك بالسميد محشو بالتمر الفاخر.',
    image: '/images/products/maamoul-dates.jpg',
    tags: ['ضيافة العيد', 'الأصل'],
    priceOptions: [
      { label: 'كيلو', price: 75, unit: 'kg' },
      { label: 'نصف كيلو', price: 40, unit: '500g' },
      { label: 'بوكس هدايا 1 كيلو', price: 90, unit: 'gift-box' },
    ],
    giftable: true,
  },
  {
    id: 'maamoul-pistachio',
    name: 'Pistachio Maamoul',
    nameAr: 'معمول فستق',
    category: 'maamoul',
    description: 'Delicate maamoul loaded with green pistachios.',
    descriptionAr: 'معمول ناعم بالفستق الحلبي.',
    image: '/images/products/maamoul-pistachio.jpg',
    tags: ['فاخر'],
    priceOptions: [
      { label: 'كيلو', price: 140, unit: 'kg' },
      { label: 'بوكس هدايا', price: 160, unit: 'gift-box' },
    ],
    giftable: true,
  },
  {
    id: 'chocolate-assorted',
    name: 'Assorted Chocolate (Wrapped)',
    nameAr: 'شوكولاتة مغلفة مشكلة',
    category: 'chocolate',
    description: 'A box of assorted wrapped chocolates with caramel and hazelnut.',
    descriptionAr: 'علبة شوكولاتة مغلفة مشكلة بحشوات الكراميل والبندق.',
    image: '/images/products/chocolate-wrapped.jpg',
    tags: ['للضيافة', 'للأطفال'],
    priceOptions: [
      { label: 'كيلو', price: 190, unit: 'kg' },
      { label: 'علبة 500 جم', price: 100, unit: 'box' },
    ],
    giftable: true,
  },
  {
    id: 'savory-mixed',
    name: 'Mixed Savory Box',
    nameAr: 'بوكس موالح مشكل',
    category: 'pastries',
    description: 'Mini pizzas, kibbeh, and cheese pastries.',
    descriptionAr: 'ميني بيتزا، كبة، وفطائر جبنة.',
    image: '/images/products/savory-box.jpg',
    tags: ['مقبلات'],
    priceOptions: [
      { label: 'بوكس وسط', price: 75, unit: 'box' },
      { label: 'بوكس كبير', price: 130, unit: 'box' },
    ],
    giftable: false,
  },
  {
    id: 'honey-cake',
    name: 'Honey Cake',
    nameAr: 'كيكة العسل',
    category: 'cake',
    description: 'Moist cake layered with honey and nuts.',
    descriptionAr: 'كيكة طرية بطبقات من العسل والمكسرات.',
    image: '/images/products/honey-cake.jpg',
    tags: ['كيك المناسبات'],
    priceOptions: [
      { label: 'كيكة كاملة', price: 160, unit: 'whole' },
    ],
    giftable: true,
  },
  {
    id: 'royal-tray',
    name: 'Royal Gift Tray',
    nameAr: 'صينية ضيافة ملكية',
    category: 'special',
    description: 'A luxurious tray filled with assorted chocolates and maamoul.',
    descriptionAr: 'صينية فاخرة مليئة بالشوكولاتة المشكلة والمعمول الفاخر.',
    image: '/images/products/royal-tray.jpg',
    tags: ['VIP', 'هدية'],
    priceOptions: [
      { label: 'صغيرة', price: 450, unit: 'tray' },
      { label: 'كبيرة', price: 850, unit: 'tray' },
    ],
    giftable: true,
  },
];

// دوال مساعدة
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
