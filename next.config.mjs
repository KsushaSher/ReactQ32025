import { distDir } from 'vitest/dist/node.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  distDir: './dist',
};

export default nextConfig;
