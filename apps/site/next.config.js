// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("./next-config/webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "img.youtube.com", "vumbnail.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  webpack
};

module.exports = nextConfig;
