/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-019ec6f9e7d142fd81626e1129d96ec3.r2.dev"
            }
        ]
    }
};

export default nextConfig;
