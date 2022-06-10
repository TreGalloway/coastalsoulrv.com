/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modules: true,
    eslint: {
        ignoreDuringBuilds: true,
    },

    // image: {
    //     domains: ['https://github.com'],
    // },
}

const withImages = require('next-images')

module.exports = withImages(nextConfig)
