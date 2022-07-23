/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  redirects: async () => [
    {
      source: '/product',
      destination: '/',
      permanent: false
    }
  ]
}

module.exports = nextConfig
