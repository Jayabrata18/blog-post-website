/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https'

            },
            {
                hostname: 'drive.google.com',
                protocol: 'https'
            },
            {
                hostname: 'images.unsplash.com',
                protocol: 'https'
            },
            {
                hostname: '192.168.1.3',
                protocol: 'http'
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
