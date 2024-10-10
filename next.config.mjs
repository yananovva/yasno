let staticPageGenerationTimeout;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    staticPageGenerationTimeout: 120,

};

export default nextConfig;
