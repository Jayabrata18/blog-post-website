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
            },
            {
                hostname: 'raw.githubusercontent.com', 
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
