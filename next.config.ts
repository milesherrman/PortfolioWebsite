import { type NextConfig } from 'next'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, // <-- disable image optimization for static export
  },
}

export default nextConfig
