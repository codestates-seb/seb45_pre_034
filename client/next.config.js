/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
};
const removeImports = require("next-remove-imports")();
// module.exports = nextConfig
module.exports = removeImports({
    ...nextConfig,
});
