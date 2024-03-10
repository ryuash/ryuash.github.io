/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  assetPrefix: "https://ryuash.github.io" ,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
