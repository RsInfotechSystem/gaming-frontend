/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // redirects: async () => {
  //     return [
  //         {
  //             source: "/",
  //             destination: "/panel",
  //             permanent: false
  //         }
  //     ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // ✅ Replace with the actual hostname
        port: "", // Optional
        pathname: "/path/to/images/**", // Optional
      },
    ],
  },
};

export default nextConfig;
