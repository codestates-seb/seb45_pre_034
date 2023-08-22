/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "passionfull.s3.ap-northeast-2.amazonaws.com",
                port: "",
                pathname: "/images/**",
            },
            {
                protocol: "https",
                hostname: "robohash.org",
                port: "",
                pathname: "/**",
            },
        ],
    },
    productionBrowserSourceMaps: true,
};
const removeImports = require("next-remove-imports")();
// module.exports = nextConfig
module.exports = removeImports({
    ...nextConfig,
});
