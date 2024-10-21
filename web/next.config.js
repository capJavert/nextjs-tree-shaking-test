/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@kickass-dev/shared'],
  },
  transpilePackages: ['@kickass-dev/shared'],
}

module.exports = nextConfig
