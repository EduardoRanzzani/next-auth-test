import type { NextConfig } from 'next';
import { hostname } from 'os';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'avatars.githubusercontent.com',
			},
			{
				hostname: 'lh3.googleusercontent.com',
			},
			{
				hostname: 'avatar.iran.liara.run',
			},
		],
	},
};

export default nextConfig;
