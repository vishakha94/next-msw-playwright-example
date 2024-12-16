/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    testProxy: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/recipe-images/*",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
