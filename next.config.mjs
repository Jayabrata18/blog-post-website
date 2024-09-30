/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [

            {
                hostname: '192.168.1.3',
                protocol: 'http'
            },
            {
                hostname: 'storage.cloud.google.com',
                protocol: 'https'
            },
            {
                hostname: 'storage.cloud.google.com',
                protocol: 'https'
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
