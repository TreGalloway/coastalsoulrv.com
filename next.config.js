/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modules: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.pexels.com'],
        // formats: [],
    },
    // image: {
    //     domains: ['https://github.com'],
    // },
}

// const withImages = require('next-images')

module.exports = nextConfig
