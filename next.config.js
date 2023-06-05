/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lessons",
        permanent: true,
      },
      // {
      //   source: "/backup/:path*",
      //   destination: "/lessons",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
