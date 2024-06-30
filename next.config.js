/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    FRONTEND_DASHBOARD_URL: process.env.FRONTEND_DASHBOARD_URL,
  },
};

module.exports = nextConfig;
