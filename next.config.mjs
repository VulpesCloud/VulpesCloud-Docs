import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://avatars.githubusercontent.com/u/185675318')],
  },
};

export default withMDX(config);
