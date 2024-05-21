/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/https://${repo}/`;
  basePath = `/https://${repo}`;
}

const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;