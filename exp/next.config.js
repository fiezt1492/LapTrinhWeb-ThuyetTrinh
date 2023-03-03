/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*', // The :path parameter is used here so will not be automatically passed in the query
            },
        ]
    },
}

module.exports = nextConfig