/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "/vivo-aicamera.github.io/";
let basePath = "/vivo-aicamera.github.io";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  basePath,
  assetPrefix,
  output: "export",
};

module.exports = nextConfig;
