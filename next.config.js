/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'], // للصور الوهمية، يمكنك إضافة دومينات حقيقية لاحقاً
  },
}

module.exports = nextConfig
