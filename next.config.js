/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        hostname: "digital-mariachon-production.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;
