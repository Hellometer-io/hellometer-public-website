const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hellometer.io' }],
        destination: 'https://hellometer.ai/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hellometer.io' }],
        destination: 'https://hellometer.ai/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = withMDX(nextConfig);
