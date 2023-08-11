/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "item.kakaocdn.net",
            },
        ],
    },
};

module.exports = nextConfig;
