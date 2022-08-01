const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => [
    {
      source: "/product",
      destination: "/",
      permanent: false,
    },
  ],
  images: {
    domains: [
      "dkstatics-public.digikala.com",
      "dkstatics-public-2.digikala.com",
      'dkstatics-private.digikala.com',
      'dkstatics-private-2.digikala.com'
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    // outputStandalone: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
