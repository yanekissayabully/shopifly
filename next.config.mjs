/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 добавляем эту строку
  images: {
    deviceSizes: [480, 768, 1024, 1280, 1536],
    formats: ['image/webp'],
    unoptimized: true, // 👈 обязательно для статического экспорта
  },
}

export default nextConfig