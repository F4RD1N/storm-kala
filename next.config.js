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
    {
      source: "/category",
      destination: "/",
      permanent: false,
    },
    {
      source: "/checkout",
      destination: "/checkout/cart",
      permanent: false,
    },
  ],
  images: {
    domains: [
      "dkstatics-public.digikala.com",
      "dkstatics-public-2.digikala.com",
      'dkstatics-private.digikala.com',
      'dkstatics-private-2.digikala.com',
      'www.digikala.com'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputStandalone: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
