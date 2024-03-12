/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  assetPrefix: './',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
