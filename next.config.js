/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
