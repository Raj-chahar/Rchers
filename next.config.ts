// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
//   reactStrictMode: true,
//   images: {
//     domains: ["assets.aceternity.com"],
//   },
// };
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// }

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export mode
  // output: "export",
  
  // Enables React Strict Mode
  reactStrictMode: true,

  // Allows loading images from specified domains
  images: {
    domains: ["assets.aceternity.com"],
  },

  // Ignore ESLint errors during the build process
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Exporting the configuration
module.exports = nextConfig;
