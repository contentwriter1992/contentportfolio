/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    experimental: {
      serverActions: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node/,
        use: "raw-loader",
      });
      return config;
    }
  };
  module.exports = nextConfig;
