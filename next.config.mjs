/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: "/admin/game-list",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCAL || "https",
        hostname: process.env.NEXT_PUBLIC_HOSTNAME || "example.com",
        port: process.env.NEXT_PUBLIC_PORT ? Number(process.env.NEXT_PUBLIC_PORT) : undefined,
        pathname: "/getFiles/**",
      },
    ],
  },
};

export default nextConfig;
