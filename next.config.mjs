/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/admin",
                destination: "/admin/game-list",
                permanent: false
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_PUBLIC_PROTOCAL,
                hostname: process.env.NEXT_PUBLIC_HOSTNAME,
                port: process.env.NEXT_PUBLIC_PORT,
                pathname: '/getFiles/**',
            },
        ],
    },
};

export default nextConfig;
