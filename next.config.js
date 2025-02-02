/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 