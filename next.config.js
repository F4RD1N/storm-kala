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
    ],
  },
};

module.exports = nextConfig;
