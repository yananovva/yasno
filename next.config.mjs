// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    staticPageGenerationTimeout: 120,
    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig;
