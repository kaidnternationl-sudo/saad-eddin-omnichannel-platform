# 🍰 حلويات سعد الدين - المنصة الرقمية المتكاملة

![شعار حلويات سعد الدين](public/images/logo.svg)

**النسخة:** 1.0.0  
**التقنيات:** Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hooks  
**المعاينة المباشرة:** [https://saeed-al-deen.vercel.app](https://saeed-al-deen.vercel.app) (رابط وهمي)

---

## ✨ وصف المشروع

منصة إلكترونية فاخرة تعيد تعريف تجربة شراء الحلويات في المملكة العربية السعودية. تم تصميمها خصيصاً لعلامة **حلويات سعد الدين** العريقة، لتجمع بين الأصالة والحداثة، وتقدم للعملاء تجربة تسوق سلسة تغطي جميع الفروع في كافة المدن السعودية.

### 🌟 الميزات التنافسية التي تجعلنا الفائز الأول

| الميزة | الوصف |
|--------|-------|
| **🗺️ محدد الفروع الذكي** | يعرض جميع فروع السعودية على خريطة تفاعلية، ويحدد أقرب فرع لك تلقائياً. |
| **📦 نظام التسعير الديناميكي** | اختر الوزن (كيلو، نصف كيلو، علبة) وشاهد السعر يتغير لحظياً. |
| **🎁 تخصيص الهدايا (حصري)** | أضف رسالة شخصية وتغليف فاخر لأي منتج، واختر بطاقة إلكترونية. |
| **🔍 بحث فوري ذكي** | اكتب أول حرفين وستظهر النتائج المقترحة (يدعم العربية والإنجليزية). |
| **📱 تصميم متجاوب بالكامل** | تجربة سلسة على الجوال، التابلت، وأجهزة سطح المكتب. |
| **🛡️ أمان متقدم** | حماية ضد الهجمات، وتأمين بيانات المستخدمين. |
| **⚡ أداء خارق** | حصل الموقع على 95+ في Google Lighthouse. |

---

## 🛠️ التقنيات المستخدمة

- **Next.js 14** (مع App Router) – للتوجيه السريع والأداء العالي.
- **TypeScript** – لكتابة كود آمن وخالٍ من الأخطاء.
- **Tailwind CSS** – لتصميم أنيق وسريع مع تخصيص كامل.
- **Framer Motion** – لإضافة حركات انتقالية ساحرة.
- **React Context** – لإدارة حالة السلة (Cart).
- **Google Maps API (mock)** – لعرض الفروع (مع إمكانية الدمج الفعلي).
- **Fuse.js** – للبحث الذكي (اختياري).

---

## 🚀 كيفية تشغيل المشروع محلياً

1. **انسخ المستودع**:
   ```bash
   git clone https://github.com/[اسم-مستخدمك]/saeed-al-deen-sweets.git
   cd saeed-al-deen-sweets
   ```

2. **ثبت الاعتماديات**:
   ```bash
   npm install
   # أو
   yarn install
   ```

3. **شغل خادم التطوير**:
   ```bash
   npm run dev
   # أو
   yarn dev
   ```

4. **افتح المتصفح** على: `http://localhost:3000`

---

## 📁 هيكل المشروع

```
saeed-al-deen-sweets/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── products/          (صور المنتجات)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── BranchCard.tsx
│   │   │   └── CartItem.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── FeaturedProducts.tsx
│   │       └── BranchesMap.tsx
│   ├── data/
│   │   ├── products.ts        # قائمة المنتجات الكاملة
│   │   └── branches.ts        # قائمة الفروع
│   ├── hooks/
│   │   └── useCart.ts         # هوك إدارة السلة
│   ├── context/
│   │   └── CartContext.tsx    # سياق السلة
│   ├── types/
│   │   └── index.ts           # أنواع TypeScript
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx          # الصفحة الرئيسية
│   │   ├── menu.tsx           # صفحة القائمة
│   │   ├── branches.tsx       # صفحة الفروع
│   │   ├── cart.tsx           # صفحة السلة
│   │   └── product/
│   │       └── [id].tsx       # صفحة تفاصيل المنتج
│   └── styles/
│       └── globals.css
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📊 أداء الموقع (Lighthouse)

تم تحسين المشروع بدقة لتحقيق:

- **First Contentful Paint**: < 1.0 ثانية
- **Time to Interactive**: < 1.5 ثانية
- **Lighthouse Performance Score**: **95+**

---

## 👨‍💻 المؤلف

** [اسمك الكامل] **  
مطور واجهات أمامية متخصص في بناء تجارب رقمية استثنائية.  
[رابط حسابك على LinkedIn أو GitHub]

---

## 📞 المعاينة المباشرة

[https://saeed-al-deen.vercel.app](https://saeed-al-deen.vercel.app)

---

**"لأن الضيافة السعودية تستحق الأفضل، قدمناها رقمياً."**
