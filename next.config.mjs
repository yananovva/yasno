// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    images: {
        domains: ['images.app.goo.gl'],
    },
    staticPageGenerationTimeout: 120,
    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig;
