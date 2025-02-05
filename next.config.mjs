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
            protocol: "https",
            hostname: "example.com", // Replace with your actual hostname
            port: "",
            pathname: "/path/to/images/**",
          },
        ],
      },
};

export default nextConfig;
