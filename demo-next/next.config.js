/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://localhost:64027/api/:path*',
            },
        ]
    },
}

module.exports = nextConfig
