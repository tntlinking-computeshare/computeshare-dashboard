/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      //接口请求 前缀带上/api-text/
      { source: '/api/:path*', destination: `${process.env.NEXT_PUBLIC_BASE_API}/:path*` },
    ]
  },
};

module.exports = nextConfig;
