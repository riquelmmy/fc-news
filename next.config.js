const { all } = require("axios");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
module.exports = {
  images: {
    domains: [
      "m.media-amazon.com",
      "img-s-msn-com.akamaized.net",
      "img.freepik.com",
    ],
  },
  reactStrictMode: false,
};
