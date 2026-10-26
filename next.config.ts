import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  output: "standalone",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer, dev }) => {
    // Emit videos next to Next's own static media so both server and client builds resolve the same URL.
    // The server output is nested one level deeper in production builds (same as Next's image loader).
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name].[contenthash:8][ext]',
        publicPath: '/_next/static/media/',
        outputPath: isServer ? (dev ? '../static/media/' : '../../static/media/') : 'static/media/',
      },
    });
    return config;
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-mdx-import-media']
  }
})
 

export default withMDX(nextConfig);
