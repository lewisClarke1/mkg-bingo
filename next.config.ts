import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const repoName = 'mkg-bingo'; // Replace with your repository name
const basePath = `/${repoName}`;
const assetPrefix = `/${repoName}/`;

module.exports = {
  output: 'export',
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? assetPrefix : '',
};

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
