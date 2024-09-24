/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['github.com', 'https://dev-store-api-ten.vercel.app/'],
  },
}

export default nextConfig
