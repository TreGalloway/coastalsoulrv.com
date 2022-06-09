/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modules: true,

    // image: {
    //     domains: ['https://github.com'],
    // },
}

const withImages = require('next-images')

module.exports = withImages(nextConfig)
