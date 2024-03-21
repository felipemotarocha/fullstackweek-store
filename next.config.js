/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
