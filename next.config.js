/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/wn/**",
      },
    ],
  },
};

module.exports = nextConfig;
