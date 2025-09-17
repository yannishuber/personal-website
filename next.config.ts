import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  output: "standalone",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-mdx-import-media']
  }
})
 

export default withMDX(nextConfig);
