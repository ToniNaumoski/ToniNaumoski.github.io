/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                    // for static export
  basePath: '/thegentlemanscut',       // important: tells Next.js the app is in a subfolder
  assetPrefix: '/thegentlemanscut',   // important: prefix for all static files
  images: {
    unoptimized: true,                 // GitHub Pages does not handle Next.js image optimization
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
