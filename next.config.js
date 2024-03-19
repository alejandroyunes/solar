/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin")

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  output: 'export',
}

module.exports = stylexPlugin({
  filename: 'stylex-bundle.css',
  rootDir: __dirname,
  useCSSLayers: true,
})((nextConfig))